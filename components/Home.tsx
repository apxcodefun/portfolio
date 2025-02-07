"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HomeComponent = () => {
  const [userName, setUserName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState("");

  // Load saved name when component mounts
  useEffect(() => {
    const savedName = localStorage.getItem("visitorName");
    if (savedName) {
      setUserName(savedName);
    }
  }, []);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (tempName.trim()) {
      setUserName(tempName.trim());
      localStorage.setItem("visitorName", tempName.trim());
    }
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="relative">
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-40 transition duration-1000 animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
        />

        <div className="relative flex flex-col items-start space-y-4 bg-black/50 p-8 rounded-lg backdrop-blur-sm">
          <motion.div
            className="text-gray-400 text-lg font-medium overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {!userName && !isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Klik Untuk Memperkenalkan Diri Anda! 👋
              </button>
            ) : isEditing ? (
              <form onSubmit={handleNameSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  placeholder="Enter your name"
                  className="bg-gray-800 text-white px-3 py-1 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                  autoFocus
                />
                <button
                  type="submit"
                  className="text-blue-400 hover:text-blue-300"
                >
                  ✓
                </button>
              </form>
            ) : (
              <div className="flex gap-2 items-center">
                <span>Hello {userName}! 👋</span>
                <button
                  onClick={() => {
                    setIsEditing(true);
                    setTempName(userName);
                  }}
                  className="text-gray-500 hover:text-blue-400 text-sm"
                >
                  ✎
                </button>
              </div>
            )}
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Halo Halo
          </motion.h1>

          <div className="space-y-2">
            <motion.p
              className="text-2xl md:text-3xl text-gray-200 font-medium italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I&apos;m
            </motion.p>
            <motion.p
              className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              Ardiansyah Putra
            </motion.p>
            <motion.p
              className="text-xl text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Full Stack Developer
            </motion.p>
          </div>

          <div className="flex gap-4 pt-4">
            <motion.button
              className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
            >
              <a href="#project">Portfolio</a>
            </motion.button>
            <motion.button
              className="px-6 py-2 rounded-full border border-gray-600 text-gray-300 font-medium hover:border-blue-400 hover:text-blue-400 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <a href="#contact">Contact Me</a>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
