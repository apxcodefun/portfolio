import React from "react";
import WeatherData from "./Weather";
import { FaGithub } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";

const HomePage = () => {
  return (
    <div
      className="h-screen bg-cover bg-center brightness-50 rounded-badge"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      <div className="flex flex-col justify-center h-full text-black pl-8">
        {/* Kontainer Teks dan Weather */}
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold mb-2 text-white font-pacifico">
              Ardiansyah <span className="block text-8xl">Putra</span>
            </h1>
            <p className="mb-4 text-white pacifico">Junior Web Developer</p>
            {/* Tombol */}
            <div className="flex space-x-7">
              <button
                className="btn rounded-badge outline w-[175px]"
                href="/files/cv.pdf"
              >
                <FaCloudDownloadAlt />
                Get My CV
              </button>
              <button
                className="btn outline rounded-badge w-[175px]"
                href="https://github.com/apxcodefun"
              >
                <FaGithub />
                Go To My Github
              </button>
            </div>
          </div>

          {/* Widget WeatherData */}
          <div className="mr-7">
            <WeatherData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
