import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="charcoal-backdrop relative min-h-[calc(100vh-5rem)] flex flex-col justify-between px-6 sm:px-10 lg:px-16 py-12 lg:py-16 overflow-hidden border-b border-white/[0.06]"
    >
      {/* Editorial Section Coordinate & Index */}
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto text-zinc-500">
        <div className="flex items-center gap-3">
          <span className="editorial-number">.01</span>
          <span className="h-[1px] w-8 bg-zinc-800" />
          <span className="editorial-label text-zinc-400">Introduction</span>
        </div>
        <span className="hidden sm:inline-block editorial-label text-zinc-500">
          Portfolio 
        </span>
      </div>

      {/* Main Center Stage */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto py-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
          {/* Eyebrow */}
          <p className="animate-fade-1 editorial-label text-zinc-400 mb-5">
            Hey, I'm
          </p>

          {/* Oversized Visually Striking Heading in Outfit */}
          <h1 className="animate-fade-2 font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white mb-6 select-none leading-[0.98]">
            Sourivya Mondal
          </h1>

          {/* Subtitle in Outfit */}
          <h2 className="animate-fade-3 font-heading text-lg sm:text-2xl md:text-3xl font-semibold text-zinc-200 max-w-2xl mb-6 tracking-tight">
            BTech CSE Student &amp; FullStack Developer
          </h2>

          {/* Body Narrative in Manrope */}
          <p className="animate-fade-4 font-body text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-10 font-normal">
            First-year Computer Science undergraduate at IIIT Manipur, exploring
            the intersection of scalable backend architectures, practical fullstack
            engineering, and intelligent web applications.
          </p>

          {/* Action Buttons in Manrope */}
          <div className="animate-fade-5 flex flex-wrap items-center lg:justify-start justify-center gap-4">
            <a
              href="#projects"
              className="font-body group inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-black font-semibold text-xs tracking-wider uppercase rounded hover:bg-zinc-200 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              <span>View Projects</span>
              <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="/resume.pdf"
              download="Sourivya_Mondal_Resume.pdf"
              className="font-body group inline-flex items-center gap-2.5 px-6 py-3.5 bg-zinc-900/80 border border-white/20 text-white font-medium text-xs tracking-wider uppercase rounded hover:border-white/60 hover:bg-zinc-800 transition-all duration-300"
            >
              <FiDownload className="text-sm text-zinc-400 group-hover:text-white transition-colors" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="font-body inline-flex items-center gap-2 px-6 py-3.5 text-zinc-400 hover:text-white text-xs tracking-wider uppercase font-medium transition-colors"
            >
              <span>Contact Me →</span>
            </a>
          </div>
        </div>

        {/* Hero Photo */}
        <div className="animate-fade-3 relative shrink-0 flex items-center justify-center lg:justify-end">
          <img
            src="/photo.png"
            alt="Sourivya Mondal"
            className="w-80 sm:w-96 lg:w-[480px] xl:w-[540px] h-auto object-cover select-none pointer-events-none"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 20%, black 88%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 82%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 20%, black 88%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 82%, transparent 100%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "destination-in",
            }}
          />
        </div>
      </div>

      {/* Floating Bottom Rails */}
      <div className="w-full max-w-7xl mx-auto flex items-end justify-between pt-6 text-zinc-500">
        {/* Left: Social Icons */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/gitsourivya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <FaGithub size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/sourivya-mondal-99235a427/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <FaLinkedinIn size={17} />
          </a>
          <a
            href="mailto:msourivya08@gmail.com"
            aria-label="Email Sourivya"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <FaEnvelope size={16} />
          </a>
        </div>

        {/* Right: Editorial "SCROLL —" Indicator in Manrope */}
        <a
          href="#about"
          className="group flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-zinc-500 hover:text-zinc-300 transition-colors font-body"
        >
          <span>SCROLL</span>
          <span className="h-[1px] w-6 bg-zinc-700 group-hover:w-10 group-hover:bg-zinc-400 transition-all duration-300" />
        </a>
      </div>
    </section>
  );
}