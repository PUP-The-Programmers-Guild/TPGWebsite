import json

def handler(event, context):
    print("PUP TPG API Running...")

    try:
        print("Testing the body...")
        body = {"message": "PUP TPG API Running...", "event": event}

    except Exception as e:
        print("Something happened...")
        body = {"message": "Something happened..." + str(e), "event": event}

    response = {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        "body": json.dumps(body),
    }

    print("Done...")
    return response