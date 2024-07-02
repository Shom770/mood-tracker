from datetime import datetime
from os import environ

from dotenv import load_dotenv
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient

load_dotenv()

MONGO_PASSWORD = environ["MONGODB_PASSWORD"]
URI = f"mongodb+srv://shayaanwadkar:{MONGO_PASSWORD}@cluster0.bwdwtcf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app = FastAPI()
client = MongoClient(URI)
database = client["db"]

origins = ["http://localhost:8081"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/send_data")
async def send_data(request: Request):
    data = await request.json()
    score, notes = data["score"], data["notes"]

    scores = database["scores"]
    formatted_date = datetime.today().strftime("%m/%d/%Y")

    if scores.find_one({"date": formatted_date}):  # Already exists, so score has to be updated.
        scores.update_one({"date": formatted_date}, {"$set": {"date": formatted_date, "score": score, "notes": notes}})
        return {"action": "Score updated successfully."}
    else:
        scores.insert_one({"date": formatted_date, "score": score, "notes": notes})
        return {"action": "Score added successfully."}
