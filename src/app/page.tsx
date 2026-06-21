import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050816] text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">

          <div className="inline-block px-4 py-2 mb-6 rounded-full border border-cyan-400 text-cyan-400 text-sm">
            🚀 Open to Opportunities
          </div>

          <p className="text-cyan-400 text-lg mb-4">
            Hi, my name is
          </p>

          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            Balireddy
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}Venkatesh
            </span>
          </h1>

          <h2 className="text-3xl md:text-5xl text-gray-300 mb-6">
            Flutter Developer • Full Stack Developer
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Building innovative digital solutions across Healthcare,
            Education, Marketing and Business Platforms.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-semibold transition">
              View Projects
            </button>

            <a
  href="/resumee.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 rounded-full border border-cyan-400"
>
  View Resume
</a>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section
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
      </section>
      {/* Skills Section */}
<section
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
</section>
{/* Projects Section */}
<section
  id="projects"
  className="min-h-screen px-6 py-20"
>
  <div className="max-w-7xl mx-auto">

    <p className="text-cyan-400 mb-4 text-center">
      Featured Projects
    </p>

    <h2 className="text-5xl font-bold text-center mb-16">
      Things I've Built
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      {/* Digital Marketing */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500 transition">
        <h3 className="text-2xl font-bold mb-4">
          Digital Marketing Platform
        </h3>

        <p className="text-gray-400 mb-6">
          A platform connecting businesses, influencers,
          startups and franchise seekers through a single ecosystem.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-purple-500/20 rounded-full">Flutter</span>
          <span className="px-3 py-1 bg-purple-500/20 rounded-full">Node.js</span>
          <span className="px-3 py-1 bg-purple-500/20 rounded-full">MongoDB</span>
        </div>
      </div>

      {/* Nexus */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500 transition">
        <h3 className="text-2xl font-bold mb-4">
          Nexus
        </h3>

        <p className="text-gray-400 mb-6">
          Interactive DSA learning platform with chatbot support,
          visualizations and progress tracking.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-cyan-500/20 rounded-full">Flutter</span>
          <span className="px-3 py-1 bg-cyan-500/20 rounded-full">Firebase</span>
          <span className="px-3 py-1 bg-cyan-500/20 rounded-full">AI</span>
        </div>
      </div>

      {/* Problem-X */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500 transition">
        <h3 className="text-2xl font-bold mb-4">
          Problem-X
        </h3>

        <p className="text-gray-400 mb-6">
          Idea sharing and collaboration platform where users
          can build teams and solve real-world challenges.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-purple-500/20 rounded-full">Flutter</span>
          <span className="px-3 py-1 bg-purple-500/20 rounded-full">Firebase</span>
          <span className="px-3 py-1 bg-purple-500/20 rounded-full">UI/UX</span>
        </div>
      </div>

      {/* Care Connect */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500 transition">
        <h3 className="text-2xl font-bold mb-4">
          CARE CONNECT
        </h3>

        <p className="text-gray-400 mb-6">
          Smart healthcare application focused on wellness,
          health tracking and personal assistance.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-cyan-500/20 rounded-full">Flutter</span>
          <span className="px-3 py-1 bg-cyan-500/20 rounded-full">Firebase</span>
          <span className="px-3 py-1 bg-cyan-500/20 rounded-full">Healthcare</span>
        </div>
      </div>

    </div>
  </div>
</section>
{/* Certifications Section */}
<section
  id="certifications"
  className="min-h-screen px-6 py-20"
>
  <div className="max-w-7xl mx-auto">

    <p className="text-cyan-400 mb-4 text-center">
      Certifications
    </p>

    <h2 className="text-5xl font-bold text-center mb-16">
      My Achievements
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <h3 className="text-xl font-bold mb-3">
          GitHub Foundations
        </h3>
        <p className="text-gray-400">
          Certified in Git, GitHub workflows,
          repositories and collaboration.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <h3 className="text-xl font-bold mb-3">
          MongoDB Associate Developer
        </h3>
        <p className="text-gray-400">
          Database design, queries and
          application integration.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <h3 className="text-xl font-bold mb-3">
          OCI Architect Associate
        </h3>
        <p className="text-gray-400">
          Oracle Cloud Infrastructure
          architecture and cloud services.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <h3 className="text-xl font-bold mb-3">
          Postman Student Expert
        </h3>
        <p className="text-gray-400">
          API testing, development and
          collaboration workflows.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <h3 className="text-xl font-bold mb-3">
          Python 101
        </h3>
        <p className="text-gray-400">
          Python fundamentals and
          problem solving concepts.
        </p>
      </div>

    </div>
  </div>
</section>
{/* Contact Section */}
<section
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
</section>
<footer className="border-t border-white/10 py-10 text-center">
  <h2 className="text-3xl font-bold mb-4">
    Balireddy Venkatesh
  </h2>

  <p className="text-gray-500">
    Flutter Developer • Full Stack Developer
  </p>
</footer>

    </main>
  );
}