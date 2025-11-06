# backend/routes/github_routes.py
from fastapi import APIRouter, HTTPException, Query
from typing import List
from backend.utils.github_utils import analyze_github_profile

router = APIRouter(prefix="/github", tags=["GitHub Analysis"])

@router.get("/analyze")
def analyze_user(username: str = Query(..., description="GitHub username to analyze")):
    """
    Analyze a single GitHub user's activity signals.
    """
    try:
        result = analyze_github_profile(username)
        if "error" in result:
            raise HTTPException(status_code=400, detail=result["error"])
        return {"status": "success", "data": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/features")
def analyze_multiple(users: List[str]):
    """
    Analyze multiple GitHub users and return their computed features.
    """
    try:
        all_results = []
        for username in users:
            data = analyze_github_profile(username)
            all_results.append(data)
        return {"count": len(all_results), "results": all_results}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
