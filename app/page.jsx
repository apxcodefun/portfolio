import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-4 px-4">
        {/* Text Section */}
        <div className="flex flex-col justify-center mt-10 md:mt-0">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">
            Hi, I'm Ardiansyah Putra
          </h1>
          <h2 className="text-xl sm:text-2xl mb-2">Full Stack Web Developer</h2>
          <span className="block w-20 sm:w-full h-1 bg-gradient-to-r from-sblack to-sblu rounded-full"></span>
          <p className="mt-4 text-lg sm:text-xl">
            An IT enthusiast with a passion for technology. <br />
            On this page, you'll get to know more about me and my last work.
          </p>
          <button className="relative flex items-center bg-white text-black py-2 rounded-full px-7 pr-14 mt-10">
            <Link href="/about">About Me</Link>
            <IoIosArrowRoundForward className="absolute right-1 bg-black text-white rounded-full h-9 w-9" />
          </button>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-[720px] flex justify-center mb-6 md:mb-0">
          <img
            className="object-cover w-full h-[300px] sm:h-[400px] rounded-lg"
            src="/images/home1.png"
            alt="Nature City"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
