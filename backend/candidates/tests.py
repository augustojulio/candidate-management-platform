from django.test import TestCase
from rest_framework.test import APIClient
from django.contrib.auth.models import User
from .models import Client

class ClientTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        
        self.user = User.objects.create_user(username='testuser', password='testpass')
        response = self.client.post('/api/token/', {'username': 'testuser', 'password': 'testpass'})
        self.token = response.data['access']
        
        self.clientt = Client.objects.create(name="Test Client", email="aaa@aaa.com", phone="1234567890")
        
        self.client.credentials(HTTP_AUTHORIZATION='Bearer ' + self.token)

    def test_candidate_creation(self):
        self.assertEqual(self.clientt.name, "Test Client")

    def test_get_candidates(self):
        response = self.client.get('/api/clients/')
        self.assertEqual(response.status_code, 200)