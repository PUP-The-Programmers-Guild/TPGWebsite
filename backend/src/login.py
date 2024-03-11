import os
import json
import boto3
import hashlib
import datetime
import jwt
from boto3.dynamodb.conditions import Attr 

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(os.environ['USERSTABLE'])
secret = os.environ['SECRET']

def generate_jwt(username, user_id, role):

    token = jwt.encode({
        'username': username,
        'user_id': user_id,
        'role': role,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(days=7)
    }, secret, algorithm='HS256')
    return token

def check_credentials(event_body):
    try: 
        username = event_body['username']
        password = event_body['password']

        response = table.scan(
            FilterExpression=Attr('username').eq(username) 
        )

        items = response.get('Items')

        item = items[0]

        if not items[0]:
            raise Exception('Username not found')
        
        encrypted_password = hashlib.sha256((password + secret).encode()).hexdigest()

        if username == item['username'] and encrypted_password == item['password']:

            table.update_item(
                Key={"role": item['role'], "user_id": item['user_id']},
                UpdateExpression="set last_login = :t",
                ExpressionAttributeValues={
                    ":t": str(datetime.datetime.now().isoformat()),
                },
            )

            return generate_jwt(username, item['user_id'], item['role'])
        
        else:
            raise Exception('Invalid Credentials')

    except Exception as e:
        raise e
    

def handler(event, context):
    try:
        event_body = json.loads(event.get('body'))

        jwt_token = check_credentials(event_body)
        print('jwt_token', jwt_token)

        status_code = 200
        message = 'Login Successful'

    except Exception as e:
        status_code = 500
        message = "An error occurred: " + str(e)
        jwt_token = ""


    body = {
        "message": message,
    }

    response = {
        "statusCode": status_code,
        "headers": {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": True,
            "Content-Type": "application/json",
            "Authorization": f"Bearer {jwt_token}"
        },
        "body": json.dumps(body)
    }

    return response
