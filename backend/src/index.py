import json

def handler(event, context):
    print("PUP TPG API Running...")

    try:
        print("Testing the body...")
        body = {"message": "PUP TPG API Running...", "event": event}
        status_code = 200

    except Exception as e:
        print("Something happened...")
        body = {"message": "Something happened..." + str(e), "event": event}
        status_code = 500

    response = {
        "statusCode": status_code,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        "body": json.dumps(body),
    }

    print("Done...")
    return response