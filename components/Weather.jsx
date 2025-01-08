"use client";
import { useState, useEffect } from "react";
import { CiLocationOn, CiTempHigh, CiCloud } from "react-icons/ci"; // Impor ikon yang diperlukan
import { FaSun, FaCloud } from "react-icons/fa"; // Impor ikon cerah dan berawan

const WeatherData = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = process.env.NEXT_PUBLIC_WEATHER_API; // Pastikan ENV key benar
      const city = "Banda Aceh"; // Nama kota yang benar
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
          setWeather(data);
        } else {
          console.error("Error:", data.message);
          setError(true);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error || !weather)
    return <p>Data tidak tersedia atau terjadi kesalahan.</p>;

  // Menentukan ikon berdasarkan kondisi cuaca
  const getWeatherIcon = () => {
    const description = weather.weather[0].description.toLowerCase();
    if (description.includes("clear")) {
      return <FaSun style={{ marginRight: "8px" }} />;
    } else if (description.includes("awan mendung")) {
      return <FaCloud style={{ marginRight: "8px" }} />;
    } else if (description.includes("rain")) {
      return <CiCloud style={{ marginRight: "8px" }} />;
    } else {
      return <CiTempHigh style={{ marginRight: "8px" }} />;
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="flex items-center">
        <CiLocationOn style={{ marginRight: "8px" }} />
        {weather.name}
      </h1>
      <p className="flex items-center">
        {getWeatherIcon()}
        {weather.main.temp}°C
      </p>
    </div>
  );
};

export default WeatherData;
