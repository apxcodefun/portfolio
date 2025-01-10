"use client";
import { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaSun, FaCloud, FaUmbrella } from "react-icons/fa";

const WeatherData = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = process.env.NEXT_PUBLIC_WEATHER_API;
      const city = "Banda Aceh";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
          setWeather(data);
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error || !weather)
    return <p className="text-center text-red-500">Terjadi kesalahan.</p>;

  const getWeatherIcon = () => {
    const description = weather.weather[0].description.toLowerCase();
    if (description.includes("clear"))
      return <FaSun className="text-yellow-500 text-4xl" />;
    if (description.includes("clouds"))
      return <FaCloud className="text-gray-500 text-4xl" />;
    if (description.includes("rain"))
      return <FaUmbrella className="text-blue-500 text-4xl" />;
    return <CiLocationOn className="text-gray-500 text-4xl" />;
  };

  return (
    <div className="max-w-md mx-auto bg-base rounded-lg shadow-md p-6 space-y-4">
      <div className="flex items-center space-x-2">
        <CiLocationOn className="text-blue-500 text-2xl" />
        <h1 className="text-xl font-medium text-white">{weather.name}</h1>
      </div>

      <div className="flex items-center justify-between">
        <div>{getWeatherIcon()}</div>
        <div className="text-5xl font-bold text-white">
          {weather.main.temp}°C
        </div>
      </div>

      <p className="text-center text-white capitalize">
        {weather.weather[0].description}
      </p>

      <div className="flex justify-between text-sm text-white">
        <div>
          <p>Humidity</p>
          <p className="text-lg font-medium">{weather.main.humidity}%</p>
        </div>
        <div>
          <p>Wind</p>
          <p className="text-lg font-medium">{weather.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
