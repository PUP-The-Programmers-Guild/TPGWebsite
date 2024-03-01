from fastapi import APIRouter

router = APIRouter(prefix="/example")

@router.get("/")
async def example() -> dict:
    return {"message": "Example Route"}

@router.post("/add_two_numbers")
async def add_two_numbers(a: int, b: int) -> dict:
    return {"result": a + b}


