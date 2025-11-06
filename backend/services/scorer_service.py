# backend/services/scorer_service.py
from hackmate.scorer import score_candidate_for_role
from typing import Dict

def compute_score(candidate: Dict, role: Dict):
    """
    Wrapper around hackmate.scorer.score_candidate_for_role
    """
    return score_candidate_for_role(candidate, role)

def evaluate_team(team_members):
    """
    Evaluate multiple candidates for their roles.
    """
    results = []
    for member in team_members:
        candidate = {"name": member["name"], "skills": member["skills"]}
        role = {"name": member["role"], "requirements": member["skills"]}
        score = score_candidate_for_role(candidate, role)
        results.append({"member": member["name"], "role": member["role"], "score": score})
    return results
