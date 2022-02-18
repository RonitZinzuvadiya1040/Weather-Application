import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Weather from "./Component/Weather";
import WeatherCard from "./Component/Weather_Card";
import { weather_app } from "./Component/Weather_Form";

const App = () => {
  const [originalArray, setOriginalArray] = useState(weather_app);

  const originalArr = (arry) => {
    setOriginalArray(arry);
  };
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<WeatherCard weatherData={originalArray} />} />
        <Route
          path="/addWeather"
          element={<Weather onHandArray={originalArr} />}
        />
        <Route
          path="/allweather"
          element={<WeatherCard weatherData={originalArray} />}
        />
        <Route path="/" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
};

export default App;