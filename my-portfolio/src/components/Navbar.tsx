"use client";

import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMenu, FiX, FiArrowDownRight } from "react-icons/fi";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.07] bg-[#0c0d10]/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
        {/* Editorial Stacked Brand Monogram (Outfit geometric heading font) */}
        <a
          href="#"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Sourivya Mondal - Home"
        >
          <div className="font-heading flex flex-col text-sm font-extrabold leading-[0.9] tracking-wider text-white transition-transform duration-300 group-hover:scale-105">
            <span>SM</span>
            
          </div>
          <span className="hidden sm:inline-block font-body text-xs font-medium tracking-wide text-zinc-400 group-hover:text-zinc-200 transition-colors">
            / Sourivya Mondal
          </span>
        </a>

        {/* Desktop Navigation with Manrope font and subtle letter-spacing */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-body text-xs font-medium tracking-wide uppercase text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Action Links & Socials */}
          <div className="flex items-center gap-4 pl-6 border-l border-white/[0.08]">
            <a
              href="/resume.pdf"
              download="Sourivya_Mondal_Resume.pdf"
              className="font-body inline-flex items-center gap-1.5 text-xs font-medium tracking-wide uppercase text-zinc-300 hover:text-white transition-colors py-1.5 px-3.5 rounded border border-white/[0.12] hover:border-white/40"
            >
              Resume
              <FiArrowDownRight className="text-xs" />
            </a>

            <div className="flex items-center gap-3 text-zinc-400">
              <a
                href="https://github.com/gitsourivya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="hover:text-white transition-colors p-1"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/sourivya-mondal-99235a427/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="hover:text-white transition-colors p-1"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-300 hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0c0d10] px-6 py-6 transition-all">
          <ul className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-body text-sm font-medium tracking-wide uppercase text-zinc-300 hover:text-white block py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
            <a
              href="/resume.pdf"
              download="Sourivya_Mondal_Resume.pdf"
              className="font-body text-xs font-medium tracking-wide uppercase text-white py-2 px-4 rounded border border-white/20"
            >
              Resume ↓
            </a>
            <div className="flex items-center gap-4 text-zinc-400">
              <a
                href="https://github.com/gitsourivya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="hover:text-white"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/sourivya-mondal-99235a427/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="hover:text-white"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}