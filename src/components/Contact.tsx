"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center px-6 py-24 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto w-full">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-cyan-400 text-center mb-4"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-5xl font-bold mb-6"
        >
          Get In Touch
        </motion.h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          I'm always interested in discussing Flutter development,
          Full Stack projects and exciting internship or full-time opportunities.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Email */}

          <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center"
          >
            <FaEnvelope className="text-cyan-400 text-5xl mx-auto mb-5" />

            <h3 className="text-2xl font-bold mb-3">
              Email
            </h3>

            <p className="text-gray-400">
              balireddyvenky06@gmail.com
            </p>

          </motion.div>

          {/* Phone */}

          <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center"
          >
            <FaPhoneAlt className="text-green-400 text-5xl mx-auto mb-5" />

            <h3 className="text-2xl font-bold mb-3">
              Phone
            </h3>

            <p className="text-gray-400">
              +91 9133106018
            </p>

          </motion.div>

          {/* Location */}

          <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center"
          >
            <FaMapMarkerAlt className="text-red-400 text-5xl mx-auto mb-5" />

            <h3 className="text-2xl font-bold mb-3">
              Anakapalli
            </h3>

            <p className="text-gray-400">
              Andhra Pradesh, India
            </p>

          </motion.div>

        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-16">

          <a
            href="mailto:balireddyvenky06mail@gmail.com"
className="relative overflow-hidden rounded-xl px-8 py-4 font-semibold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/40 text-white"          >
            Send Email
          </a>

          <a
            href="/resumee.pdf"
            target="_blank"
            className="px-8 py-4 rounded-xl border border-cyan-400 hover:bg-cyan-400 hover:text-black transition flex items-center gap-3"
          >
            <FaDownload />
            Download Resume
          </a>

        </div>

      </div>
    </section>
  );
}