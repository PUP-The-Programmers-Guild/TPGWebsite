import os
import json
import boto3
import base64
from datetime import datetime
from boto3.dynamodb.conditions import Attr

s3 = boto3.resource('s3')
bucket = s3.Bucket(os.environ['ASSETBUCKET'])
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(os.environ['FAQSEVENTSTABLE'])

"""
    events_schema = {
        To be worked by backend:
        "content_type": "events",
        "id": "string", = tpg-events-000
        "date_created": "string",
        "date_updated: "string",
        "image_url": "string",

        To be worked by frontend:
        "title": "string",
        "description": "string"
        "event_type: "string",
        "event_dates": ["string"],
        "facebook_url: "string",
        "image": "base64 string",
        "image_type" "string" -> png, jpg, jpeg, etc.
        "tags": ["string"]
        "admin_id": "string"
    }
"""


def counter(content_type):
    response = table.scan(
        FilterExpression=Attr('content_type').eq(content_type)
    )
    items = response['Items']
    return len(items)

def upload_image(image_data_base64, title, image_type):
    image_data_base64 = base64.b64decode(image_data_base64)
    image_path = f"event_images/{title}.{image_type}"
    bucket.put_object(Key=image_path, Body=image_data_base64, ContentType=f'image/{image_type}')
    image_url = f"https://{bucket.name}.s3.amazonaws.com/{image_path}"
    return image_url

def create_event(event_body):
    try: 
        count = counter('events')

        image_data_base64 = event_body['image']
        image_type = event_body['image_type']

        title = event_body['title']

        title = title.replace(" ", "-")

        image_url = upload_image(image_data_base64, title, image_type)

        tags = event_body.get('tags', [])

        event_dates = event_body.get('event_dates', [])
        
        event_id = f"tpg-events-{count + 1:03}"

        date_created = datetime.now().isoformat()
        date_updated = datetime.now().isoformat()
        
        content_type = "events"

        schema = {
            "content_type": content_type,
            "id": event_id,
            "date_created": date_created,
            "date_updated": date_updated,
            "image_url": image_url,

            "title": event_body['title'],
            "description": event_body['description'],
            "event_type":  event_body['event_type'],
            "event_dates": event_dates,
            "facebook_url": event_body['facebook_url'],
            "tags": tags,
            "admin_id": event_body['admin_id']
        }

        uploaded_content = {
            "id": event_id,
            "title": event_body['title'],
            "description": event_body['description'],
            "event_type":  event_body['event_type'],
            "event_dates": event_dates,
            "facebook_url": event_body['facebook_url'],
            "tags": tags,
            "image_url": image_url,
            "date_created": date_created,
            "date_updated": date_updated,
        }

        table.put_item(Item=schema)
        return uploaded_content
    except Exception as e:
        print(f"An error occurred: {e}")
        return e


def handler(event, context):
    try:
        event_body = json.loads(event.get("body"))
        print(event_body)

        event_body = create_event(event_body)

        status_code = 201
        message =  "Event created successfully" 

    except Exception as e:
        status_code = 500
        message =  "An error occurred while creating event" + str(e)
        print(f"An error occurred: {e}")

    body = {
        "message": message,
        "data": event_body
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