# backend/models/skill_models.py
from pydantic import BaseModel
from typing import Dict, List, Optional

class Skill(BaseModel):
    name: str
    weight: Optional[float] = 1.0  # importance level of skill

class SkillSet(BaseModel):
    skills: Dict[str, float]       # e.g., {"python": 0.9, "ml": 0.8}

class SkillFile(BaseModel):
    data: List[Skill]
