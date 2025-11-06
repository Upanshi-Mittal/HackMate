# backend/models/candidate_models.py
from pydantic import BaseModel
from typing import Dict

class Candidate(BaseModel):
    name: str
    skills: Dict[str, float]
