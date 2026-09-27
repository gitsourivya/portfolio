import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-[#0a0a0a]/90 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="text-xl font-bold">
          
        </a>

        <div className="flex items-center gap-4 sm:gap-7 text-sm text-gray-400">
          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a
            href="#skills"
            className="hidden sm:block hover:text-white transition"
          >
            Skills
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a
            href="#education"
            className="hidden md:block hover:text-white transition"
          >
            Education
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>

          <div className="hidden sm:flex items-center gap-3 ml-2 pl-4 border-l border-gray-800">
            <a
              href="https://github.com/gitsourivya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/sourivya-mondal-99235a427/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}