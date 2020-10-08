import React from "react";

import "./WeatherDisplay.css";

import { todaysDate } from "../../utility/Utility";

const WeatherDisplay = (props) => {
  const { weather } = props;
  return (
    <div className="information-container">
      <div className="location-container">
        <h1 className="location">
          {weather.name}, {weather.sys.country}
        </h1>
        <h3 className="date">{todaysDate(new Date())}</h3>
      </div>
      <div className="temperature-container">
        <h1 className="temperature">{Math.round(weather.main.temp)}°C</h1>
        <h2 className="weather">{weather.weather[0].description}</h2>
      </div>
    </div>
  );
};

export default WeatherDisplay;
