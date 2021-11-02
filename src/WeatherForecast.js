import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "5e0fcc58c082e36d858a395f2ca04597";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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
