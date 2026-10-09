import SectionReveal from "./SectionReveal";

export default function About() {
  return (
    <section id="about" className="px-6 sm:px-10 lg:px-16 py-28 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          {/* Section Index Header */}
          <div className="flex items-center gap-3 mb-10">
            <span className="editorial-number">.02</span>
            <span className="h-[1px] w-8 bg-zinc-800" />
            <span className="editorial-label text-zinc-400">About Me / Background</span>
          </div>

          {/* Main Statement Title in Outfit */}
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mb-14 leading-[1.15]">
            Building my foundation in software development.
          </h2>
        </SectionReveal>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Editorial Narrative in Manrope */}
          <div className="lg:col-span-7 space-y-6">
            <SectionReveal delay={100}>
              <p className="font-body text-lg sm:text-xl text-zinc-200 leading-relaxed font-normal">
                I'm a first-year BTech Computer Science and Engineering student at{" "}
                <span className="text-white font-medium">IIIT Manipur</span>. I'm currently strengthening
                my fundamentals in programming, data structures and algorithms, and software development.
              </p>
            </SectionReveal>

            <SectionReveal delay={200}>
              <p className="font-body text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
                I'm particularly interested in fullstack development and enjoy turning what I learn into
                practical projects. My current focus is improving my programming skills while building
                reliable, real-world applications.
              </p>
            </SectionReveal>

            <SectionReveal delay={300}>
              <div className="pt-4 flex items-center gap-3 text-xs font-mono tracking-wider text-zinc-500 uppercase">
                <span>IIIT MANIPUR</span>
                <span>•</span>
                <span>CSE 2026—2030</span>
                <span>•</span>
                <span>FULLSTACK DEV</span>
              </div>
            </SectionReveal>
          </div>

          {/* Right: Editorial Profile Dossier Card */}
          <div className="lg:col-span-5">
            <SectionReveal delay={250}>
              <div className="editorial-card rounded-xl p-8 space-y-6 border border-white/[0.08] bg-[#121419]/90 backdrop-blur">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <span className="editorial-label text-zinc-400">Profile Overview</span>
                  <span className="editorial-number text-xs">2026</span>
                </div>

                <div className="space-y-5 text-sm">
                  <div>
                    <span className="font-mono text-[11px] tracking-wider text-zinc-500 uppercase block mb-1">
                      INSTITUTION
                    </span>
                    <span className="font-body text-zinc-200 font-medium">
                      IIIT Manipur (Indian Institute of Information Technology)
                    </span>
                  </div>

                  <div className="border-t border-white/[0.05] pt-4">
                    <span className="font-mono text-[11px] tracking-wider text-zinc-500 uppercase block mb-1">
                      DEGREE PROGRAM
                    </span>
                    <span className="font-body text-zinc-200 font-medium">
                      BTech in Computer Science &amp; Engineering
                    </span>
                  </div>

                  <div className="border-t border-white/[0.05] pt-4">
                    <span className="font-mono text-[11px] tracking-wider text-zinc-500 uppercase block mb-1">
                      PRIMARY FOCUS
                    </span>
                    <span className="font-body text-zinc-200 font-medium">
                      FullStack Web, Backend APIs &amp; Practical Applications
                    </span>
                  </div>

                  <div className="border-t border-white/[0.05] pt-4">
                    <span className="font-mono text-[11px] tracking-wider text-zinc-500 uppercase block mb-1">
                      STATUS
                    </span>
                    <span className="font-body inline-flex items-center gap-2 text-xs font-medium text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active Student &amp; Open to Opportunities
                    </span>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}