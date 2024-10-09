// src/components/CandidateDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const CandidateDetail = () => {
    const { id } = useParams();
    const [candidate, setCandidate] = useState(null);

    useEffect(() => {
        const fetchCandidate = async () => {
            try {
                const response = await api.get(`/candidates/${id}/`);
                setCandidate(response.data);
            } catch (error) {
                console.error('Error fetching candidate details:', error);
            }
        };

        fetchCandidate();
    }, [id]);

    if (!candidate) return <p>Loading...</p>;

    return (
        <div>
            <h1>Candidate Details</h1>
            <p><strong>Name:</strong> {candidate.name}</p>
            <p><strong>Status:</strong> {candidate.status}</p>
            <p><strong>Job:</strong> {candidate.job}</p>
            <p><strong>Client:</strong> {candidate.client}</p>
            <p><strong>Recruiter:</strong> {candidate.recruiter}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default CandidateDetail;
