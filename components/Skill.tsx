import React from "react";

const Skill = () => {
  const skills = [
    "ReactJS",
    "MongoDB",
    "Prisma",
    "NextJS",
    "React Tailwind",
    "Git",
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
        Skills & Expertise
      </h2>
      <div className="max-w-3xl mx-auto">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-40 transition duration-1000" />
          <div className="relative bg-gray-800/50 p-8 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="relative group/item p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700/70 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                    <span className="text-gray-200 font-medium">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
