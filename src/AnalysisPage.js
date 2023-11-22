import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { useHistory } from 'react-router-dom';

const AnalysisPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const country1 = searchParams.get('country1') || 'Country 1';
  const country2 = searchParams.get('country2') || 'Country 2';

  const [chartData, setChartData] = useState({});

  useEffect(() => {
    // Fetch data or generate data for charts based on selected countries
    // For simplicity, I'll provide dummy data here

    const data = {
      labels: ['Currency 1', 'Currency 2', 'Currency 3'],
      datasets: [
        {
          label: country1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(75,192,192,0.6)',
          hoverBorderColor: 'rgba(75,192,192,1)',
          data: [65, 59, 80],
        },
        {
          label: country2,
          backgroundColor: 'rgba(255,99,132,0.4)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.6)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [45, 77, 90],
        },
      ],
    };

    setChartData(data);
  }, [country1, country2]);

  return (
    <div>
      <h2>Analysis Page</h2>
      <h3>Currency Comparison: {country1} vs {country2}</h3>
      <div style={{ width: '80%', margin: 'auto' }}>
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default AnalysisPage;
