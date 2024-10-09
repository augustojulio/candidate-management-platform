// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CandidateList from './components/CandidateList';
import CandidateDetail from './components/CandidateDetail';
import Dashboard from './components/Dashboard';

function App() {
  console.log('App is rendering');
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Route for the list of candidates */}
          <Route path="/candidates" element={<CandidateList />} />

          {/* Route for candidate details (using candidate ID) */}
          <Route path="/candidates/:id" element={<CandidateDetail />} />

          {/* Default route */}
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
