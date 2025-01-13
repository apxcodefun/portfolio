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
              <button className="btn rounded-badge outline w-[175px]">
                <FaCloudDownloadAlt />
                <a href="/files/cv.pdf">Get My CV</a>
              </button>
              <button className="btn outline rounded-badge w-[175px]">
                <FaGithub />
                <a href="https://github.com/apxcodefun">Go To My Github</a>
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
