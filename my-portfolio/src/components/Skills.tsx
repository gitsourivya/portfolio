const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Tools & Backend",
    skills: ["Git", "GitHub", "REST APIs", "Linux", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-500 mb-3">Skills</p>

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Technologies I work with
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="border border-gray-800 rounded-2xl p-6 hover:border-gray-600 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}