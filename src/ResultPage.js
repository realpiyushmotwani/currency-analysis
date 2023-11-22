// ResultPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ResultPage = () => {
  const { country1, country2, date } = useParams();
  console.log('Params:', country1, country2, date);

  return (
    <div>
      <h1>Your Selection</h1>
      <p>Country 1: {country1}</p>
      <p>Country 2: {country2}</p>
      <p>Date: {date}</p>
      {/* Add space for graphs or other content */}
    </div>
  );
};

export default ResultPage;
