"use client";

import { motion } from "framer-motion";
import OrbitIcons from "@/components/Orbiticons";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaArrowDown,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiFlutter,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-6 lg:px-12"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">

        {/* ================= LEFT ================= */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative w-[560px] h-[560px] flex items-center justify-center">

            {/* Glow */}

            <div className="absolute w-[420px] h-[420px] rounded-full bg-cyan-500/20 blur-[120px]"></div>

            <div className="absolute w-[430px] h-[430px] rounded-full border border-cyan-400/20"></div>

<div className="absolute w-[520px] h-[520px] rounded-full border border-purple-500/20"></div>
            {/* Orbit Icons */}

            

            {/* Profile */}

            <motion.img
              src="/profile.jpeg"
              alt="Balireddy Venkatesh"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative z-20
              w-[340px]
              h-[340px]
              lg:w-[390px]
              lg:h-[390px]
              rounded-full
              object-cover
              border-[6px]
              border-cyan-400
              shadow-[0_0_80px_rgba(34,211,238,.6)]"
            />
<motion.div
whileHover={{
  scale: 1.15,
}}
  animate={{ y: [0, -8, 0] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    left-5
    top-[42%]
    w-20
    h-20
    rounded-full
    flex
    items-center
    justify-center
    bg-white/5
    backdrop-blur-xl
    border
    border-cyan-400/30
shadow-[0_0_50px_rgba(34,211,238,.45)]  "
>
  <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-ping"></div>

<div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>

<div className="absolute -bottom-1 left-1 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
<FaGithub className="text-5xl text-white"/>
</motion.div>
<motion.div
whileHover={{
  scale: 1.15,
}}
  animate={{ y: [0, -8, 0] }}
  transition={{
    duration:5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    bottom-52
    right-3
    w-20
    h-20
    rounded-full
    flex
    items-center
    justify-center
    bg-white/5
    backdrop-blur-xl
    border
    border-cyan-400/30
shadow-[0_0_50px_rgba(34,211,238,.45)]  "
>
  <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-ping"></div>

<div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>

<div className="absolute -bottom-1 left-1 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
<FaReact className="text-5xl text-cyan-400"/>
</motion.div>
<motion.div
whileHover={{
  scale: 1.15,
}}
  animate={{ y: [0, -8, 0] }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    bottom-18
    right-28
    w-20
    h-20
    rounded-full
    flex
    items-center
    justify-center
    bg-white/5
    backdrop-blur-xl
    border
    border-cyan-400/30
shadow-[0_0_50px_rgba(34,211,238,.45)]  "
>
  <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-ping"></div>

<div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>

<div className="absolute -bottom-1 left-1 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
  <FaNodeJs className="text-green-400 text-[42px]" />
</motion.div>
            <motion.div
  animate={{ y: [0, -15, 0] }}
  transition={{
    duration: 4,
    repeat: Infinity,
  }}
  className="absolute top-10 left-8
  backdrop-blur-xl
  bg-white/10
  border border-cyan-400/30
  rounded-2xl
  px-5 py-3
  shadow-[0_0_30px_rgba(34,211,238,.25)]"
>
  <div className="flex items-center gap-3">

    <SiFlutter className="text-sky-400 text-3xl"/>

    <div>

      <p className="text-white font-semibold">
        Flutter
      </p>

      <p className="text-gray-400 text-sm">
        Mobile Apps
      </p>

    </div>

  </div>

</motion.div>
<motion.div
animate={{y:[0,20,0]}}
transition={{
duration:5,
repeat:Infinity,
}}

className="absolute
top-24
right-2
backdrop-blur-xl
bg-white/10
rounded-2xl
border
border-yellow-400/20
px-5
py-3"
>

<div className="flex items-center gap-3">

<SiFirebase className="text-yellow-400 text-3xl"/>

<div>

<p className="font-semibold">

Firebase

</p>

<p className="text-gray-400 text-sm">

Backend

</p>

</div>

</div>

</motion.div>
<motion.div
animate={{y:[0,-20,0]}}
transition={{
duration:6,
repeat:Infinity,
}}

className="absolute
bottom-20
left-0
backdrop-blur-xl
bg-white/10
rounded-2xl
border
border-green-500/20
px-5
py-3"
>

<div className="flex items-center gap-3">

<SiMongodb className="text-green-500 text-3xl"/>

<div>

<p className="font-semibold">

MongoDB

</p>

<p className="text-gray-400 text-sm">

Database

</p>

</div>

</div>

</motion.div>
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-cyan-400 text-xl mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-6xl lg:text-8xl font-black leading-none">
            Balireddy
          </h1>

          <h1 className="text-6xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Venkatesh
          </h1>

          {/* Typing Animation */}

          <TypeAnimation
            sequence={[
              "Flutter Developer",
              1500,
              "Full Stack Developer",
              1500,
              "AI Enthusiast",
              1500,
              "Problem Solver",
              1500,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="text-3xl text-white font-semibold"
          />
                    <p className="mt-8 text-gray-400 text-lg leading-8 max-w-xl">
            Passionate Flutter Developer and Full Stack Developer focused on
            building premium mobile applications, scalable backend systems,
            modern UI/UX and AI-powered digital products.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 35px rgba(34,211,238,.6)",
              }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-4 rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-purple-600
              font-semibold"
            >
              🚀 Explore Projects
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.05,
                borderColor: "#22d3ee",
              }}
              whileTap={{ scale: 0.95 }}
              href="/resumee.pdf"
              target="_blank"
              className="px-8 py-4 rounded-xl
              border
              border-gray-500
              backdrop-blur-xl
              bg-white/5"
            >
              📄 Download Resume
            </motion.a>

          </div>

          {/* Social Icons */}

          <div className="flex gap-6 mt-12">

            <motion.a
              whileHover={{
                y: -8,
                scale: 1.2,
              }}
              href="https://github.com/Venky0600"
              target="_blank"
              className="text-3xl text-gray-400 hover:text-white"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              whileHover={{
                y: -8,
                scale: 1.2,
              }}
              href="https://www.linkedin.com/in/balireddy-venkatesh-4a6074327/"
              target="_blank"
              className="text-3xl text-gray-400 hover:text-cyan-400"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              whileHover={{
                y: -8,
                scale: 1.2,
              }}
              href="mailto:balireddyvenky06@gmail.com"
              className="text-3xl text-gray-400 hover:text-purple-400"
            >
              <MdEmail />
            </motion.a>

          </div>

        </motion.div>

      </div>

      {/* Scroll Down */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <FaArrowDown
          className="text-cyan-400 text-3xl"
        />
      </motion.div>

    </section>
  );
}