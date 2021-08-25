import React from "react";
import "./Weather.css";

export default function Weather() {
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
                autocomplete="off"
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
            <h1>Accra</h1>
            <ul>
              <li>Tuesday, 14:38</li>
              <li>Light rain</li>
            </ul>

            <h2>
              <span className="temperature">26</span>
              <span className="units">°C</span>
            </h2>
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="Light Rain"
              width="225px"
            />
            <ul className="description">
              <li>Humidity: 78%</li>
              <li>Wind: 6km/h</li>
            </ul>
          </div>
          <div class="col-5" id="forecast"></div>
        </div>
      </div>
    </div>
  );
}
