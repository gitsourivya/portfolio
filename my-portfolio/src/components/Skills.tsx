import SectionReveal from "./SectionReveal";

const skillCategories = [
  {
    index: "01",
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
    description: "Core programming languages for algorithms, backends, and scripting.",
  },
  {
    index: "02",
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
    description: "Modern component-driven web interfaces, responsive layouts, and typography.",
  },
  {
    index: "03",
    title: "Tools & Backend",
    skills: ["Git", "GitHub", "REST APIs", "Linux", "VS Code"],
    description: "Developer tooling, version control, API integration, and Linux environments.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 sm:px-10 lg:px-16 py-28 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          {/* Section Index Header */}
          <div className="flex items-center gap-3 mb-10">
            <span className="editorial-number">.03</span>
            <span className="h-[1px] w-8 bg-zinc-800" />
            <span className="editorial-label text-zinc-400">Capabilities / Tech Stack</span>
          </div>

          {/* Section Heading in Outfit */}
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mb-14 leading-[1.15]">
            Technologies I work with.
          </h2>
        </SectionReveal>

        {/* 3-Column Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <SectionReveal key={category.title} delay={idx * 150}>
              <div className="editorial-card rounded-xl p-8 flex flex-col justify-between h-full group">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b border-white/[0.07] pb-4 mb-6">
                    <span className="font-mono text-xs text-zinc-500 tracking-wider">
                      {category.index}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed font-normal">
                    {category.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-[#0e1014] border border-white/[0.08] group-hover:border-white/[0.18] rounded text-xs font-mono text-zinc-300 transition-all duration-300 hover:text-white hover:border-white/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-zinc-600">
                  <span>FOUNDATION</span>
                  <span>ACTIVE</span>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}