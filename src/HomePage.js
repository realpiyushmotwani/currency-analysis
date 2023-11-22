import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { useNavigate } from 'react-router-dom';
import './styles.css'
const HomePage = () => {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [years, setYears] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Load CSV file and extract columns
    const csvFilePath = `/Exchange_Rate_Report Zip FIle/Exchange_Rate_Report_${selectedYear}.csv`;

    Papa.parse(csvFilePath, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const columns = result.meta.fields || [];

        // Extract unique years
        const uniqueYears = Array.from(new Set(result.data.map((row) => row.Date)));
        setYears(uniqueYears);

        // Extract unique countries
        const uniqueCountries = columns.slice(1); // Exclude the 'Date' column
        setCountries(uniqueCountries);
      },
    });
  }, [selectedYear]);

  const handleGenerateAnalysis = () => {
    if (selectedYear && selectedCountry) {
      // Fetch the data for the selected year and country
      const csvFilePath = `/Exchange_Rate_Report Zip FIle/Exchange_Rate_Report_${selectedYear}.csv`;

      Papa.parse(csvFilePath, {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          const dataForSelectedCountry = result.data.map((row) => ({
            date: row.Date,
            exchangeRate: parseFloat(row[selectedCountry]),
          }));

          // Calculate average exchange rate
          const totalExchangeRate = dataForSelectedCountry.reduce(
            (sum, row) => sum + row.exchangeRate,
            0
          );
          const averageExchangeRate = totalExchangeRate / dataForSelectedCountry.length;

          // Display the analysis
          console.log(`Average exchange rate for ${selectedCountry} in ${selectedYear}: ${averageExchangeRate}`);
        },
      });
    } else {
      console.warn('Please select both year and country before generating analysis.');
    }
  };

  return (
    <div>
      <h1>Exchange Rate Analysis</h1>
      <label>Select Year:</label>
      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <br />

      <label>Select Country:</label>
      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      <br />

      <button onClick={handleGenerateAnalysis}>Generate Analysis</button>
    </div>
  );
};

export default HomePage;
