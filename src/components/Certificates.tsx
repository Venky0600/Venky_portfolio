"use client";

import { motion } from "framer-motion";
import { FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";

const certificates = [
  {
    title: "Google AI Essentials",
    company: "Google",
    image: "/certificates/google.png",
    pdf: "/certificates/google-ai.pdf",
  },
  {
    title: "IBM Python",
    company: "IBM",
    image: "/certificates/ibm.png",
    pdf: "/certificates/ibm-python.pdf",
  },
  {
    title: "NPTEL Cloud Computing",
    company: "NPTEL",
    image: "/certificates/nptel.png",
    pdf: "/certificates/nptel.pdf",
  },
  {
    title: "Flutter Development",
    company: "Udemy",
    image: "/certificates/flutter.png",
    pdf: "/certificates/flutter.pdf",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative min-h-screen px-6 py-24 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-cyan-400 mb-3"
        >
          Certifications
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-5xl font-bold mb-20"
        >
          My Certificates
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">

          {certificates.map((certificate, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.03,
                y: -8,
              }}
              transition={{
                duration: .6,
                delay: index * .2,
              }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400 hover:shadow-[0_0_45px_rgba(34,211,238,.35)]"
            >

              <img
                src={certificate.image}
                className="w-full h-60 object-cover"
                alt={certificate.title}
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold mb-2">
                  {certificate.title}
                </h3>

                <p className="text-gray-400 mb-6">
                  {certificate.company}
                </p>

                <a
                  href={certificate.pdf}
                  target="_blank"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold hover:scale-105 transition"
                >
                  <FaFilePdf />
                  View Certificate
                  <FaExternalLinkAlt />
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}