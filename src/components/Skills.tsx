"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiFlutter,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";
import {
  SiTypescript,
  SiGit,
} from "react-icons/si";

import { MdApi } from "react-icons/md";

import { FaPalette } from "react-icons/fa";

export default function Skills() {
  const leftSkills = [
  {
    name: "Flutter",
    value: "95%",
    width: "95%",
    icon: <SiFlutter className="text-sky-400 text-3xl" />,
  },
  {
    name: "React",
    value: "90%",
    width: "90%",
    icon: <FaReact className="text-cyan-400 text-3xl" />,
  },
  {
    name: "Firebase",
    value: "88%",
    width: "88%",
    icon: <SiFirebase className="text-yellow-400 text-3xl" />,
  },
  {
    name: "TypeScript",
    value: "85%",
    width: "85%",
    icon: <SiTypescript className="text-blue-500 text-3xl" />,
  },
  {
    name: "Git",
    value: "90%",
    width: "90%",
    icon: <SiGit className="text-orange-500 text-3xl" />,
  },
];

  const rightSkills = [
  {
    name: "Node.js",
    value: "90%",
    width: "90%",
    icon: <FaNodeJs className="text-green-400 text-3xl" />,
  },
  {
    name: "MongoDB",
    value: "85%",
    width: "85%",
    icon: <SiMongodb className="text-green-500 text-3xl" />,
  },
  {
    name: "Next.js",
    value: "80%",
    width: "80%",
    icon: <SiNextdotjs className="text-white text-3xl" />,
  },
  {
    name: "REST API",
    value: "92%",
    width: "92%",
    icon: <MdApi className="text-cyan-400 text-3xl" />,
  },
  {
    name: "UI / UX",
    value: "88%",
    width: "88%",
    icon: <FaPalette className="text-pink-400 text-3xl" />,
  },
];

  return (
    <section
      id="skills"
      className="relative min-h-screen px-6 py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="absolute top-40 left-1/3 w-4 h-4 bg-cyan-400 rounded-full animate-pulse opacity-50"></div>

<div className="absolute bottom-32 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-40"></div>

<div className="absolute top-1/2 left-20 w-2 h-2 bg-white rounded-full animate-ping"></div>

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center text-5xl font-bold mb-20"
        >
          My Skills
        </motion.h2>
        <motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: false }}
  transition={{ delay: 0.3 }}
  className="text-center text-gray-400 max-w-2xl mx-auto mb-16 text-lg"
>
I specialize in modern technologies for building
high-performance mobile apps, responsive web applications,
and scalable backend systems.
</motion.p>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}

          <div className="space-y-8">
            {leftSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                whileHover={{
  scale: 1.05,
  y: -8,
  rotateX: 5,
}}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-cyan-400
hover:shadow-[0_0_50px_rgba(34,211,238,.5)] transition-all"
              >
                <div className="flex justify-between items-center mb-5">

                  <div className="flex items-center gap-4">
                    {skill.icon}
                    <h3 className="text-xl font-semibold">
                      {skill.name}
                    </h3>
                  </div>

                  <span className="text-cyan-400 font-bold">
                    {skill.value}
                  </span>

                </div>

                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.width }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 1.2,
                    }}
className="relative h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500"                  />

                </div>

              </motion.div>
            ))}
          </div>

          {/* RIGHT */}

          <div className="space-y-8">
            {rightSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                whileHover={{
  scale: 1.05,
  y: -8,
  rotateX: 5,
}}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-purple-400
hover:shadow-[0_0_50px_rgba(168,85,247,.5)] transition-all"
              >
                <div className="flex justify-between items-center mb-5">

                  <div className="flex items-center gap-4">
                    {skill.icon}
                    <h3 className="text-xl font-semibold">
                      {skill.name}
                    </h3>
                  </div>

                  <span className="text-purple-400 font-bold">
                    {skill.value}
                  </span>

                </div>

                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.width }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 1.2,
                    }}
className="relative h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500"                  />

                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}