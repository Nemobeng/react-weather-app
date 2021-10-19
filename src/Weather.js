import React, { useState } from "react";
import axios from "axios";
import { Puff } from "react-loading-icons";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "5e0fcc58c082e36d858a395f2ca04597";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter city name"
                  className="form-control"
                  autoComplete="off"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input type="submit" value="Search" className="form-control" />
              </div>
            </div>
          </form>

          <div className="row">
            <div className="col-7">
              <WeatherInfo data={weatherData} />
            </div>
            <div className="col-5">
              <WeatherForecast />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="loading">
        <Puff stroke="#500909" />
        <p>Loading...</p>
        <br />
        <br />
      </div>
    );
  }
}
