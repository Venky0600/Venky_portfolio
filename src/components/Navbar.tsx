
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex justify-between items-center">
          
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

          <button className="bg-purple-600 px-5 py-2 rounded-lg hover:bg-purple-700 transition">
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
}