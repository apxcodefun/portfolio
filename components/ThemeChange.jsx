"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'; // Pastikan path yang benar
// Import Heroicons

export default function ThemeChange() {
  const [theme, setTheme] = useState("forest");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "forest";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "forest" ? "light" : "forest";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="flex items-center space-x-2">
      {/* Tombol Toggle */}
      <div
        onClick={toggleTheme}
        className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer ${
          theme === "forest" ? "bg-green-500" : "bg-yellow-400"
        }`}
      >
        {/* Lingkaran Geser */}
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-md transform duration-300 flex items-center justify-center ${
            theme === "light" ? "translate-x-7" : "translate-x-0"
          }`}
        >
          {/* Ikon di dalam Lingkaran */}
          {theme === "light" ? (
            <SunIcon className="w-4 h-4 text-yellow-500" />
          ) : (
            <MoonIcon className="w-4 h-4 text-green-700" />
          )}
        </div>
      </div>
    </div>
  );
}
