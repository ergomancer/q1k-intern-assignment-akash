from enum import Enum
from datetime import datetime
from pydantic import BaseModel
from typing import Optional


class Status(str, Enum):
    pending = "pending"
    in_progress = "in_progress"
    completed = "completed"


class Priority(str, Enum):
    low = "low"
    medium = "medium"
    high = "high"


class Task(BaseModel):
    id: Optional[str] = None
    title: str
    description: str
    status: Status
    priority: Priority
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    due_date: Optional[datetime] = None
