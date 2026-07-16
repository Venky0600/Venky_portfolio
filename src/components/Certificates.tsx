"use client";

import { motion } from "framer-motion";
import {
  FaFilePdf,
  FaGithub,
  FaDatabase,
  FaPython,
} from "react-icons/fa";
import { FaCloud } from "react-icons/fa";

import {
  SiPostman,
//   SiOracle,
} from "react-icons/si";

const certificates = [
  {
    title: "GitHub Foundations",
    company: "GitHub",
    icon: <FaGithub className="text-5xl text-white" />,
    pdf: "/certificates/github-foundations.pdf",
    color: "border-cyan-400",
    tech: "Git • GitHub • Pull Requests",
  },
  {
    title: "MongoDB Associate",
    company: "MongoDB",
    icon: <FaDatabase className="text-5xl text-green-400" />,
    pdf: "/certificates/mongodb.pdf",
    color: "border-green-400",
    tech: "CRUD • Aggregation • Indexing",
  },
   {
  title: "OCI Architect Associate",
  company: "Oracle",
  icon: <FaCloud className="text-5xl text-red-500" />,
  pdf: "/certificates/oci.pdf",
  color: "border-red-400",
  tech: "Cloud • Security • Networking",
},
  {
    title: "Postman Student Expert",
    company: "Postman",
    icon: <SiPostman className="text-5xl text-orange-400" />,
    pdf: "/certificates/postman.pdf",
    color: "border-orange-400",
    tech: "REST API • Testing • Automation",
  },
  {
    title: "Python 101",
    company: "Python",
    icon: <FaPython className="text-5xl text-yellow-400" />,
    pdf: "/certificates/python101.pdf",
    color: "border-yellow-400",
    tech: "OOP • Functions • Problem Solving",
  },
];

export default function Certificates() {
  return (
    <section
      id="certifications"
      className="relative min-h-screen px-6 py-24 overflow-hidden"
    >
      {/* Background */}

      <div className="absolute top-20 -left-20 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-cyan-400 text-center mb-3"
        >
          Certifications
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-5xl font-bold mb-5"
        >
          Professional Certificates
        </motion.h2>

        <p className="text-center text-gray-400 mb-16">
          Verified certifications earned through continuous learning and hands-on practice.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((certificate, index) => (

            <motion.a
              key={index}
              href={certificate.pdf}
              target="_blank"
              whileHover={{
                scale: 1.04,
                y: -8,
              }}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: false }}
              transition={{
                duration: .6,
                delay: index * .1,
              }}
              className={`
                group
                backdrop-blur-xl
                bg-white/5
                border
                ${certificate.color}
                rounded-3xl
                p-8
                transition-all
                duration-500
                hover:shadow-[0_0_40px_rgba(34,211,238,.35)]
              `}
            >

              <div className="flex justify-center mb-8">

                {certificate.icon}

              </div>

              <h3 className="text-2xl font-bold text-center mb-2">
                {certificate.title}
              </h3>

              <p className="text-center text-cyan-400 mb-5">
                {certificate.company}
              </p>

              <p className="text-center text-gray-400 text-sm leading-7 mb-8">
                {certificate.tech}
              </p>

              <div className="flex justify-center">

                <div className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold flex items-center gap-3">

                  <FaFilePdf />

                  View Certificate

                </div>

              </div>

            </motion.a>

          ))}

        </div>

      </div>
    </section>
  );
}