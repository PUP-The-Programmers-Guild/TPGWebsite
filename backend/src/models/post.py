from pydantic import BaseModel, Field
from datetime import date


class Post(BaseModel):
    event_id: str
    event_title: str
    event_date: date
    event_type: str
    event_description: str = Field(max_length=1000)
    event_fb_link: str
    date_created: date


