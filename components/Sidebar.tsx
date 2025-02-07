"use client";
import { useEffect } from "react";
import Image from "next/image";

const Sidebar = ({ active }: { active: string }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`Section in view: ${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <aside className="fixed top-1/2 transform -translate-y-1/2 left-4 z-50">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-20" />
        <ul className="relative flex flex-col space-y-6 bg-gray-800/50 backdrop-blur-sm items-center rounded-full p-4 shadow-xl">
          {[
            { name: "home", icon: "/img/home.png" },
            { name: "about", icon: "/img/about.png" },
            { name: "project", icon: "/img/project.png" },
            { name: "skill", icon: "/img/skill.png" },
            { name: "contact", icon: "/img/contact.png" },
          ].map((item) => (
            <li
              key={item.name}
              className={`cursor-pointer flex flex-col items-center relative group`}
            >
              <a
                href={`#${item.name}`}
                className="flex items-center justify-center w-12 h-12 rounded-full group-hover:bg-gray-700/50 relative z-10"
              >
                <Image
                  src={item.icon}
                  alt={`${item.name}.png`}
                  width={24}
                  height={24}
                  className={`transition-transform duration-300 ${
                    active === item.name ? "scale-110" : ""
                  }`}
                />
                {active === item.name && (
                  <div className="absolute -bottom-1 w-1 h-1 bg-blue-500 rounded-full animate-droplet" />
                )}
              </a>
              <div
                className={`absolute left-0 top-0 w-12 h-12 rounded-full transition-all duration-300 ${
                  active === item.name
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-110 animate-ripple"
                    : "bg-transparent scale-100"
                }`}
              />
              <div
                className={`absolute left-16 whitespace-nowrap top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                  active === item.name
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
              >
                <span className="text-white font-medium px-3 py-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
