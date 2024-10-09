from django.db import models

class Client(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)

    def __str__(self):
        return self.name
    
class Recruiter(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)

    def __str__(self):
        return self.name
    
class Job(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    salary = models.CharField(max_length=20)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
    
class Candidate(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    status = models.CharField(max_length=50, choices=[('active', 'Active'), ('disqualified', 'Disqualified'), ('hired', 'Hired')])
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    recruiter = models.ForeignKey(Recruiter, on_delete=models.CASCADE)

    def __str__(self):
        return self.name