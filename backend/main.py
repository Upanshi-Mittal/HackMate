# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.routes import candidates_routes, github_routes,teams_routes, skills_routes

app = FastAPI(
    title="Lumina Hackathon API",
    version="1.0.0",
    description="API for candidate assignment, scoring, and skill management"
)

# Allow frontend or local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # can restrict later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register route modules
app.include_router(candidates_routes.router)
app.include_router(teams_routes.router)
app.include_router(skills_routes.router)
app.include_router(github_routes.router)

@app.get("/")
def root():
    return {"message": "Lumina Hackathon API is running 🚀"}
