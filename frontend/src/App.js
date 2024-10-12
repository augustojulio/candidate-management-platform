// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CandidateList from './components/CandidateList';
import CandidateDetail from './components/CandidateDetail';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  console.log('App is rendering');
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for Login */}
          <Route path="/login" element={<Login />} />

          {/* Route for Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Route for the list of candidates */}
          <Route path="/candidates" element={<CandidateList />} />

          {/* Route for candidate details (using candidate ID) */}
          <Route path="/candidates/:id" element={<CandidateDetail />} />

          {/* Default route */}
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
