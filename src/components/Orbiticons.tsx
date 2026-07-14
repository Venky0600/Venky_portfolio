"use client";

import { motion } from "framer-motion";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { SiFlutter, SiFirebase, SiMongodb } from "react-icons/si";

const icons = [
  {
    icon: <SiFlutter className="text-sky-400 text-4xl" />,
    angle: 0,
  },
  {
    icon: <SiFirebase className="text-yellow-400 text-4xl" />,
    angle: 60,
  },
  {
    icon: <FaGithub className="text-white text-4xl" />,
    angle: 120,
  },
  {
    icon: <SiMongodb className="text-green-500 text-4xl" />,
    angle: 180,
  },
  {
    icon: <FaNodeJs className="text-green-400 text-4xl" />,
    angle: 240,
  },
  {
    icon: <FaReact className="text-cyan-400 text-4xl" />,
    angle: 300,
  },
];

export default function OrbitIcons() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 35,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute inset-0"
    >
      {icons.map((item, index) => (
        <div
          key={index}
          className="absolute left-1/2 top-1/2"
          style={{
            transform: `rotate(${item.angle}deg) translateY(-250px)`,
          }}
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-16 h-16 rounded-full bg-[#111827]/90 border border-cyan-400 flex items-center justify-center shadow-[0_0_25px_rgba(34,211,238,.4)]"
          >
            {item.icon}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}