"use client";

import { useState } from "react";

const ContactPage = () => {
  const [email, setEmail] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState({ ...formState, [id]: value });
  };
  const generateEmail = () => {
    const subject = encodeURIComponent(formState.subject);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nSubject: ${subject}\nMessage: ${formState.message}`
    );
    window.open(
      `mailto:ardiansyah.ap8@gmail.com?subject=${subject}&body=${body}`
    );
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center py-10 px-4 relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 grid grid-cols-12 gap-2 opacity-10">
        {Array.from({ length: 120 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-full aspect-square w-2 h-2"
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative bg-gray-800 bg-opacity-90 shadow-2xl rounded-2xl p-10 max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Text Section */}
        <div className="space-y-6">
          <h1 className="text-5xl text-cyan-400 font-extrabold tracking-wide">
            Hubungi Saya
          </h1>
          <p className="text-lg text-gray-300">
            Jika Anda memiliki pertanyaan atau ingin berdiskusi lebih lanjut,
            silakan isi form di bawah ini. Saya akan segera menghubungi Anda.
          </p>
          <p className="text-base text-gray-400">
            Atau email langsung ke{" "}
            <a
              href="mailto:ardiansyah.ap8@gmail.com"
              className="text-cyan-400 font-semibold underline hover:text-cyan-500"
            >
              ardiansyah.ap8@gmail.com
            </a>
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Nama
              </label>
              <input
                type="text"
                id="name"
                placeholder="Masukkan nama Anda"
                className="mt-2 block w-full border border-gray-600 rounded-lg shadow-md px-4 py-3 text-gray-100 bg-gray-900 focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Masukkan email Anda"
                className="mt-2 block w-full border border-gray-600 rounded-lg shadow-md px-4 py-3 text-gray-100 bg-gray-900 focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-300"
            >
              Subjek
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Subjek pesan Anda"
              className="mt-2 block w-full border border-gray-600 rounded-lg shadow-md px-4 py-3 text-gray-100 bg-gray-900 focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300"
            >
              Pesan
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Tuliskan pesan Anda..."
              className="mt-2 block w-full border border-gray-600 rounded-lg shadow-md px-4 py-3 text-gray-100 bg-gray-900 focus:ring-cyan-500 focus:border-cyan-500"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:from-cyan-600 hover:to-blue-600 focus:ring-4 focus:ring-cyan-400 focus:ring-offset-2 focus:outline-none transition-all"
            >
              Kirim Pesan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
