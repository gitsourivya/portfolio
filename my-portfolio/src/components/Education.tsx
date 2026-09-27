export default function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-500 mb-3">Education</p>

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Academic background
        </h2>

        <div className="space-y-6">
          <div className="border border-gray-800 rounded-2xl p-7 hover:border-gray-600 hover:-translate-y-1 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold">
                  Indian Institute of Information Technology, Manipur
                </h3>

                <p className="text-gray-400 mt-2">
                  BTech in Computer Science and Engineering
                </p>
              </div>

              <p className="text-gray-500">
                2026 – 2030
              </p>
            </div>
          </div>

          <div className="border border-gray-800 rounded-2xl p-7 hover:border-gray-600 hover:-translate-y-1 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold">
                  Pearl Rosary School
                </h3>

                <p className="text-gray-400 mt-2">
                  Higher Secondary Education
                </p>
              </div>

              <p className="text-gray-500">
                Completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}