import { IoIosArrowRoundForward } from "react-icons/io";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Text Section */}
        <div className="mt-10">
          <h1 className="text-5xl font-bold mb-2">Hi, I'm Ardiansyah Putra</h1>
          <h2 className="text-2xl mb-2">Full Stack Web Developer</h2>
          <span className="block w-full h-1 bg-gradient-to-r from-sblack to-sblu rounded-full"></span>
          <p className="mt-4 text-xl">
            an IT enthusiast with a passion for technology. <br />
            On this page, you'll get to know more about me and my last work.
          </p>
          <button className="relative flex items-center bg-white text-black py-2 rounded-full px-7 pr-14 mt-10">
            About Me
            <IoIosArrowRoundForward className="absolute right-1 bg-black text-white rounded-full h-9 w-9" />
          </button>
        </div>

        {/* Image Section */}
        <div>
          <img
            className="object-cover w-full md:w-[720px] h-[500px] rounded-lg"
            src="/images/home1.png"
            alt="Nature City"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
