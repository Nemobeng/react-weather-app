import React, { useState } from "react";

export default function WeatherInfo(props) {
  return (
    <h2>
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="units">°C</span>
    </h2>
  );
}
