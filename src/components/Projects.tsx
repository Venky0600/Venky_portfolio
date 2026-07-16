"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Digital Marketing Platform",
    image: "/projects/digital-marketing.jpeg",
    description:
      "A platform connecting businesses, influencers, startups and franchise seekers into one ecosystem.",
    github: "https://github.com/Venky0600/digital_marketing",
    demo: "#",
    tech: ["Flutter", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Nexus",
    image: "/projects/nexus.png",
    description:
      "Interactive DSA learning platform with chatbot support, AI assistance and progress tracking.",
    github: "https://github.com/aravindpunyamantula/Nexus",
    demo: "#",
    tech: ["Flutter", "Firebase", "AI"],
  },
  {
    title: "Problem-X",
    image: "/projects/problemx.png",
    description:
      "Idea sharing and collaboration platform where users build teams to solve real-world challenges.",
    github: "https://github.com/Venky0600/problemX",
    demo: "#",
    tech: ["Flutter", "Firebase", "UI/UX"],
  },
  {
    title: "Care Connect",
    image: "/projects/careconnect.png",
    description:
      "Healthcare application focused on wellness, appointments and smart health monitoring.",
    github: "https://github.com/yourusername/careconnect",
    demo: "#",
    tech: ["Flutter", "Firebase", "Healthcare"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 py-24 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-20 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="absolute top-40 left-1/4 w-5 h-5 bg-cyan-400 rounded-full animate-pulse"></div>

<div className="absolute bottom-40 right-1/4 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: .6 }}
          className="text-cyan-400 text-center mb-3"
        >
          Featured Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: .8 }}
          className="text-center text-5xl font-bold mb-20"
        >
          Things I've Built
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              whileHover={{
                scale: 1.03,
                y: -10,
              }}
              className="
                backdrop-blur-xl
                bg-white/5
                border
                border-white/10
                rounded-3xl
                overflow-hidden
                hover:border-cyan-400
                hover:shadow-[0_0_50px_rgba(34,211,238,.35)]
                transition-all
                duration-500
              "
            >
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-black/70 backdrop-blur-xl flex items-center justify-center text-cyan-400 font-bold">
{index + 1}
</div>
                <div className="absolute top-4 right-4 bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg">
Featured
</div>
<div className="relative overflow-hidden"></div>
              {/* Image */}

              <div className="overflow-hidden">

                <motion.img
  src={project.image}
  alt={project.title}
  className="w-full h-64 object-cover"
  whileHover={{
    scale: 1.08,
  }}
  transition={{
    duration: 0.6,
  }}
/>

              </div>

              {/* Content */}

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-8">
                  {project.description}
                  
                </p>
                <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 mb-6"></div>

                {/* Tech */}

                <div className="flex flex-wrap gap-3 mb-8">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-4">

                  <motion.a
  href={project.github}
  target="_blank"
  whileHover={{
    scale: 1.08,
    y: -3,
  }}
  whileTap={{
    scale: 0.95,
  }}
  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold"
>
  <FaGithub />
  GitHub
</motion.a>

                  <motion.a
  href={project.demo}
  target="_blank"
  whileHover={{
    scale: 1.08,
    y: -3,
  }}
  whileTap={{
    scale: 0.95,
  }}
  className="flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-400 hover:bg-cyan-400 hover:text-black transition"
>
  <FaExternalLinkAlt />
  Live Demo
</motion.a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}