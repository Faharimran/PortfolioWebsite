import os
import re
import requests
from groq import Groq
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

load_dotenv()

GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
GROQ_API_KEY = os.getenv("GROQ_API_KEY")


GROQ_API_KEY = os.getenv("GROQ_API_KEY")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class RepoRequest(BaseModel):
    repoUrl: str

@app.post("/summarize")
async def summarize(req: RepoRequest):
    # 1. Parse URL
    match = re.search(r"github\.com/([^/]+)/([^/]+)", req.repoUrl)
    if not match:
        return {"error": "Invalid GitHub URL"}

    owner = match.group(1)
    repo = match.group(2).replace(".git", "")

    headers = {
        "Authorization": f"token {GITHUB_TOKEN}",
        "Accept": "application/vnd.github.raw+json"
    }
    base = f"https://api.github.com/repos/{owner}/{repo}"

    # 2. Fetch README
    readme_res = requests.get(f"{base}/readme", headers=headers)
    readme = readme_res.text if readme_res.status_code == 200 else "No README available"

    # 3. Fetch file list
    files_res = requests.get(f"{base}/contents", headers=headers)
    files = []
    if files_res.status_code == 200:
        files = [f["name"] for f in files_res.json() if isinstance(f, dict)]

    # 4. Summarize with Gemini
    try:
        client = Groq(api_key=GROQ_API_KEY)
        result = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[{
                "role": "user",
                "content": f"""
                    Analyze this GitHub repository and explain it in simple, clear language.
                    Structure your response like this:

                    🧠 What it does:
                    🎯 The problem it solves:
                    👤 Who it's for:
                    🛠 Tech stack:

                    README:
                    {readme[:3000]}

                    Files in root:
                    {", ".join(files)}
                """
            }]
        )
        return {"summary": result.choices[0].message.content}
    except Exception as e:
        return {"error": str(e)}