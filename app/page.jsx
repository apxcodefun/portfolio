"use client";
import { ReactTyped } from "react-typed";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const Home = () => {
  const [animate, setAnimate] = useState(false);
  const aboutRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      },
      { threshold: 0.5 }
    );
    const currentRef = aboutRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  return (
    <>
      <div
        className={`mt-1/2 p-8 fade-in-up ${animate ? "visible" : ""}`}
        ref={aboutRef}
      >
        <div className="flex flex-col md:flex-row items-center gap-4 px-4">
          {/* Text Section */}
          <div className="flex flex-col justify-center mt-6 md:mt-0 order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2">
              Hi <br />{" "}
              <span className="text-2xl italic">I'm Ardiansyah Putra</span>
            </h1>
            <h2 className="text-xl sm:text-2xl mb-2 italic">
              <ReactTyped
                strings={[
                  "Junior Web Developer passionate about coding and technology.",
                  "Dedicated to learning and improving skills every day.",
                  "Experienced with JavaScript, React, and Tailwind CSS.",
                  "Always curious and excited to explore new technologies.",
                ]}
                typeSpeed={40}
                loop
                backSpeed={50}
              />
            </h2>
            <span className="block w-20 sm:w-full h-1 bg-gradient-to-r from-sblack to-sblu rounded-full"></span>
            <p className="mt-4 text-lg sm:text-xl">
              An IT enthusiast with a passion for technology. <br />
              On this page, you'll get to know more about me and my last work.
            </p>
            <div className="flex justify-between mt-6">
              <button className="flex items-center justify-between bg-white text-black rounded-full px-4 py-1 shadow-lg hover:shadow-md transition duration-300 ml-0">
                <Link href="/about" className="pr-4">
                  About Me
                </Link>
                <IoIosArrowRoundForward className="bg-black text-white rounded-full h-8 w-8 p-1" />
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[720px] flex justify-center mb-6 md:mb-0 order-1 md:order-2">
            <img
              className="object-cover w-full md:h-[500px] h-[400px] sm:h-[250px] rounded-lg"
              src="/images/home1.png"
              alt="Nature City"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
