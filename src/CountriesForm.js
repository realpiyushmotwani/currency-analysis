// CountriesForm.js
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { useNavigate } from 'react-router-dom';
import './CountriesForm.css'

const CountriesForm = ({ onSelectCountry, onSelectOtherCountries }) => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [otherCountries, setOtherCountries] = useState([]);

  useEffect(() => {
    const csvFilePath = '/Exchange_Rate_Report Zip FIle/Exchange_Rate_Report_2012.csv';
    Papa.parse(csvFilePath, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const columns = result.meta.fields || [];
        const uniqueCountries = columns.slice(1);
        setOtherCountries(uniqueCountries);
      },
    });
  }, []);

  const handleContinue = () => {
    // Handle the Continue button logic
    navigate('/years', { state: { selectedCountry } });
  };

  return (
    <div>
      <h1>Your Currency Analyst</h1>
      <p>Choose the countries you want to analyze</p>
      <label>Country 1:</label>
      <input
        type="text"
        placeholder="U.S. dollar (USD)"
        value={selectedCountry}
        onChange={(e) => onSelectCountry(e.target.value)}
      />
      <br />
      <label>Country 2:</label>
      <select onChange={(e) => onSelectOtherCountries(e.target.value)}>
        <option value="" disabled selected>Select Other Country</option>
        {otherCountries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      <br />
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default CountriesForm;
