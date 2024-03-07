import os 
import json
import boto3
from boto3.dynamodb.conditions import Attr


dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(os.environ['FAQSEVENTSTABLE'])

def get_faqs():
    faqs = table.scan(
        ProjectionExpression='id, title, description',
        FilterExpression=Attr('content_type').eq('faqs')
    )['Items']

    if not faqs:
        return "No faqs found.", faqs

    return "All faqs successfully retrieved", faqs


def handler(event, context):
    print(event)

    try:
        message, faqs = get_faqs()
        status_code = 200
    except Exception as e:
        message = f"An error occurred: {e}"
        faqs = []
        status_code = 500
    
    body = {
        "message": message,
        "faqs": faqs
    }

    response = {
        "statusCode": status_code,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        "body": json.dumps(body)
    }

    return response 