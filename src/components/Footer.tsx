"use client";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative px-6 py-16 border-t border-white/10 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="absolute right-0 bottom-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Logo */}

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-black text-center"
        >
          Balireddy
          <span className="text-cyan-400"> Venkatesh</span>
        </motion.h2>

        <p className="text-center text-gray-400 mt-4">
          Flutter Developer • Full Stack Developer • AI Enthusiast
        </p>

        {/* Social Icons */}

        <div className="flex justify-center gap-8 mt-10">

          <a
            href="https://github.com/Venky0600"
            target="_blank"
            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 hover:scale-110 transition"
          >
            <FaGithub size={26} />
          </a>

          <a
            href="https://www.linkedin.com/in/balireddy-venkatesh-4a6074327/"
            target="_blank"
            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 hover:scale-110 transition"
          >
            <FaLinkedin size={26} />
          </a>

          <a
            href="mailto:blaireddyvenky06@gmail.com"
            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-red-400 hover:text-red-400 hover:scale-110 transition"
          >
            <FaEnvelope size={24} />
          </a>

        </div>

        {/* Divider */}

        <div className="w-full h-px bg-white/10 my-12"></div>

        {/* Bottom */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-gray-500 text-sm">
            © 2026 Balireddy Venkatesh. All Rights Reserved.
          </p>

          <motion.a
            href="#"
            whileHover={{
              scale: 1.1,
              y: -5,
            }}
            className="w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center"
          >
            <FaArrowUp />
          </motion.a>

        </div>

      </div>

    </footer>
  );
}