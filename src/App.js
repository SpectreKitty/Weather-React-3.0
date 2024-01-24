import React from "react";
import "./App.css";
import Weather from "./Weather.js";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="Miami" />
        <footer>
          Code by Astry Brana, open sourced on{" "}
          <a
            href="https://github.com/SpectreKitty/Weather-React-3.0"
            target="_blank"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://weatherreact3.netlify.app/" target="_blank">
            {" "}
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
