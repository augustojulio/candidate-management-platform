// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';
import '../App.css';

const Dashboard = () => {
    const [metrics, setMetrics] = useState({
        openJobs: 0,
        activeCandidates: 0,
        disqualifiedCandidates: 0,
        hiredCandidates: 0,
    });

    useEffect(() => {
        const fetchMetrics = async () => {
            try {
                const response = await api.get('/metrics/'); // Assuming you have an endpoint for metrics
                setMetrics(response.data);
            } catch (error) {
                console.error('Error fetching dashboard metrics:', error);
            }
        };

        fetchMetrics();
    }, []);

    return (
        <div className="container">
            <h1>Dashboard</h1>
            <div className="dashboard">
                <ul>
                    <li>Open Jobs: {metrics.openJobs}</li>
                    <li>Active Candidates: {metrics.activeCandidates}</li>
                    <li>Disqualified Candidates: {metrics.disqualifiedCandidates}</li>
                    <li>Hired Candidates: {metrics.hiredCandidates}</li>
                    <li></li>
                    <li><Link to="/candidates">View Candidates</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
