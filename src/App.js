// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AnalysisPage from './AnalysisPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <h1>Currency Analysis</h1>
        </header>

        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/analysis">Analysis</a>
          {/* Add more navigation links as needed */}
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
