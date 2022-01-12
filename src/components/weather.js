import React, { useState, useEffect } from "react";
import axios from "axios";

import keys from "../config";
const Weather = () => {
  const baseUrl = "https://api.openweathermap.org/data/2.5/";

  const [userInput, setUserInput] = useState("");
  const [weatherData, setWeatherData] = useState();
  const getWeather = (endpoint) => {
    axios
      .get(`${baseUrl}weather?q=${endpoint}&units=metric&appid=${keys.apiKey}`)
      .then((weather) =>
        localStorage.setItem("weather", JSON.stringify(weather.data))
      )
      .catch((err) => console.log("Please type an existing city name"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setWeatherData(JSON.parse(localStorage.getItem("weather")))
    }, 1000);

    getWeather(userInput);
  };

  const direction = weatherData?.wind?.deg;
  const windD = [
    { direction: "N", start: 310, end: 360 },
    { direction: "N", start: 1, end: 50 },
    { direction: "W", start: 230, end: 309 },
    { direction: "S", start: 130, end: 229 },
    { direction: "E", start: 49, end: 129 },
  ];

  const findDirection = windD.find(
    (dir) => dir.start <= direction && dir.end >= direction
  );
  const windDirection = findDirection?.direction;

  useEffect(() => {
    //default city
    getWeather("spain")
    setWeatherData(JSON.parse(localStorage.getItem("weather")))
  }, []);
  //console.log(weatherData);
  // the time
  const year = new Date();
  const getFullYear = year.getFullYear();
  const getDayName = () => {
    return year.toLocaleDateString("en-US", { weekday: "long" });
  };
  const getTime = () => {
    return year.toLocaleDateString("en-US", { day: "numeric" });
  };
  const getMonthName = () => {
    return year.toLocaleDateString("en-US", { month: "long" });
  };
 //console.log(weatherData?.weather[0]?.main)
  return (
    <div className={`${weatherData?.weather[0]?.main}  app-wrap`}>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userInput}
            placeholder="enter a city name"
            onChange={(e) => setUserInput(e.target.value)}
          />
          <input type="submit" id="submit" value="Search" />
        </form>
      </header>
      {weatherData?.main && (
        <main>
          <section className="location">
            <div className="city">
              {" "}
              {weatherData.name}, {weatherData.sys.country}
            </div>
            <div className="date">
              {getDayName()} {getTime()} {getMonthName()} {getFullYear}
            </div>
          </section>
          <div className="current">
            <div className="temp">
              <span className="tempN" id="temp">
                {weatherData.main.temp.toFixed()}
              </span>
              <span>°</span>
            </div>
            <div className="feelsContainer">
              Feels like{" "}
              <span className="feels">
                {weatherData.main.feels_like.toFixed()}
              </span>
              <span>°</span>
            </div>

            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              className="icon"
              alt=""
            />

            <div className="weather">{weatherData.weather[0].main}</div>
            <div className="hi-low">
              Max {weatherData.main.temp_min.toFixed()}° / Min{" "}
              {weatherData.main.temp_max.toFixed()}°
            </div>
            <div className="wind">
              <i className="fas fa-wind"></i>
              <div>
                Wind direction: <div className="windDeg">{windDirection}</div>
              </div>
              <div>
                Speed:{" "}
                <span className="windSpeed">{weatherData.wind.speed}km/h</span>
              </div>
              <div>
                Max-gust:{" "}
                <span className="windGust">{weatherData.wind.gust}km/h</span>
              </div>
            </div>
            <div className="hum-img">
              <i className="fas fa-water"></i>

              <div className="humidity">
                {" "}
                Humidity:{weatherData.main.humidity}%
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};
export default Weather;
