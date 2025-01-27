"use client";
import { useState, useEffect, useRef } from "react";

const Skill = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );
    if (skillRef.current) {
      observer.observe(skillRef.current);
    }
    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);
  const skillList = [
    { id: 1, name: "JavaScript", icon: "/svg/javascript.png" },
    { id: 2, name: "HTML", icon: "/svg/html.png" },
    { id: 3, name: "CSS", icon: "/svg/css.png" },
    { id: 4, name: "React JS", icon: "/svg/react.png" },
    { id: 5, name: "Tailwind CSS", icon: "/svg/tailwind.png" },
    { id: 6, name: "Next.js", icon: "/svg/next.png" },
    { id: 7, name: "Express JS", icon: "/svg/express.png" },
    { id: 8, name: "Node.js", icon: "/svg/node.png" },
    { id: 9, name: "MongoDB", icon: "/svg/mongo.png" },
    { id: 10, name: "MySQL", icon: "/svg/mysql.png" },
  ];

  return (
    <div
      className={`mt-8 p-8 fade-in-up ${isVisible ? "visible" : ""}`}
      id="skills"
      ref={skillRef}
    >
      <div className="flex flex-wrap items-center gap-8 overflow-hidden">
        {/* Skill List */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 flex-grow">
          {skillList.map((skill) => (
            <div
              key={skill.id}
              className="p-4 rounded-xl shadow-md hover:shadow-2xl cursor-pointer transition duration-500 ease-in-out bg-gradient-to-r from-sblack to-sblu mt-2"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 mx-auto"
              />
              <p className="text-center mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
