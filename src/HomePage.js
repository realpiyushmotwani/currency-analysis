// HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [countries, setCountries] = useState(['', '']);
  const navigate = useNavigate();

  const handleCountryChange = (index, value) => {
    const newCountries = [...countries];
    newCountries[index] = value;
    setCountries(newCountries);
  };

  const generateAnalysis = () => {
    if (countries[0] && countries[1]) {
      navigate(`/analysis?country1=${countries[0]}&country2=${countries[1]}`);
    } else {
      alert('Please select both countries.');
    }
  };

  return (
    <div className="home-container">
      <h2>Home Page</h2>
      <label>Country 1:</label>
      <input
        className="home-input"
        type="text"
        value={countries[0]}
        onChange={(e) => handleCountryChange(0, e.target.value)}
      />
      <br />
      <label>Country 2:</label>
      <input
        className="home-input"
        type="text"
        value={countries[1]}
        onChange={(e) => handleCountryChange(1, e.target.value)}
      />
      <br />
      <button className="home-button" onClick={generateAnalysis}>
        Generate Analysis
      </button>
    </div>
  );
};

export default HomePage;
