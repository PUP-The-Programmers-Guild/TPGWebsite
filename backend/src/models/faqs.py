from pydantic import BaseModel, Field


class Faqs(BaseModel):
    question_id: int
    question_title: str
    question_answer: str = Field(max_length=1000)
