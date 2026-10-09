import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import SectionReveal from "./SectionReveal";

const projects = [
  {
    number: "01",
    title: "Resumate",
    tagline: "AI-Powered Resume Builder",
    description:
      "An AI-powered resume builder designed to help users create, customize, and improve professional resumes through a modern, intuitive web interface.",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    github: "https://github.com/gitsourivya/resumate",
    demo: "https://resumate-amber-three.vercel.app/",
    image: "/projects/resumate.png",
  },
  {
    number: "02",
    title: "Screenshot-to-Code",
    tagline: "Vision AI Code Generation",
    description:
      "An AI-powered tool that converts website screenshots into working HTML and CSS using Gemini Vision, complete with live preview, AI refinement, and instant project export.",
    technologies: [
      "Python",
      "Flask",
      "Gemini Vision",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    github: "https://github.com/gitsourivya/screenshot-to-code",
    demo: "https://screenshot-to-code-frontend-chi.vercel.app",
    image: "/projects/stc2.jpeg",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 sm:px-10 lg:px-16 py-28 border-b border-white/[0.06] relative"
    >
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          {/* Section Index Header */}
          <div className="flex items-center gap-3 mb-10">
            <span className="editorial-number">.04</span>
            <span className="h-[1px] w-8 bg-zinc-800" />
            <span className="editorial-label text-zinc-400">
              Selected Works / Portfolio
            </span>
          </div>

          {/* Section Title in Outfit */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-2xl leading-[1.1]">
              Things I've built.
            </h2>
            <p className="font-body text-xs uppercase tracking-wider text-zinc-500 font-medium">
              Explore live deployments &amp; source code
            </p>
          </div>
        </SectionReveal>

        {/* Project Showcases */}
        <div className="space-y-28">
          {projects.map((project, idx) => (
            <SectionReveal key={project.title} delay={idx * 150}>
              <div className="group relative rounded-2xl border border-white/[0.09] bg-[#121419]/90 p-6 sm:p-10 lg:p-12 shadow-2xl transition-all duration-500 hover:border-white/20">
                
                {/* Stage Header Info */}
                <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.07] text-zinc-400">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-zinc-500 tracking-wider">
                      PROJECT .{project.number}
                    </span>
                    <span className="hidden sm:inline-block h-3 w-[1px] bg-zinc-800" />
                    <span className="hidden sm:inline-block font-body text-xs font-medium tracking-wide text-zinc-300">
                      {project.tagline}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors uppercase tracking-wider font-medium"
                    >
                      <FaGithub size={14} />
                      <span className="hidden sm:inline">Repo</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors uppercase tracking-wider font-medium"
                    >
                      <FiExternalLink size={14} />
                      <span className="hidden sm:inline">Live</span>
                    </a>
                  </div>
                </div>

                {/* Center Mockup Frame */}
                <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-xl border border-white/[0.12] bg-[#0c0d10] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
                  {/* Browser Bar */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-[#16181f]/80">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
                    </div>
                    <span className="font-mono text-[11px] text-zinc-500 tracking-wider">
                      {project.demo.replace("https://", "")}
                    </span>
                    <div className="w-8" />
                  </div>

                  {/* Image Display */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black/60 group/image"
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} Interface Preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/image:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10]/60 via-transparent to-transparent opacity-60 group-hover/image:opacity-20 transition-opacity duration-500" />
                  </a>
                </div>

                {/* Project Details in Outfit & Manrope */}
                <div className="mt-10 text-center max-w-2xl mx-auto flex flex-col items-center">
                  <h3 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
                    {project.title}
                  </h3>

                  <p className="font-body text-base text-zinc-300 leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-zinc-900 border border-white/[0.08] rounded text-xs font-mono text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body group/btn inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black text-xs font-semibold tracking-wider uppercase rounded hover:bg-zinc-200 transition-all duration-300"
                    >
                      <span>View Project</span>
                      <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body inline-flex items-center gap-2 px-6 py-3.5 border border-white/[0.18] text-zinc-300 hover:text-white hover:border-white/50 text-xs font-medium tracking-wider uppercase rounded transition-all duration-300 bg-zinc-900/50"
                    >
                      <FaGithub size={14} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}