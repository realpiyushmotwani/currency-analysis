// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountriesForm from "./CountriesForm";
import YearsPage from "./YearsPage";
import ResultPage from "./ResultPage";
import './styles.css'

const App = () => {
  const [countriesSelection, setCountriesSelection] = useState({
    country1: "",
    country2: "",
  });

  const handleCountrySelection = (country) => {
    // Update the state with the selected country
    setCountriesSelection((prevSelection) => ({
      ...prevSelection,
      country1: country,
    }));
  };

  const handleOtherCountrySelection = (otherCountry) => {
    // Update the state with the selected other country
    setCountriesSelection((prevSelection) => ({
      ...prevSelection,
      country2: otherCountry,
    }));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <CountriesForm
              onSelectCountry={handleCountrySelection}
              onSelectOtherCountries={handleOtherCountrySelection}
            />
          }
        />
        <Route
          path="/years/*"
          element={<YearsPage countriesSelection={countriesSelection} />}
        />
        <Route
          path="/result/:country1/:country2/:date"
          element={<ResultPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
