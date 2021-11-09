import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecaset] = useState(null);

  function handleResponse(response) {
    setForecaset(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div>
        {forecast.map(function (dailyForecast, index) {
          if (0 < index && index < 6) {
            return (
              <div key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    const apiKey = "5e0fcc58c082e36d858a395f2ca04597";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
