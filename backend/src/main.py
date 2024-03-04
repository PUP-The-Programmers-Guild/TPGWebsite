from fastapi import FastAPI
from src.cors import config as cors_config
from src.routers import root, example, posts, faqs

# from app.database import connection as db_connection

app = FastAPI()

# Set up CORS configuration
cors_config.setup_cors(app)

# Include root router
app.include_router(root.router)

# Include example router
app.include_router(example.router)

# Incluse posts router
app.include_router(posts.router)

# INclude faqs router
app.include_router(faqs.router)
