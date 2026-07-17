"use client";

import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute top-20 left-20 w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 150, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute bottom-20 right-20 w-[380px] h-[380px] rounded-full bg-purple-500/10 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
        }}
        className="absolute top-1/2 left-1/2 w-[350px] h-[350px] rounded-full bg-blue-500/10 blur-[120px]"
      />

    </div>
  );
}