import About from "@/components/About";
import Hero from "@/components/hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import CustomCursor from "@/components/CustomCursor";
import MouseGlow from "@/components/MouseGlow";
import Loader from "@/components/Loader";
import Aurora from "@/components/Aurora";
import SectionWrapper from "@/components/SectionWrapper";

import Navbar from "@/components/Navbar";


import { Certificate } from "crypto";



export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050816] text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="aurora">
    <div className="blob blob1"></div>
    <div className="blob blob2"></div>
    <div className="blob blob3"></div>
</div>
      <Loader />
      <Aurora />

      <MouseGlow />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <Hero />
      <SectionWrapper>
  <About />
</SectionWrapper>

<SectionWrapper>
  <Skills />
</SectionWrapper>

<SectionWrapper>
  <Projects />
</SectionWrapper>
      <Certificates />
      <Contact />
      <Footer />
      <BackToTop />

      

      {/* About Section */}
      {/* <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          <div>
            <p className="text-cyan-400 mb-4">
              About Me
            </p>

            <h2 className="text-5xl font-bold mb-6">
              Passionate Developer &
              Problem Solver
            </h2>

            <p className="text-gray-400 text-lg leading-8">
              I'm Balireddy Venkatesh, a passionate Flutter and
              Full Stack Developer with expertise in Flutter,
              Firebase, MongoDB, Node.js and Cloud Technologies.
            </p>

            <br />

            <p className="text-gray-400 text-lg leading-8">
              I enjoy building scalable applications that solve
              real-world problems and deliver meaningful user
              experiences across Healthcare, Education,
              Marketing and Business domains.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-4xl font-bold text-purple-400">
                4+
              </h3>
              <p className="text-gray-400 mt-2">
                Projects
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-4xl font-bold text-cyan-400">
                5+
              </h3>
              <p className="text-gray-400 mt-2">
                Certifications
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-4xl font-bold text-purple-400">
                10+
              </h3>
              <p className="text-gray-400 mt-2">
                Technologies
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-4xl font-bold text-cyan-400">
                2026
              </h3>
              <p className="text-gray-400 mt-2">
                Portfolio Version
              </p>
            </div>

          </div>

        </div>
      </section> */}
      {/* Skills Section */}
{/* <section
  id="skills"
  className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
>
  <p className="text-cyan-400 mb-4">
    My Skills
  </p>

  <h2 className="text-5xl font-bold mb-16 text-center">
    Technologies I Work With
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl">

    {[
      "Flutter",
      "Firebase",
      "MongoDB",
      "Node.js",
      "Express.js",
      "GitHub",
      "Postman",
      "TypeScript",
      "Python",
      "OCI",
    ].map((skill) => (
      <div
        key={skill}
        className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:scale-105 hover:border-cyan-400 transition duration-300"
      >
        <h3 className="font-semibold text-lg">
          {skill}
        </h3>
      </div>
    ))}
  </div>
</section> */}
{/* ================= Projects Section ================= */}
{/* <section
  id="projects"
  className="min-h-screen px-6 py-20"
>
  <div className="max-w-7xl mx-auto">

    <p className="text-cyan-400 text-center mb-4">
      Featured Projects
    </p>

    <h2 className="text-5xl font-bold text-center mb-16">
      Things I've Built
    </h2>

    <div className="grid md:grid-cols-2 gap-8"> */}

      {/* Digital Marketing Platform */}
      {/* <a
        href="https://github.com/Venky0600/digital_marketing"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500 hover:scale-105 transition-all duration-300 cursor-pointer">

          <h3 className="text-2xl font-bold mb-4">
            🚀 Digital Marketing Platform
          </h3>

          <p className="text-gray-400 mb-6">
            A platform connecting businesses, influencers,
            startups and franchise seekers through a
            single ecosystem.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-purple-500/20 rounded-full">Flutter</span>
            <span className="px-3 py-1 bg-purple-500/20 rounded-full">Node.js</span>
            <span className="px-3 py-1 bg-purple-500/20 rounded-full">MongoDB</span>
          </div>

          <p className="mt-6 text-cyan-400 font-semibold">
            View on GitHub →
          </p>

        </div>
      </a> */}

      {/* Nexus */}
      {/* <a
        href="https://github.com/aravindpunyamantula/Nexus"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500 hover:scale-105 transition-all duration-300 cursor-pointer">

          <h3 className="text-2xl font-bold mb-4">
            📚 Nexus
          </h3>

          <p className="text-gray-400 mb-6">
            Interactive DSA Learning Platform with chatbot,
            visualizations, progress tracking and
            project-based learning.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-cyan-500/20 rounded-full">Flutter</span>
            <span className="px-3 py-1 bg-cyan-500/20 rounded-full">Firebase</span>
            <span className="px-3 py-1 bg-cyan-500/20 rounded-full">AI</span>
          </div>

          <p className="mt-6 text-cyan-400 font-semibold">
            View on GitHub →
          </p>

        </div>
      </a> */}

      {/* Problem-X */}
      {/* <a
        href="https://github.com/Venky0600/problemX"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500 hover:scale-105 transition-all duration-300 cursor-pointer">

          <h3 className="text-2xl font-bold mb-4">
            💡 Problem-X
          </h3>

          <p className="text-gray-400 mb-6">
            Flutter-based idea sharing and collaboration
            platform where users solve real-world
            challenges in teams.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-purple-500/20 rounded-full">Flutter</span>
            <span className="px-3 py-1 bg-purple-500/20 rounded-full">Firebase</span>
            <span className="px-3 py-1 bg-purple-500/20 rounded-full">UI/UX</span>
          </div>

          <p className="mt-6 text-cyan-400 font-semibold">
            View on GitHub →
          </p>

        </div>
      </a> */}

      {/* CARE CONNECT */}
      {/* <a
        href="https://github.com/Venky0600/YOUR_CARE_CONNECT_REPO"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500 hover:scale-105 transition-all duration-300 cursor-pointer">

          <h3 className="text-2xl font-bold mb-4">
            ❤️ CARE CONNECT
          </h3>

          <p className="text-gray-400 mb-6">
            Smart healthcare application focused on
            wellness monitoring, health tracking,
            reminders and personal assistance.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-cyan-500/20 rounded-full">Flutter</span>
            <span className="px-3 py-1 bg-cyan-500/20 rounded-full">Firebase</span>
            <span className="px-3 py-1 bg-cyan-500/20 rounded-full">Healthcare</span>
          </div>

          <p className="mt-6 text-cyan-400 font-semibold">
            View on GitHub →
          </p>

        </div>
      </a>

    </div>

  </div>
</section> */}
{/* ================= Certifications Section ================= */}
{/* <section
  id="certifications"
  className="min-h-screen px-6 py-20"
>
  <div className="max-w-7xl mx-auto">

    <p className="text-cyan-400 text-center mb-4">
      Certifications
    </p>

    <h2 className="text-5xl font-bold text-center mb-16">
      My Certifications
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> */}

      {/* GitHub */}
      {/* <a
        href="/certificates/github-foundations.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 hover:scale-105 transition-all duration-300 cursor-pointer">
          <h3 className="text-2xl font-bold mb-4">
            GitHub Foundations
          </h3>

          <p className="text-gray-400 mb-6">
            Git, GitHub, repositories, branching, pull requests and collaboration.
          </p>

          <span className="text-cyan-400 font-semibold">
            📄 View Certificate →
          </span>
        </div>
      </a> */}

      {/* MongoDB */}
      {/* <a
        href="/certificates/mongodb.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-red-400 hover:scale-105 transition-all duration-300 cursor-pointer">
          <h3 className="text-2xl font-bold mb-4">
            MongoDB Associate Developer
          </h3>

          <p className="text-gray-400 mb-6">
            Database design, CRUD operations, indexing and aggregation.
          </p>

          <span className="text-green-400 font-semibold">
            📄 View Certificate →
          </span>
        </div>
      </a> */}

      {/* OCI */}
      {/* <a
        href="/certificates/oci.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-red-400 hover:scale-105 transition-all duration-300 cursor-pointer">
          <h3 className="text-2xl font-bold mb-4">
            OCI Architect Associate
          </h3>

          <p className="text-gray-400 mb-6">
            Oracle Cloud Infrastructure architecture, networking and security.
          </p>

          <span className="text-red-400 font-semibold">
            📄 View Certificate →
          </span>
        </div>
      </a> */}

      {/* Postman */}
      {/* <a
        href="/certificates/postman.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-orange-400 hover:scale-105 transition-all duration-300 cursor-pointer">
          <h3 className="text-2xl font-bold mb-4">
            Postman Student Expert
          </h3>

          <p className="text-gray-400 mb-6">
            API testing, collections, environments and automation.
          </p>

          <span className="text-orange-400 font-semibold">
            📄 View Certificate →
          </span>
        </div>
      </a> */}

      {/* Python */}
      {/* <a
        href="/certificates/python101.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-yellow-400 hover:scale-105 transition-all duration-300 cursor-pointer">
          <h3 className="text-2xl font-bold mb-4">
            Python 101
          </h3>

          <p className="text-gray-400 mb-6">
            Python fundamentals, functions, loops, OOP and problem solving.
          </p>

          <span className="text-yellow-400 font-semibold">
            📄 View Certificate →
          </span>
        </div>
      </a>

    </div>

  </div>
</section> */}
{/* Contact Section */}
{/* <section
  id="contact"
  className="min-h-screen flex items-center justify-center px-6"
>
  <div className="max-w-4xl mx-auto text-center">

    <p className="text-cyan-400 mb-4">
      Contact
    </p>

    <h2 className="text-5xl font-bold mb-8">
      Let's Build Something Amazing
    </h2>

    <p className="text-gray-400 text-lg mb-10">
      I'm always open to discussing new opportunities,
      collaborations and innovative projects.
    </p>

    <div className="space-y-4">
      <p className="text-xl">
        📧 balireddyvenky06@gmail.com
      </p>

      <p className="text-xl">
        💻 github.com/Venky0600
      </p>

      <p className="text-xl">
        🔗 Balireddy Venkatesh
      </p>
    </div>

  </div>
</section> */}
{/* <footer className="border-t border-white/10 py-10 text-center">
  <h2 className="text-3xl font-bold mb-4">
    Balireddy Venkatesh
  </h2>

  <p className="text-gray-500">
    Flutter Developer • Full Stack Developer
  </p>
</footer> */}

    </main>
  );
}