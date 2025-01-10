"use client";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import ThemeChange from "./../components/ThemeChange";
import Link from "next/link";

const Navbar = () => {
  const [theme, setTheme] = useState("forest");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "forest";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <nav
      className={`flex justify-between items-center p-4 rounded-badge ${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      {/* Menu dengan efek glassy */}
      <ul className="flex space-x-4 ">
        <li className="hover:scale-105 transition-transform duration-300 ease-in-out">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:scale-105 transition-transform duration-300 ease-in-out">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:scale-105 transition-transform duration-300 ease-in-out">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {/* Data Theme And GitHub Account */}
      <div className="flex items-center space-x-4">
        <ThemeChange />
        <Link href="https://github.com/apxcodefun">
          <FaGithub className="w-6 h-6" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
