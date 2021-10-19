import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <span className="WeatherForecast-day">TUE</span>
      <span className="WeatherForecast-temperature-max"> - 29° |</span>
      <span className="WeatherForecast-temperature-min"> 25°</span>
      <span className="WeatherForecast-icon">
        <WeatherIcon code="01d" size={40} />
      </span>
    </div>
  );
}
