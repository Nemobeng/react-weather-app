import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <span className="WeatherForecast-day">TUE</span>
      <span className="weather-forecast-temperature-max"> - 29° |</span>
      <span className="weather-forecast-temperature-min"> 25°</span>
      <WeatherIcon code="01d" size={40} />
    </div>
  );
}
