import os
from datetime import datetime
from typing import List
from bson.objectid import ObjectId
from dotenv import load_dotenv
from fastapi import APIRouter
from motor.motor_asyncio import AsyncIOMotorClient
from pymongo.server_api import ServerApi
from urllib.parse import quote_plus

from models.task import Task

load_dotenv()

uri = os.getenv("MONGODB_URI")

client = AsyncIOMotorClient(uri, server_api=ServerApi("1"))
diddit = client.diddit
tasks = diddit.tasks

tasks_router = APIRouter(prefix="/api/tasks", tags=["tasks"])

task: Task

# /api/tasks


@tasks_router.options("/")
async def options_task() -> dict:
    return {"allowed_methods": ["GET", "POST"]}


@tasks_router.get("/")
async def get_all_tasks() -> List[Task]:
    task_count = await tasks.count_documents({})
    cursor = tasks.find()
    task_list = await cursor.to_list(task_count)
    for task in task_list:
        task["id"] = str(task["_id"])
        del task["_id"]
    return task_list


@tasks_router.post("/")
async def create_task(task: Task) -> dict:
    print("Creating task\n", task)
    task = task.dict(exclude_unset=True)
    if "id" in task:
        del task["id"]
    task["created_at"] = datetime.now()
    task["updated_at"] = datetime.now()
    task["due_date"] = task["due_date"] if "due_date" in task else None
    print("Final Task dict\n", task)
    inserted = await tasks.insert_one(task)
    print("DB return\n", inserted)
    if inserted.inserted_id:
        print("Task created with ID:", str(inserted.inserted_id))
        return {"id": str(inserted.inserted_id)}
    print("Task not created")
    return {"error": "Task not created"}


# /api/tasks/{id}


@tasks_router.options("/{id}")
async def options_task(id: str) -> dict:
    return {"allowed_methods": ["GET", "PUT", "DELETE"]}


@tasks_router.get("/{id}")
async def get_task(id: str) -> Task | dict:
    task = await tasks.find_one({"_id": ObjectId(id)})
    if task:
        task["id"] = str(task["_id"])
        del task["_id"]
        return task
    return {"error": "Task not found"}


@tasks_router.put("/{id}")
async def edit_task(id: str, task: Task) -> dict:
    task = task.dict(exclude_unset=True)
    if "id" in task:
        del task["id"]
    if "created_at" in task:
        del task["created_at"]
    task["updated_at"] = datetime.now()
    task["due_date"] = task.get("due_date", None)
    updated = await tasks.update_one({"_id": ObjectId(id)}, {"$set": task})
    if updated.modified_count:
        return await get_task(id)
    return {"error": "Task not found"}


@tasks_router.delete("/{id}")
async def delete_task(id: str) -> dict:
    deleted = await tasks.delete_one({"_id": ObjectId(id)})
    if deleted.deleted_count:
        return {"success": "Task deleted successfully"}
    return {"error": "Task not found"}
