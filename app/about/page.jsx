"use client";
import { useState, useEffect, useRef } from "react";

const AboutPage = () => {
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
        className={`mt-8 p-8 fade-in-up ${animate ? "visible" : ""}`}
        ref={aboutRef}
      >
        <div className="flex flex-col md:flex-row gap-4">
          {/* Text Section */}
          <div className="mt-10 flex flex-col justify-center md:mt-0 order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2">About Me!</h1>
            <p className="text-xl sm:text-2xl mb-2">
              I am familiar with JavaScript and Tailwind CSS, driven by a strong
              dedication to learning and a proactive approach to adapting to new
              technologies.
            </p>
            <br />
            <p className="mt-4 sm:text-2xl text-xl">
              Programming is my passion, which is why I have been actively
              working while pursuing my academic career.
            </p>
            <br />
            <p className="mt-4 sm:text-2xl text-xl">
              Additionally, I enjoy playing Mobile Games and exploring more
              about programming, because I know if I stop learning my skill will
              get stuck.
            </p>

            {/* Button and Social Media Icons */}
            <div className="flex items-center gap-4 mt-10">
              <button className="bg-gradient-to-r from-sblu to-lavender text-white py-2 rounded-full px-7 pr-14 hover:scale-110 transform duration-200 ease-in-out">
                Show My Work
              </button>

              {/* GitHub Icon */}
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full duration-300 ease-in-out transform hover:scale-110 hover:bg-gray-200">
                <a href="https://github.com/apxcodefun">
                  <img
                    src="/images/github.png"
                    alt="Github"
                    className="w-6 h-6"
                  />
                </a>
              </div>

              {/* Instagram Icon */}
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full duration-300 ease-in-out transform hover:scale-110 hover:bg-pink-200">
                <a href="https://instagram.com/ardiansyah__putra">
                  <img
                    src="/images/instagram.png"
                    alt="Instagram"
                    className="w-6 h-6"
                  />
                </a>
              </div>

              {/* Email Icon */}
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full duration-300 ease-in-out transform hover:scale-110 hover:bg-blue-200">
                <a href="mailto:ardiansyah.ap8@gmail.com">
                  <img src="/images/mail.png" alt="Mail" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[720px] flex justify-center mb-6 md:mb-0 order-1 md:order-2">
            <img
              className="object-cover object-center w-full h-[500px] sm:h-[350px] md:h-[500px] rounded-lg"
              src="/images/about.png"
              alt="Nature City"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutPage;
