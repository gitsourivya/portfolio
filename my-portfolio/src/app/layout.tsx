import type { Metadata } from "next";
import { Outfit, Manrope, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sourivya Mondal — FullStack Developer & CSE Undergrad",
  description:
    "Portfolio of Sourivya Mondal, a BTech Computer Science student at IIIT Manipur focused on software engineering, fullstack development, and practical AI applications.",
  keywords: [
    "Sourivya Mondal",
    "Sourivya",
    "IIIT Manipur",
    "Computer Science",
    "FullStack Developer",
    "Software Developer",
    "Web Developer",
    "Next.js",
    "TypeScript",
    "React",
  ],
  authors: [{ name: "Sourivya Mondal" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${manrope.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0c0d10] text-[#f5f5f7] font-body relative selection:bg-white selection:text-black">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}