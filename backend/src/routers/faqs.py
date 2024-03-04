from fastapi import APIRouter
from src.models.faqs import Faqs
from typing import List, Dict

router = APIRouter(prefix="/faqs")

faqs_list = []


@router.get("/")
async def root() -> dict:
    return {"message": "faqs endpoint"}


@router.get("/get_faqs")
async def get_faqs() -> Dict[str, List[Dict]]:
    return {"faqs": faqs_list}


@router.post("/add_faqs")
async def add_faq(faqs: Faqs) -> dict:
    faqs_list.append(faqs.dict())
    return faqs.dict()
