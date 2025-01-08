import React from "react";
import Image from "next/image";

const Skill = () => {
  const Skills = [
    { name: "HTML", icon: "/icons/html.png" },
    { name: "CSS", icon: "/icons/css.png" },
    { name: "JavaScript", icon: "/icons/js.png" },
    { name: "React", icon: "/icons/react.png" },
    { name: "Next.js", icon: "/icons/nextjs.png" },
    { name: "Tailwind CSS", icon: "/icons/tailwind.png" },
    { name: "Node.js", icon: "/icons/node.png" },
    { name: "Express.js", icon: "/icons/express.png" },
    { name: "MongoDB", icon: "/icons/mongo.png" },
    { name: "MySQL", icon: "/icons/mysql.png" },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Judul "Skill" yang terletak di tengah */}
      <h2 className="underline text-4xl font-semibold text-center mb-10">
        Skill
      </h2>

      {/* Daftar skill */}
      <div className="flex flex-wrap justify-center space-x-4 mt-10">
        {Skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center bg-base p-2 rounded-md m-2 glass-effect hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <Image src={skill.icon} alt={skill.name} width={40} height={40} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
