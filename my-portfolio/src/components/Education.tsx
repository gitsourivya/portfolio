import SectionReveal from "./SectionReveal";

const educationHistory = [
  {
    institution: "Indian Institute of Information Technology, Manipur",
    shortName: "IIIT MANIPUR",
    degree: "BTech in Computer Science and Engineering",
    period: "2026 — 2030",
    status: "Currently Enrolled (First Year)",
    focus: "Core CS, Data Structures, Algorithms & FullStack Development",
  },
  {
    institution: "Pearl Rosary School",
    shortName: "PEARL ROSARY",
    degree: "Higher Secondary Education",
    period: "Completed",
    status: "Graduated",
    focus: "Science & Mathematics Stream",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="px-6 sm:px-10 lg:px-16 py-28 border-b border-white/[0.06] relative"
    >
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          {/* Section Index Header */}
          <div className="flex items-center gap-3 mb-10">
            <span className="editorial-number">.05</span>
            <span className="h-[1px] w-8 bg-zinc-800" />
            <span className="editorial-label text-zinc-400">
              Academic Pathway / Credentials
            </span>
          </div>

          {/* Section Title in Outfit */}
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mb-14 leading-[1.15]">
            Academic background.
          </h2>
        </SectionReveal>

        {/* Education Timeline Cards */}
        <div className="space-y-6">
          {educationHistory.map((item, idx) => (
            <SectionReveal key={item.institution} delay={idx * 150}>
              <div className="editorial-card rounded-xl p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs text-zinc-500 tracking-wider">
                      {item.shortName}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
                    <span className="font-body text-xs font-medium text-emerald-400">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-zinc-100 transition-colors mb-2 tracking-tight">
                    {item.institution}
                  </h3>

                  <p className="font-body text-base text-zinc-200 font-medium mb-2">
                    {item.degree}
                  </p>

                  <p className="font-body text-xs text-zinc-400 font-normal">
                    {item.focus}
                  </p>
                </div>

                <div className="md:text-right border-t md:border-t-0 pt-4 md:pt-0 border-white/[0.06]">
                  <span className="editorial-label text-zinc-500 block mb-1">
                    TIMELINE
                  </span>
                  <span className="font-body text-base font-semibold text-white tracking-wide">
                    {item.period}
                  </span>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}