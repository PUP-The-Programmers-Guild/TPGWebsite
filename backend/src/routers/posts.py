from fastapi import APIRouter, Depends, HTTPException
from src.models.post import Post
from typing import List, Dict

router = APIRouter(prefix="/posts")

event_list = []

@router.get("/")
async def get_posts() -> dict:
    return {"message": "Get Posts Route"}

@router.post("/add_post")
async def add_post(post: Post) -> dict:
    event_list.append(post.dict())
    return post.dict()

@router.get("/get_posts")
async def get_posts() -> Dict[str, List[dict]]:
    return {"posts": event_list}
    