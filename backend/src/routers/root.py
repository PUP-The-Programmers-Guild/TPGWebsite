from fastapi import APIRouter 
router = APIRouter()

@router.get("/")
async def root():
  return {"message": "TPG API v1.0.0"}

