"use client";

import { MdArrowOutward } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  // State untuk toggle menu hamburger
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi untuk toggle menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="flex items-center justify-between px-6 py-4 sticky top-0 mt-5 z-50">
      {/* Menu di Desktop */}
      <ul className="hidden md:flex space-x-6 bg-gradient-to-r from-sblack to-sblu h-11 items-center rounded-full px-8 py-2 shadow-lg mx-auto">
        <li className="hover:text-lavender cursor-pointer transition-colors duration-300">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-lavender cursor-pointer transition-colors duration-300">
          <Link href="/about">About Me</Link>
        </li>
        <li className="hover:text-lavender cursor-pointer transition-colors duration-300">
          <Link href="/skill">Skill</Link>
        </li>
        <li className="hover:text-lavender cursor-pointer transition-colors duration-300">
          <Link href="/project">Project</Link>
        </li>
      </ul>

      {/* Tombol Contact di Desktop */}
      <button className="hidden md:flex items-center text-black px-4 py-2 bg-white rounded-full hover:bg-blue-600">
        Contact <MdArrowOutward className="ml-2" />
      </button>

      {/* Hamburger Menu untuk Mobile */}
      <div
        className="md:hidden flex flex-col items-center cursor-pointer space-y-2"
        onClick={toggleMenu}
      >
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </div>

      {/* Menu untuk Mobile (Hamburger Menu) */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute left-0 top-full bg-gradient-to-r from-sblack to-sblu py-4 px-6 rounded-xl shadow-lg w-full`}
      >
        <ul className="space-y-4">
          <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300">
            <Link href="/about">About Me</Link>
          </li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300">
            <Link href="/skill">Skill</Link>
          </li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300">
            <Link href="/project">Project</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
