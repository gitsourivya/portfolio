import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="border border-gray-800 rounded-2xl p-8 md:p-12 hover:border-gray-600 transition-all duration-300">
          <p className="text-gray-500 mb-3">Contact</p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's connect.
          </h2>

          <p className="text-gray-400 text-lg leading-8 max-w-2xl mb-8">
            I'm interested in connecting with developers, collaborating
            on projects, and exploring internship opportunities.
          </p>

          <div className="flex flex-wrap gap-4">
            {/* Email */}
            <a
              href="mailto:msourivya08@gmail.com"
              className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition flex items-center gap-2"
            >
              <MdEmail size={20} />
              <span>Email Me</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sourivya-mondal-99235a427/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-700 rounded-lg font-medium hover:border-gray-400 transition flex items-center gap-2"
            >
              <FaLinkedinIn size={20} />
              <span>LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/gitsourivya"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-700 rounded-lg font-medium hover:border-gray-400 transition flex items-center gap-2"
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}