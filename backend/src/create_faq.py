import os
import json
import boto3
from boto3.dynamodb.conditions import Attr

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(os.environ['FAQSEVENTSTABLE'])


"""
    faqs_schema = {
        "content_type": "faqs",
        "id": "string", = tpg-faq-000
        "title": "string",
        "description": "string"
    }
"""

"""
    sample_payload = {
        "content_type": "faqs",
        "id": "string", = tpg-faq-000
        "title": "string",
        "description": "string"
    }
"""

def counter(content_type):
    response = table.scan(
        FilterExpression=Attr('content_type').eq(content_type)
    )
    items = response['Items']
    return len(items)


def create_faq(event_body):
    try:
        count = counter('faqs')

        schema = {
            "content_type": "faqs",
            "id": f"tpg-faq-{count + 1:03}",
            "title": event_body['title'],
            "description": event_body['description'],
        }

        table.put_item(Item=schema)
        return schema
    except Exception as e:
        print(f"An error occurred: {e}")
        return e


def handler(event, context):
    try:
        event_body = json.loads(event.get('body'))
        print(event_body)

        event_body = create_faq(event_body)

        body = {
            "message": "FAQ created successfully",
            "event": event_body
        }

        response = {
            "statusCode": 201,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            "body": json.dumps(body)
        }

        return response
    except Exception as e:
        print(f"An error occurred: {e}")
        body = {
            "message": "An error occurred while creating FAQ",
            "error": str(e)
        }
        response = {
            "statusCode": 500,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            "body": json.dumps(body)
        }
        return response
    
def handler(event, context):
    try:
        event_body = json.loads(event.get("body"))
        print(event_body)

        event_body = create_faq(event_body)

        status_code = 201
        message =  "FAQ created successfully"

    except Exception as e:
        status_code = 500
        message =  "An error occurred while creating FAQ" + str(e)
        print(f"An error occurred: {e}")
    
    body = {
        "message": message,
        "event": event 
    }

    response = {
        "statusCode": status_code,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        "body": json.dumps(body)
    }

    return response