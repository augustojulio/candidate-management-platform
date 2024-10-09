from django.test import TestCase
from rest_framework.test import APIClient
from .models import Client

class ClientTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.clientt = Client.objects.create(name="Test Client", email="aaa@aaa.com", phone="1234567890")

    def test_candidate_creation(self):
        self.assertEqual(self.clientt.name, "Test Client")

    def test_get_candidates(self):
        response = self.client.get('/api/clients/')
        self.assertEqual(response.status_code, 200)