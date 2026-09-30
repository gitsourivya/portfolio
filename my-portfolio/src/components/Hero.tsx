
import {
  FaDownload,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-bg relative isolate flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center"
    >
      {/* Background decorations */}
      <div className="hero-orb hero-orb-top" aria-hidden="true" />
      <div className="hero-orb hero-orb-bottom" aria-hidden="true" />
      <div className="hero-line hero-line-left" aria-hidden="true" />
      <div className="hero-line hero-line-right" aria-hidden="true" />

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <p className="mb-4 animate-[fadeIn_0.6s_ease-out] text-lg font-medium text-blue-400 sm:text-xl">
          Hello, I'm
        </p>

        <h1 className="mb-5 animate-[fadeIn_0.8s_ease-out] text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Sourivya Mondal
        </h1>

        <h2 className="mb-7 animate-[fadeIn_1s_ease-out] text-lg font-medium text-slate-300 sm:text-2xl">
          BTech CSE Student &amp; FullStack Developer
        </h2>

        <p className="mx-auto mb-12 max-w-2xl animate-[fadeIn_1.2s_ease-out] text-sm leading-7 text-slate-400 sm:text-base">
          First-year Computer Science student at IIIT Manipur,
          interested in fullstack development, software engineering,
          and building practical applications.
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-[fadeIn_1.4s_ease-out]">
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 rounded-xl border border-blue-500 bg-blue-600 px-7 py-3.5 font-medium text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
          >
            View Projects
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-7 py-3.5 font-medium text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-300"
          >
            Contact Me
          </a>

          <a
            href="/resume.pdf"
            download="Sourivya_Mondal_Resume.pdf"
            className="inline-flex items-center justify-center gap-3 rounded-xl border border-slate-600 px-7 py-3.5 font-medium text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-300"
          >
            <FaDownload />
            Download Resume
          </a>
        </div>

        {/* Social links */}
        <div className="mt-10 flex items-center justify-center gap-7 animate-[fadeIn_1.6s_ease-out]">
          <a
            href="https://github.com/gitsourivya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-xl text-slate-400 transition duration-300 hover:-translate-y-1 hover:text-white"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sourivya-mondal-99235a427/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-xl text-slate-400 transition duration-300 hover:-translate-y-1 hover:text-blue-400"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:msourivya08@gmail.com"
            aria-label="Email"
            className="text-xl text-slate-400 transition duration-300 hover:-translate-y-1 hover:text-blue-400"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}