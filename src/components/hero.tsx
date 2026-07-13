"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Rotating Glow */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-[340px] h-[340px] rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-xl opacity-40"
          />

          {/* Floating Image */}
          <motion.img
            src="/profile.jpeg"
            alt="Balireddy Venkatesh"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.05,
              rotate: 2,
            }}
            className="relative w-80 h-80 md:w-[380px] md:h-[380px] rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.5)]"
          />
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-block px-4 py-2 mb-6 rounded-full border border-cyan-400 text-cyan-400 text-sm">
            🚀 Open to Opportunities
          </div>

          <p className="text-cyan-400 text-lg mb-4">
            Hi, my name is
          </p>

          <h1 className="text-6xl md:text-8xl font-bold mb-5">
            Balireddy{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Venkatesh
            </span>
          </h1>

          <h2 className="text-3xl md:text-5xl text-gray-300 mb-6">
            Flutter Developer • Full Stack Developer
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-10">
            Passionate about building scalable mobile and web
            applications using Flutter, Firebase, MongoDB,
            Node.js and Cloud Technologies.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="#projects"
              className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-semibold transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition"
            >
              Resume
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}