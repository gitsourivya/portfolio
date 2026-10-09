import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="px-6 sm:px-10 lg:px-16 py-24 bg-[#0a0b0e] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Sign-off in Outfit and Manrope */}
        <p className="editorial-label text-zinc-500 mb-3">
          THE END
        </p>

        <h3 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Thanks for visiting!
        </h3>

        <p className="font-body text-xs sm:text-sm tracking-wide text-zinc-400 max-w-md mb-12 font-medium">
      
        </p>

        {/* Back to top button */}
        <a
          href="#"
          className="font-body group inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-zinc-300 hover:text-white py-2.5 px-5 rounded border border-white/[0.1] hover:border-white/40 transition-all duration-300 mb-16"
        >
          <span>Back to Top</span>
          <FiArrowUp className="text-sm transition-transform duration-300 group-hover:-translate-y-1" />
        </a>

        {/* Bottom Credits & Copyright */}
        <div className="w-full pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-zinc-500">
          <p>© 2026 Sourivya Mondal. All rights reserved.</p>
          <p>Built with Next.js, React &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}