import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-7">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>

          <WeatherTemperature celsius={props.data.temperature} />
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            width="225px"
          />
          <ul className="description">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
        <div class="col-5" id="forecast"></div>
      </div>
    </div>
  );
}
