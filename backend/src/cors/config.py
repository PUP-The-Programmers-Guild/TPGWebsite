from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

def setup_cors(app: FastAPI) -> None:
  app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True, 
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
  )