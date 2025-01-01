import { FaReact, FaHtml5 } from "react-icons/fa";
import {
  RiTailwindCssFill,
  RiJavascriptFill,
  RiNodejsLine,
} from "react-icons/ri";
import { FaSquareGithub } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";

const Skill = () => {
  const skills = [
    { name: "HTML", icons: <FaHtml5 /> },
    { name: "JavaScript", icons: <RiJavascriptFill /> },
    { name: "ReactJS", icons: <FaReact /> },
    { name: "Node.js", icons: <RiNodejsLine /> },
    { name: "Tailwind CSS", icons: <RiTailwindCssFill /> },
    { name: "Git", icons: <FaSquareGithub /> },
    { name: "MongoDB", icons: <SiMongodb /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">My Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {skill.name}
            </h2>
            <p className="mt-2 text-gray-600">{skill.icons}</p>
          </div>
        ))}
        <FaReact />
      </div>
    </div>
  );
};

export default Skill;
