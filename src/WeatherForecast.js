import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Fri</div>
          <WeatherIcon code="01d" size={36} />
          <div className="ForecastTemps">
            <span className="ForecastHighTemp">82°</span>{" "}
            <span className="ForecastLowTemp">72°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
