# backend/models/team_models.py
from pydantic import BaseModel
from typing import List, Dict

class TeamMember(BaseModel):
    name: str
    role: str
    skills: Dict[str, float]

class Team(BaseModel):
    name: str
    members: List[TeamMember]
