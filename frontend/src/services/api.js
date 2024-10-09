// src/services/api.js
import axios from 'axios';

// Base API configuration
const api = axios.create({
    baseURL: 'http://localhost:8000/api', // Adjust based on your backend URL
});

// Add the JWT token to the request headers if available
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
