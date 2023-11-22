// YearsPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './YearsPage.css'
const YearsPage = ({ countriesSelection }) => {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  const handleContinue = () => {
    // Ensure all parts of the date are selected
    if (selectedYear && selectedMonth && selectedDay) {
      // Format the selected date
      const formattedDate = `${selectedYear}-${selectedMonth}-${selectedDay}`;
      
      // Redirect to ResultPage with the selected countries and formatted date
      navigate(`/result/${countriesSelection.country1}/${countriesSelection.country2}/${formattedDate}`);
    } else {
      console.warn('Please select a complete date before continuing.');
    }
  };
  

  // Generate options for days (1 to 31)
  const daysOptions = Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
    <option key={day} value={day}>
      {day}
    </option>
  ));

  // Generate options for months (January to December)
  const monthsOptions = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ].map((month, index) => (
    <option key={index + 1} value={index + 1}>
      {month}
    </option>
  ));

  // Generate options for years (2012 to 2022)
  const yearsOptions = Array.from({ length: 11 }, (_, i) => 2022 - i).map((year) => (
    <option key={year} value={year}>
      {year}
    </option>
  ));

  return (
    <div>
      <h1>Select Date</h1>
      <div>
        <label>Day:</label>
        <select onChange={(e) => setSelectedDay(e.target.value)}>
          <option value="" disabled selected>Select Day</option>
          {daysOptions}
        </select>
      </div>
      <div>
        <label>Month:</label>
        <select onChange={(e) => setSelectedMonth(e.target.value)}>
          <option value="" disabled selected>Select Month</option>
          {monthsOptions}
        </select>
      </div>
      <div>
        <label>Year:</label>
        <select onChange={(e) => setSelectedYear(e.target.value)}>
          <option value="" disabled selected>Select Year</option>
          {yearsOptions}
        </select>
      </div>
      <br />
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default YearsPage;
