"use client";
import { useState, useEffect } from "react";
import HomeComponents from "../components/Home";
import About from "../components/About";
import Project from "../components/Project";
import Skill from "../components/Skill";
import Contact from "../components/Contact";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "project", "skill", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-gradient-to-br from-gray-900 to-black min-h-screen text-white relative">
      <Sidebar active={activeSection} />
      <div className="w-full">
        <section id="home" className="min-h-screen">
          <HomeComponents />
        </section>
        <section id="about" className="min-h-screen">
          <About />
        </section>
        <section id="project" className="min-h-screen">
          <Project />
        </section>
        <section id="skill" className="min-h-screen">
          <Skill />
        </section>
        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </div>
    </main>
  );
}
