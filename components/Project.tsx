import React from "react";
import Image from "next/image";

const Project = () => {
  const projects = [
    {
      title: "Ecommerce Website",
      description: "Ecommerce build with React, Express and MongoDB",
      image: "/img/ecomm.png",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "ExpressJS",
        "Tailwind",
        "MidTrans",
      ],
      link: "https://github.com/apxcodefun/front-ecom",
    },
    {
      title: "Classic Loker App",
      description: "Loker App Classic Ui with Next.JS and MongoDB",
      image: "/img/classi.png",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      link: "https://lokerapp-iota.vercel.app/",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
        My Projects
      </h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative w-full h-full bg-gray-800/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-40 transition duration-1000" />
            <div className="relative h-full">
              <div className="p-6 space-y-4 flex flex-col h-full">
                <div className="aspect-video relative rounded-lg overflow-hidden w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
