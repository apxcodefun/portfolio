import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
        Get In Touch
      </h2>
      <div className="max-w-2xl mx-auto">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-40 transition duration-1000" />
          <form className="relative space-y-6 bg-gray-800/50 p-8 rounded-lg">
            <div className="space-y-2">
              <label className="text-gray-300">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-gray-300">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email"
              />
            </div>
            <div className="space-y-2">
              <label className="text-gray-300">Message</label>
              <textarea
                className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex justify-center space-x-6">
          {[
            { name: "GitHub", link: "https://github.com/apxcodefun" },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/ardiansyahputra01/",
            },
            {
              name: "Instagram",
              link: "https://instagram.com/ardiansyah__putra",
            },
            { name: "Email", link: "mailto:your@email.com" },
          ].map((social) => (
            <a
              key={social.name}
              href={social.link}
              className="text-gray-400 hover:text-blue-400 transition duration-300"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
