from django.test import TestCase
from rest_framework.test import APIClient
from django.contrib.auth.models import User
from .models import Client, Recruiter, Job, Candidate

class ClientTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        
        self.user = User.objects.create_user(username='testuser', password='testpass')
        response = self.client.post('/api/token/', {'username': 'testuser', 'password': 'testpass'})
        self.token = response.data['access']
                
        self.client.credentials(HTTP_AUTHORIZATION='Bearer ' + self.token)
        
        self.clientt = Client.objects.create(name="Test Client", email="aaa@aaa.com", phone="1234567890")
        self.recruiter = Recruiter.objects.create(name="Test Recruiter", email="recruiter@test.com", phone="1234567890")
        self.job = Job.objects.create(title="Test Job", description="Job description", salary="10000", client=self.clientt)
        
    def test_update_client(self):
        response = self.client.put(f'/api/clients/{self.clientt.id}/', {'name': 'Updated Client', 'email': 'clientup@client.com', 'phone': '1234567890'})
        self.assertEqual(response.status_code, 200)
        
    def test_update_job(self):
        response = self.client.put(f'/api/jobs/{self.job.id}/', {'title': 'Updated Job', 'description': 'Job description', 'salary': '10000', 'client': self.clientt.id})
        self.assertEqual(response.status_code, 200)
        
    def test_update_recruiter(self):
        response = self.client.put(f'/api/recruiters/{self.recruiter.id}/', {'name': 'Updated Recruiter', 'email': 'recruiterup@recruiter.com', 'phone': '1234567890'})    
        self.assertEqual(response.status_code, 200)

    def test_update_candidate(self):
        self.candidate = Candidate.objects.create(
            name="Test Candidate", 
            email="test@candidate.com", 
            phone="1234567890", 
            status="active", 
            job=self.job, 
            recruiter=self.recruiter
        )
        response = self.client.put(f'/api/candidates/{self.candidate.id}/', {
            'name': 'Updated Candidate', 
            'email': 'candidateup@candidate.com', 
            'phone': '1234567890', 
            'status': 'active', 
            'job': self.job.id, 
            'recruiter': self.recruiter.id
        })
        self.assertEqual(response.status_code, 200)
        
    