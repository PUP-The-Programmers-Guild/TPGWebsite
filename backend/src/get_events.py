import os 
import json
import boto3
from boto3.dynamodb.conditions import Attr


dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(os.environ['FAQSEVENTSTABLE'])

def get_events():
    events = table.scan(
        ProjectionExpression='id, title, description, event_type, event_dates, facebook_url, image_url, date_created, date_updated',
        FilterExpression=Attr('content_type').eq('events')
    )['Items']

    if not events:
        return "No events found.", events

    return "All events successfully retrieved", events

def handler(event, context):
    print(event)

    try:
        message, events = get_events()
        status_code = 200
    except Exception as e:
        message = f"An error occurred: {e}"
        events = []
        status_code = 500
    
    body = {
        "message": message,
        "events": events
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