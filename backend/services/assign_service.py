# backend/services/assign_service.py
from hackmate.assign import assign_candidates_to_roles

def assign_candidates(data):
    return assign_candidates_to_roles(data)
