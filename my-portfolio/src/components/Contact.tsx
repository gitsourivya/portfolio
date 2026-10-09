"use client";

import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaCopy, FaCheck } from "react-icons/fa";
import { FiArrowUpRight, FiSend } from "react-icons/fi";
import SectionReveal from "./SectionReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const emailAddress = "msourivya08@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage("Please fill in all fields before sending.");
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${formData.name.trim()}`
    );
    const body = encodeURIComponent(
      `Hi Sourivya,\n\n${formData.message.trim()}\n\n—\nFrom: ${formData.name.trim()}\nReply-To: ${formData.email.trim()}`
    );

    setStatusMessage("Opening your email client to send message...");
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="px-6 sm:px-10 lg:px-16 py-28 border-b border-white/[0.06] relative"
    >
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          {/* Section Index Header */}
          <div className="flex items-center gap-3 mb-10">
            <span className="editorial-number">.06</span>
            <span className="h-[1px] w-8 bg-zinc-800" />
            <span className="editorial-label text-zinc-400">
              Communication / Inquiries
            </span>
          </div>
        </SectionReveal>

        {/* Dual-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5 space-y-8">
            <SectionReveal delay={100}>
              <h2 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
                Let's connect.
              </h2>

              <p className="font-body text-base text-zinc-400 leading-relaxed font-normal mb-8">
                I'm interested in connecting with developers, collaborating on
                software projects, and exploring internship opportunities.
                Feel free to reach out directly or send a message.
              </p>

              {/* Structured Metadata Rows */}
              <div className="space-y-6 text-sm border-t border-white/[0.08] pt-8">
                <div>
                  <span className="editorial-label text-zinc-500 block mb-1">
                    LOCATION
                  </span>
                  <p className="font-body text-zinc-200 font-medium">
                    IIIT Manipur, Imphal, India
                  </p>
                </div>

                <div>
                  <span className="editorial-label text-zinc-500 block mb-1">
                    E-MAIL
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={`mailto:${emailAddress}`}
                      className="font-body text-white hover:text-zinc-300 transition-colors font-medium text-base underline underline-offset-4 decoration-zinc-700 hover:decoration-white"
                    >
                      {emailAddress}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      type="button"
                      aria-label="Copy email address"
                      className="p-1.5 text-zinc-400 hover:text-white transition-colors"
                      title="Copy email to clipboard"
                    >
                      {copied ? <FaCheck size={13} className="text-emerald-400" /> : <FaCopy size={13} />}
                    </button>
                    {copied && (
                      <span className="font-body text-xs text-emerald-400 font-medium tracking-wide">
                        Copied!
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <span className="editorial-label text-zinc-500 block mb-1">
                    CHANNELS
                  </span>
                  <div className="flex items-center gap-6 pt-1">
                    <a
                      href="https://github.com/gitsourivya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body inline-flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white transition-colors uppercase tracking-wider font-medium"
                    >
                      <FaGithub size={15} />
                      <span>GitHub</span>
                      <FiArrowUpRight size={13} />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/sourivya-mondal-99235a427/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body inline-flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white transition-colors uppercase tracking-wider font-medium"
                    >
                      <FaLinkedinIn size={15} />
                      <span>LinkedIn</span>
                      <FiArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <SectionReveal delay={200}>
              <div className="relative rounded-2xl border border-white/[0.1] bg-[#14161d] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
                
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-6 mb-8">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-white">
                    Contact Form
                  </h3>
                  <span className="font-body text-xs text-zinc-500 uppercase tracking-wider font-medium">
                    Direct Dispatch
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="editorial-label text-zinc-400 block mb-2"
                    >
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Alex Chen"
                      className="font-body w-full bg-[#0c0d10] border border-white/[0.1] focus:border-white/50 rounded px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="editorial-label text-zinc-400 block mb-2"
                    >
                      YOUR E-MAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. alex@example.com"
                      className="font-body w-full bg-[#0c0d10] border border-white/[0.1] focus:border-white/50 rounded px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="editorial-label text-zinc-400 block mb-2"
                    >
                      MESSAGE
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me about your project, team, or opportunity..."
                      className="font-body w-full bg-[#0c0d10] border border-white/[0.1] focus:border-white/50 rounded px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {statusMessage && (
                    <p className="font-body text-xs text-zinc-300 font-medium">
                      {statusMessage}
                    </p>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="font-body group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-semibold text-xs tracking-wider uppercase rounded hover:bg-zinc-200 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] focus:outline-none"
                    >
                      <span>Send Message</span>
                      <FiSend className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>

              </div>
            </SectionReveal>
          </div>

        </div>
      </div>
    </section>
  );
}