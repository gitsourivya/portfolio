export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-4xl">
          <p className="text-gray-400 text-lg mb-5 animate-[fadeIn_0.8s_ease-out]">
            Hi, I'm
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 animate-[fadeIn_1s_ease-out]">
            Sourivya Mondal
          </h1>

          <h2 className="text-2xl sm:text-3xl text-gray-300 mb-6 animate-[fadeIn_1.2s_ease-out]">
            BTech CSE Student & Backend Developer
          </h2>

          <p className="text-gray-400 text-lg leading-8 max-w-2xl mb-10 animate-[fadeIn_1.4s_ease-out]">
            I'm a Computer Science student at IIIT Manipur,
            passionate about backend development, software engineering,
            and building practical applications.
          </p>

          <div className="flex flex-wrap gap-4 animate-[fadeIn_1.6s_ease-out]">
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 hover:-translate-y-0.5 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-700 rounded-lg font-medium hover:border-gray-400 hover:-translate-y-0.5 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}