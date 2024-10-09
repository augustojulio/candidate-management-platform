import pytest
from rest_framework.test import APIClient

@pytest.mark.django_db
def test_candidates_creation():
    client = APIClient()
    response = client.post('/api/candidates/', {'name': 'John Doe', 'email': 'johnd@gmail.com', 'phone': '11111111', 'status': 'active', 'job': 1, 'recruiter': 1})
    assert response.status_code == 201
