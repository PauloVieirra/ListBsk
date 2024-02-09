import React, { useState, useEffect } from "react";
import { Button, Modal, CircularProgress } from "@mui/material";
import './style.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [modalPlayer, setModalPlayer] = useState(false);
  const [loading, setLoading] = useState(false);

  const APIKey = '4077a27697c8f4867859e6e970b8d488';

  const getWeatherByCoordinates = (latitude, longitude) => {
    setLoading(true);
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${APIKey}`)
      .then(response => response.json())
      .then(json => {
        if (json.cod === '404') {
          setError('Oops! Weather data not found :/');
          setWeatherData(null);
        } else {
          setError(null);
          setWeatherData(json);
        }
      })
      .catch(error => {
        setError('Oops! Something went wrong. Please try again.');
        setWeatherData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          getWeatherByCoordinates(latitude, longitude);
        },
        error => {
          setError('Oops! Unable to retrieve your location. Please try again.');
          setWeatherData(null);
          setLoading(false);
        }
      );
    } else {
      setError('Oops! Geolocation is not supported by your browser.');
      setWeatherData(null);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (weatherData) {
      setModalPlayer(true);
    }
  }, [weatherData]);

  const handleClosePlayer = () => {
    setModalPlayer(false);
  };

  return (
   
      <div className="container-clima">
        <div className="search-box">
          <i className="fa-solid fa-location-dot"></i>
          {loading ? (
           
           <div className="contloaderclima"> <CircularProgress style={{ marginLeft: '10px' }} /> </div>
          ) : (
            <div></div>
          )}
        </div>

        {error && (
          <div className="not-found">
            <img src="images/404.png" alt="Not Found" />
            <p>{error}</p>
          </div>
        )}

        {weatherData && loading === false && (
          <div className="weather-box">
            <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0]?.icon}.png`} alt="Weather Icon" />
            <p className="temperature">{weatherData.main?.temp}<span>°C</span></p>
            <p className="description">{weatherData.weather[0]?.description}</p>
          </div>
        )}

        {weatherData && (
  <div className="weather-details">
    <div className="humidity">
      <i className="fa-solid fa-water"></i>
      <div className="texta">
        <span style={{fontSize:'22px'}}>{weatherData.main?.humidity}%</span>
        <p>Humidade</p>
      </div>
    </div>
    <div className="wind">
      <i className="fa-solid fa-wind"></i>
      <div className="texts">
        <span style={{fontSize:'22px'}}>{weatherData.wind?.speed}Km/h</span>
        <p>Vento</p>
      </div>
    </div>
  </div>
)}
      </div>
   
  );
};

export default Weather;
