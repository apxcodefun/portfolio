import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="pl-20 pr-4 py-20 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-40 transition duration-1000 animate-pulse" />
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/img/profile.png"
              alt="Profile"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
        {/* Content Section */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Hi! I&apos;m an aspiring Full Stack Developer with a strong passion
            for web development. I&apos;m dedicated to learning and implementing
            modern web technologies to create responsive and user-friendly
            applications. Through self-study and hands-on project experience,
            I&apos;m constantly expanding my skills in web development.
          </p>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-blue-400">
              Project Experience
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Developed personal web projects using modern frameworks and
                technologies
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Built responsive and interactive user interfaces with React.js
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Actively learning and implementing new web development concepts
              </li>
            </ul>
          </div>
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition duration-300">
            <a href="/cv.pdf">Download CV</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
