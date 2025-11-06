# backend/services/skills_service.py
from hackmate.skills import SkillIndex
import json
from typing import List

def load_skills(path: str = "hackmate-model/skills.json") -> List[str]:
    """
    Load available skills from the SkillIndex file.
    """
    si = SkillIndex(path)
    return list(si.skills.keys())

def update_skills_file(data: dict, path: str = "hackmate-model/skills.json"):
    """
    Overwrite the skills.json file with new data.
    """
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4)
    return {"message": "Skills updated successfully"}
