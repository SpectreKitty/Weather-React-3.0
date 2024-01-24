import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter City"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h2>Miami</h2>
      <ul>
        <li>Wednesday 10:24AM</li>
        <li>Partly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Partly cloudy"
            className="float-start"
          />
          <span className="temperature">78</span>
          <span>°F</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipation: 30%</li>
            <li>Humidity: 89%</li>
            <li>Wind: 5mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
