import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Search() {
  let [city, setCity] = useState(null);
  let [results, setResults] = useState(null);

  function showWeather(response) {
    setResults(
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
                        src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
                        alt={response.data.weather[0].description}
                      />
                    </div>
                    <div className="col-10 card-body">
                      <br />
                      <h1> {response.city} </h1>
                      <ul className="today-info">
                        <li> {response.date} </li>
                        <li> {response.data.weather[0].description} </li>
                        <li>Humidity: {response.data.main.humidity}%</li>
                        <li>
                          Wind: {Math.round(response.data.main.speed)} km/h
                        </li>
                      </ul>
                      <div className="number">
                        <h1>
                          <strong>{Math.round(response.data.main.temp)}</strong>
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
      </div>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=930a3a9d32117e6afd045c48755b3db9&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city.."
          onChange={updateCity}
        ></input>
        <input type="submit" value="Search"></input>
      </form>
      <p>{results}</p>
    </div>
  );
}
