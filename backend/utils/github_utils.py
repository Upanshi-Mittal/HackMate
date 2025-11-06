# backend/utils/github_utils.py
from hackmate.github_signals import compute_github_features
from typing import Dict, Any

def analyze_github_profile(username: str) -> Dict[str, Any]:
    """
    Uses hackmate.github_signals to fetch and compute
    metrics from a user's GitHub profile.
    """
    try:
        result = compute_github_features(username)
        return {"username": username, "features": result}
    except Exception as e:
        return {"error": str(e)}
