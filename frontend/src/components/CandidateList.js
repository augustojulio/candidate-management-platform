// src/components/CandidateList.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';
import '../App.css';

const CandidateList = () => {
    const [candidates, setCandidates] = useState([]);
    const [filteredCandidates, setFilteredCandidates] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('');

    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const response = await api.get('/candidates/');
                setCandidates(response.data);
                setFilteredCandidates(response.data);
            } catch (error) {
                console.error('Error fetching candidates:', error);
            }
        };

        fetchCandidates();
    }, []);

    const handleSearch = (term) => {
        setSearchTerm(term);
        const filtered = candidates.filter((candidate) =>
            candidate.name.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredCandidates(filtered);
    };

    const handleStatusFilter = (status) => {
        setStatusFilter(status);
        if (status === '') {
            setFilteredCandidates(candidates);
        } else {
            const filtered = candidates.filter(
                (candidate) => candidate.status === status
            );
            setFilteredCandidates(filtered);
        }
    };

    const updateCandidateStatus = async (id, newStatus) => {
        try {
            await api.put(`/candidates/${id}/`, { status: newStatus });
            const updatedCandidates = candidates.map((candidate) =>
                candidate.id === id ? { ...candidate, status: newStatus } : candidate
            );
            setCandidates(updatedCandidates);
            setFilteredCandidates(updatedCandidates);
            alert('Status updated successfully!');
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    return (
        <div className='container'>
            <h1>Candidate List</h1>
            <div className='candidate-list'>

                {/* Search input */}
                <input
                    type="text"
                    placeholder="Search candidates..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                />

                {/* Status filter */}
                <select
                    value={statusFilter}
                    onChange={(e) => handleStatusFilter(e.target.value)}
                >
                    <option value="">All Statuses</option>
                    <option value="in process">In Process</option>
                    <option value="hired">Hired</option>
                    <option value="disqualified">Disqualified</option>
                </select>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Update Status</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCandidates.map((candidate) => (
                            <tr key={candidate.id}>
                                <td>{candidate.id}</td>
                                <td>{candidate.name}</td>
                                <td>{candidate.status}</td>
                                <td>
                                    <select
                                        value={candidate.status}
                                        onChange={(e) => updateCandidateStatus(candidate.id, e.target.value)}
                                    >
                                        <option value="in process">In Process</option>
                                        <option value="hired">Hired</option>
                                        <option value="disqualified">Disqualified</option>
                                    </select>
                                </td>
                                <td>
                                    <a href={`/candidates/${candidate.id}`}>View Details</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br></br>
                <p><Link to="/dashboard">View Dashboard</Link></p>
                <p><Link to="/candidates/:id">View Candidate Detail</Link></p>
            </div>
        </div>
    );
};

export default CandidateList;
