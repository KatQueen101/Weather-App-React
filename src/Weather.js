import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Thursday 12:50",
    description: "Clear",
    humidity: 49,
    wind: 9,
    imgUrl: "http://openweathermap.org/img/wn/01d@2x.png",
    temperature: 7,
  };

  return (
    <div className="container">
      <div className="Weather">
        <div className="weather-app-wrapper">
          <form className="search-form">
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Search for city..."
                  autofocus="on"
                  autoComplete="off"
                  className="form-control shadow-sm"
                />
              </div>
              <div className="btn-toolbar col-3">
                <input
                  type="submit"
                  value="🔎"
                  className="btn btn-secondary shadow-sm"
                />
                <input
                  type="button"
                  value="Current"
                  className="btn btn-secondary shadow-sm"
                />
              </div>
            </div>
          </form>
          <br />
          <div className="row g-3">
            <div className="col-6 offset-3">
              <div className="mx-auto card">
                <div className="row">
                  <div className="col-2 card-body">
                    <img
                      src={weatherData.imgUrl}
                      alt={weatherData.description}
                    />
                  </div>
                  <div className="col-10 card-body">
                    <br />
                    <h1> {weatherData.city} </h1>
                    <ul className="today-info">
                      <li> {weatherData.date} </li>
                      <li> {weatherData.description} </li>
                      <li>Humidity: {weatherData.humidity}%</li>
                      <li>Wind: {weatherData.wind} km/h</li>
                    </ul>
                    <div className="number">
                      <h1>
                        <strong>{weatherData.temperature}</strong>
                        <span className="units">
                          <a href="/">°C</a> |<a href="/">°F</a>
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        Coded by Alexandria Goss, and open-sourced on{" "}
        <a href="https://github.com/KatQueen101/Weather-App-React">GitHub</a>
      </footer>
    </div>
  );
}
