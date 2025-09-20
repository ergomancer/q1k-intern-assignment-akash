import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.tasks_router import tasks_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("FRONTEND_URL")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(tasks_router)
