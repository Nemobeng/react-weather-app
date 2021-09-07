import React, { useState } from "react";
import axios from "axios";
import { Puff } from "react-loading-icons";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <form>
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Enter city name"
                  className="form-control"
                  autoComplete="off"
                />
              </div>

              <div className="col-3">
                <input type="submit" value="Search" className="form-control" />
              </div>

              <div className="col-3">
                <button
                  type="button"
                  className="btn btn-outline-danger w-100"
                  id="current-button"
                >
                  Current
                </button>
              </div>
            </div>
          </form>

          <div className="row">
            <div className="col-7">
              <h1>{weatherData.city}</h1>
              <ul>
                <li>
                  <FormattedDate date={weatherData.date} />
                </li>
                <li className="text-capitalize">{weatherData.description}</li>
              </ul>

              <h2>
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="units">°C</span>
              </h2>
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                width="225px"
              />
              <ul className="description">
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {Math.round(weatherData.wind)}km/h</li>
              </ul>
            </div>
            <div class="col-5" id="forecast"></div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5e0fcc58c082e36d858a395f2ca04597";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

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
