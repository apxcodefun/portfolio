const AboutPage = () => {
  return (
    <>
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
            Programming is my passion, which is why I have been actively working
            while pursuing my academic career.
          </p>
          <br />
          <p className="mt-4 sm:text-2xl text-xl">
            Additionally, I enjoy playing Mobile Games and exploring more about
            programming, because I know if I stop learning my skill will get
            stuck.
          </p>

          {/* Button and GitHub Icon in the same row */}
          <div className="flex items-center gap-4 mt-10">
            <button className="bg-gradient-to-r from-white to-black text-black py-2 rounded-full px-7 pr-14">
              Show My Work
            </button>
            <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
              <a href="https://github.com/apxcodefun">
                <img
                  src="/images/github.png"
                  alt="Github"
                  className="w-6 h-6"
                />
              </a>
            </div>
            <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
              <a href="https://instagram.com/ardiansyah__putra">
                <img
                  src="/images/instagram.png"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
            </div>
            <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
              <a href="mailto:ardiansyah.ap8@gmail.com">
                <img src="/images/mail.png" alt="Mail" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[720px] flex justify-center mb-6 md:mb-0 order-1 md:order-2">
          <img
            className="object-cover object-center w-full h-[500px] sm:h-[350px] md:h-[500px] rounded-lg"
            src="/images/about.png"
            alt="Nature City"
          />
        </div>
      </div>
    </>
  );
};
export default AboutPage;
