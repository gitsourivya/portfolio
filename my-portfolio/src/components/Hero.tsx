
import { FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6"
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-blue-400 font-medium mb-4 animate-[fadeIn_0.6s_ease-out]">
          Hello, I'm
        </p>

        <h1 className="text-4xl sm:text-6xl font-bold mb-4 animate-[fadeIn_0.8s_ease-out]">
          Sourivya Mondal
        </h1>

        <h2 className="text-xl sm:text-2xl text-gray-400 mb-6 animate-[fadeIn_1s_ease-out]">
          BTech CSE Student & Backend Developer
        </h2>

        <p className="text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto animate-[fadeIn_1.2s_ease-out]">
          First-year Computer Science student at IIIT Manipur,
          interested in backend development, software engineering,
          and building practical applications.
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-[fadeIn_1.4s_ease-out]">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium hover:-translate-y-0.5 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-700 rounded-lg font-medium hover:border-gray-400 hover:-translate-y-0.5 transition"
          >
            Contact Me
          </a>

          <a
            href="/resume.pdf"
            download="Sourivya_Mondal_Resume.pdf"
            className="px-6 py-3 border border-gray-700 rounded-lg font-medium hover:border-blue-500 hover:text-blue-400 hover:-translate-y-0.5 transition flex items-center gap-2"
          >
            <FaDownload size={16} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}