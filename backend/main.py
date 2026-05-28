from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import List, Optional
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig, MessageType
from dotenv import load_dotenv
import uvicorn
import os

# Load environment variables
load_dotenv()

app = FastAPI(title="Anirudha Portfolio API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Email Configuration
conf = ConnectionConfig(
    MAIL_USERNAME=os.getenv("MAIL_USERNAME", ""),
    MAIL_PASSWORD=os.getenv("MAIL_PASSWORD", ""),
    MAIL_FROM=os.getenv("MAIL_FROM", "[EMAIL_ADDRESS]"),
    MAIL_PORT=int(os.getenv("MAIL_PORT", 587)),
    MAIL_SERVER=os.getenv("MAIL_SERVER", "smtp.gmail.com"),
    MAIL_STARTTLS=True,
    MAIL_SSL_TLS=False,
    USE_CREDENTIALS=True,
    VALIDATE_CERTS=True
)

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str

@app.get("/")
async def root():
    return {"message": "Anirudha Portfolio API is active", "status": "online"}

@app.post("/contact")
async def contact(form: ContactForm, background_tasks: BackgroundTasks):
    target_email = "anirudhakhemriya06@gmail.com"
    
    # 1. Always log to terminal for immediate feedback
    print(f"\n--- TRANSMISSION RECEIVED FOR {target_email} ---")
    print(f"Sender: {form.name} <{form.email}>")
    print(f"Content: {form.message}")
    print(f"--------------------------------------------\n")

    # 2. Attempt real email delivery if credentials are provided
    if conf.MAIL_USERNAME and conf.MAIL_PASSWORD:
        message = MessageSchema(
            subject=f"Portfolio Message from {form.name}",
            recipients=[target_email],
            body=f"Name: {form.name}\nEmail: {form.email}\n\nMessage:\n{form.message}",
            subtype=MessageType.plain
        )
        
        fm = FastMail(conf)
        background_tasks.add_task(fm.send_message, message)
        delivery_status = "Real email delivery initiated in background."
    else:
        delivery_status = "Logged to server terminal (SMTP credentials missing in .env)."

    return {
        "status": "success",
        "message": f"Transmission successful! {delivery_status}",
        "recipient": target_email
    }

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
