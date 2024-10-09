from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Candidate, Client, Job, Recruiter
from .serializers import CandidateSerializer, ClientSerializer, JobSerializer, RecruiterSerializer

class CandidateViewSet(viewsets.ModelViewSet):
    queryset = Candidate.objects.all()
    serializer_class = CandidateSerializer
    
class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    
class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    
class RecruiterViewSet(viewsets.ModelViewSet):
    queryset = Recruiter.objects.all()
    serializer_class = RecruiterSerializer
    
class MetricsView(APIView):
    def get(self, request):
        open_jobs_count = Job.objects.count() 
        active_candidates_count = Candidate.objects.filter(status='active').count()
        disqualified_candidates_count = Candidate.objects.filter(status='disqualified').count()
        hired_candidates_count = Candidate.objects.filter(status='hired').count()
        
        metrics = {
            'openJobs': open_jobs_count,
            'activeCandidates': active_candidates_count,
            'disqualifiedCandidates': disqualified_candidates_count,
            'hiredCandidates': hired_candidates_count,
        }
        
        return Response(metrics)