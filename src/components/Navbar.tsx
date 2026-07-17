"use client";

import { useEffect, useState } from "react";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 40);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
<nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    scrolled ? "py-2" : "py-4"
  }`}
>      <div className="max-w-7xl mx-auto px-6 py-4">
<div
  className={`rounded-2xl px-6 py-4 flex justify-between items-center transition-all duration-500 ${
    scrolled
      ? "backdrop-blur-2xl bg-black/60 border border-cyan-400/20 shadow-2xl shadow-cyan-500/10"
      : "backdrop-blur-md bg-white/5 border border-white/10"
  }`}
>          
          <h1 className="text-xl font-bold text-white">
            Venky<span className="text-purple-500">.</span>
          </h1>

          <div className="hidden md:flex gap-8 text-gray-300">
            <a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#projects">Projects</a>
<a href="#certifications">Certificates</a>
<a href="#contact">Contact</a>
          </div>

          <a
  href="/resumee.pdf"
  target="_blank"
  className="relative overflow-hidden rounded-xl px-5 py-2 font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/40"
>
  Resume
</a>
        </div>
      </div>
    </nav>
  );
}