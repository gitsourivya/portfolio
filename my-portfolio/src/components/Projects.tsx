const projects = [
  {
    title: "Resumate",
    description:
      "An AI-powered resume builder designed to help users create, customize, and improve professional resumes through a modern web interface.",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    github: "https://github.com/gitsourivya/resumate",
demo: "https://resumate-amber-three.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-500 mb-3">Projects</p>

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Things I've built
        </h2>

        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="grid md:grid-cols-2">
              {/* Project Preview */}
              <div className="min-h-72 bg-gray-950 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-800 overflow-hidden">
  <img
    src="/projects/resumate.png"
    alt="Resumate project preview"
    className="w-full h-full object-cover"
  />
</div>

              {/* Project Information */}
              <div className="p-8 md:p-10">
                <p className="text-gray-500 text-sm mb-3">
                  Featured Project
                </p>

                <h3 className="text-3xl font-bold mb-5">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="flex gap-5">
                  <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="font-medium hover:text-gray-400 transition"
>
  GitHub →
</a>

<a
  href={project.demo}
  target="_blank"
  rel="noopener noreferrer"
  className="font-medium hover:text-gray-400 transition"
>
  Live Demo →
</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}