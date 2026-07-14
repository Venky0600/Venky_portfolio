"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiFlutter,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center px-6 py-24"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Heading */}
        

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-bold mb-20"
        >
          About Me
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-20 items-center">

  {/* LEFT SIDE */}

  <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: .8 }}
    viewport={{ once: true }}
  >

    <div className="relative">

      {/* Glow */}

      <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl rounded-3xl"></div>

      {/* Glass Card */}

      <div
        className="
        relative
        backdrop-blur-xl
        bg-white/5
        border
        border-white/10
        rounded-3xl
        p-10
        "
      >

        <h3 className="text-3xl font-bold mb-6">
          Hello 👋
        </h3>

        <p className="text-gray-400 leading-8">

I'm a passionate software developer who enjoys turning ideas into
real-world applications. My journey started with Flutter mobile
development and gradually expanded into Full Stack Development,
React, Firebase, Node.js, MongoDB, and Artificial Intelligence.

I believe great software is not only about writing code—it's about
creating meaningful experiences, solving real problems, and
continuously learning to build better products every day.

</p>

      </div>

    </div>

  </motion.div>
  

  {/* RIGHT SIDE */}

  <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: .8 }}
    viewport={{ once: true }}
  >

    <div className="grid grid-cols-2 gap-6">

  {/* Flutter */}

<motion.div
  initial={{
    opacity: 0,
    scale: 0.8,
    y: 80,
  }}
  whileInView={{
    opacity: 1,
    scale: 1,
    y: 0,
  }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  viewport={{
    once: false,
    amount: 0.3,
  }}

  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:scale-105 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,.35)]"
>
    <h3 className="text-cyan-400 text-3xl mb-3"><SiFlutter className="text-sky-400 text-5xl mb-3" /></h3>

    <h4 className="font-bold text-xl">
      Flutter
    </h4>

    <p className="text-gray-400 text-sm mt-2">
      Cross Platform Development
    </p>

  </motion.div>

  {/* Firebase */}

<motion.div
  initial={{
    opacity: 0,
    scale: 0.8,
    y: 80,
  }}
  whileInView={{
    opacity: 1,
    scale: 1,
    y: 0,
  }}
  transition={{
        delay: 0.3,

    duration: 0.8,
    ease: "easeOut",
  }}
  viewport={{
    once: false,
    amount: 0.3,
  }}

  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:scale-105 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,.35)]"
>
    <h3 className="text-yellow-400 text-3xl mb-3">
        <SiFirebase className="text-yellow-400 text-5xl mb-3" />
        </h3>

    <h4 className="font-bold text-xl">
      Firebase
    </h4>

    <p className="text-gray-400 text-sm mt-2">
      Authentication & Backend
    </p>

  </motion.div>

  {/* Full Stack */}

<motion.div
  initial={{
    opacity: 0,
    scale: 0.8,
    y: 80,
  }}
  whileInView={{
    opacity: 1,
    scale: 1,
    y: 0,
  }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  viewport={{
    once: false,
    amount: 0.3,
  }}

  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:scale-105 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,.35)]"
>
    <h3 className="text-green-400 text-3xl mb-3">
        <FaNodeJs className="text-green-400 text-5xl mb-3" />
        </h3>

    <h4 className="font-bold text-xl">
      Full Stack
    </h4>

    <p className="text-gray-400 text-sm mt-2">
      Node.js •
    </p>

  </motion.div>

  {/* AI */}

 <motion.div
  initial={{
    opacity: 0,
    scale: 0.8,
    y: 80,
  }}
  whileInView={{
    opacity: 1,
    scale: 1,
    y: 0,
  }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  viewport={{
    once: false,
    amount: 0.3,
  }}

  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:scale-105 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,.35)]"
>
    <h3 className="text-purple-400 text-3xl mb-3">🤖</h3>

    <h4 className="font-bold text-xl">
      AI
    </h4>

    <p className="text-gray-400 text-sm mt-2">
      Gemini • ML • Automation
    </p>

  </motion.div>
  {/* React */}

<motion.div
  initial={{
    opacity: 0,
    scale: 0.8,
    y: 80,
  }}
  whileInView={{
    opacity: 1,
    scale: 1,
    y: 0,
  }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  viewport={{
    once: false,
    amount: 0.3,
  }}

  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:scale-105 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,.35)]"
>
  <h3 className="text-cyan-400 text-3xl mb-3">
    <FaReact className="text-cyan-400 text-5xl mb-3" />
    </h3>

  <h4 className="font-bold text-xl">
    React
  </h4>

  <p className="text-gray-400 text-sm mt-2">
    Modern Web Development
  </p>

</motion.div>
{/* MongoDB */}

<motion.div
  initial={{
    opacity: 0,
    scale: 0.8,
    y: 80,
  }}
  whileInView={{
    opacity: 1,
    scale: 1,
    y: 0,
  }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  viewport={{
    once: false,
    amount: 0.3,
  }}

  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:scale-105 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,.35)]"
>

  <h3 className="text-green-400 text-3xl mb-3">
    <SiMongodb className="text-green-500 text-5xl mb-3" />
    </h3>

  <h4 className="font-bold text-xl">
    MongoDB
  </h4>

  <p className="text-gray-400 text-sm mt-2">
    Database 
  </p>

</motion.div>
</div>

  </motion.div>
  {/* Achievement Counters */}

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false }}
  className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
>

  <div className="backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-2xl p-6 text-center hover:scale-105 transition">
    <h3 className="text-4xl font-bold text-cyan-400">4+</h3>
    <p className="text-gray-400 mt-2">Projects</p>
  </div>

  <div className="backdrop-blur-xl bg-white/5 border border-yellow-400/20 rounded-2xl p-6 text-center hover:scale-105 transition">
    <h3 className="text-4xl font-bold text-yellow-400">20+</h3>
    <p className="text-gray-400 mt-2">Certificates</p>
  </div>

  <div className="backdrop-blur-xl bg-white/5 border border-green-400/20 rounded-2xl p-6 text-center hover:scale-105 transition">
    <h3 className="text-4xl font-bold text-green-400">1+</h3>
    <p className="text-gray-400 mt-2">Internship</p>
  </div>

  <div className="backdrop-blur-xl bg-white/5 border border-purple-400/20 rounded-2xl p-6 text-center hover:scale-105 transition">
    <h3 className="text-4xl font-bold text-purple-400">2027</h3>
    <p className="text-gray-400 mt-2">Graduate</p>
  </div>

</motion.div>

</div>
      </div>
    </section>
  );
}