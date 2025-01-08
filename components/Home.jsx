"use client";
import WeatherData from "./Weather";
import Image from "next/image";
import Social from "@/components/Social";
import { ReactTyped } from "react-typed";

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-8 px-4">
      {/* Text */}
      <div className="flex-1 text-center md:text-left space-y-4">
        <h1 className="text-sky-700 text-5xl font-bold">Selamat Datang</h1>
        <p className="text-lg">
          Saya: <span className="font-semibold">Ardiansyah Putra</span>
        </p>
        <ReactTyped
          strings={["Junior Web Developer", "FullStack Developer"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <h2 className="text-2xl font-semibold mt-4">About Me</h2>
        <p className="text-gray-600">
          Seorang Junior Web Developer dengan fokus pada pengembangan situs web
          yang responsif dan user-friendly. Saya selalu berusaha belajar dan
          berkembang untuk menambah kemampuan saya dan juga untuk menciptakan
          solusi digital yang kreatif dan efektif. Dengan perhatian pada detail
          dan pengalaman pengguna.
        </p>
        <Social />
      </div>
      {/* Image */}
      <div className="flex-1 flex justify-center">
        <Image
          src="/images/profile.jpg"
          alt="Test"
          width={500}
          height={800}
          className="rounded-box"
        />
      </div>
    </div>
  );
};

export default HomePage;
