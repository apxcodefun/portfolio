"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectPage = () => {
  const [animate, setAnimate] = useState(false);
  const animateRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const currentRef = animateRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const listProjects = [
    {
      id: 1,
      name: "Ecommerce",
      description:
        "Simple E-commerce site and integration with Midtrans payment",
      image: "/images/ecomm.png",
      github: "https://github.com/apxcodefun/front-ecom",
      backend: "https://github.com/apxcodefun/backend-ecomm",
      preview: "",
      tech: {
        name1: "ReactJS",
        name2: "ExpressJS",
        name3: "MongoDB",
        name4: "NextJS",
      },
    },
    {
      id: 2,
      name: "Loker App",
      description: "Initial build of the locker app, planning future updates.",
      image: "/images/classi.png",
      github: "https://github.com/apxcodefun/lokerapp",
      backend: "",
      preview: "https://lokerapp-iota.vercel.app/",
      tech: {
        name1: "",
        name2: "",
        name3: "MongoDB",
        name4: "NextJS",
      },
    },
  ];

  return (
    <div
      className={`mt-8 p-8 fade-in-up ${animate ? "visible" : ""}`}
      ref={animateRef}
    >
      <div className="flex flex-col items-center mt-10">
        {/* Judul Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">List Of My Work</h1>
        </div>

        {/* Card Projects Section */}
        <div className="flex flex-wrap gap-6 mt-6 justify-center">
          {listProjects.map((list) => (
            <div className="group relative max-w-sm" key={list.id}>
              {/* Card Content */}
              <div className="bg-gradient-to-r from-sblack to-sblu rounded-lg p-6 shadow-lg transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:scale-105">
                <Image
                  src={list.image}
                  alt={list.name}
                  width={600}
                  height={600}
                  className="rounded-md"
                  onError={(e) => (e.target.src = "/images/placeholder.png")}
                />
                <h2 className="text-xl font-semibold mb-4">{list.name}</h2>
                <p className="text-white text-sm">{list.description}</p>

                {/* Teknologi */}
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {Object.entries(list.tech)
                      .filter(([_, value]) => value) // Ambil yang tidak kosong
                      .map(([key, value]) => (
                        <span
                          key={key}
                          className={`${
                            value === "ReactJS"
                              ? "badge bg-blue-500"
                              : value === "NextJS"
                              ? "badge bg-gray-800"
                              : value === "ExpressJS"
                              ? "badge bg-yellow-500"
                              : value === "MongoDB"
                              ? "badge bg-green-500"
                              : "badge bg-gray-300"
                          } text-white text-xs px-4 py-2 rounded-full flex items-center gap-2`} // Flex untuk ikonnya
                        >
                          {/* Menambahkan gambar icon */}
                          {list.tech[`icon${key.charAt(key.length - 1)}`] && (
                            <Image
                              src={
                                list.tech[`icon${key.charAt(key.length - 1)}`]
                              }
                              alt={value}
                              width={16}
                              height={16}
                              className="inline-block" // Menjaga ukuran icon agar kecil
                            />
                          )}
                          {value}
                        </span>
                      ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-4">
                  <button
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium text-white  bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out rounded-full mt-2"
                  >
                    <Link href={list.github}>FrontEnd Git</Link>
                  </button>
                  {list.backend && (
                    <button
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium text-white bg-red-400 transition-colors duration-300 ease-in-out ml-4 rounded-full mt-2"
                    >
                      <Link href={list.backend}>BackEnd Git</Link>
                    </button>
                  )}
                  {list.preview && (
                    <button
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium text-white bg-gradient-to-r from-sgreen to-sblu hover:from-sblu to-sgreen hover:text-white transition-colors duration-300 ease-in-out ml-4 rounded-full mt-2"
                    >
                      <Link href={list.preview}>Preview</Link>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
