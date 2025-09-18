from fastapi import FastAPI

from routes.tasks_router import tasks_router

app = FastAPI()

app.include_router(tasks_router)
