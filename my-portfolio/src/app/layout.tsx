import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sourivya Mondal | BTech CSE Student & Backend Developer",
  description:
    "Portfolio of Sourivya Mondal, a BTech Computer Science student at IIIT Manipur interested in backend development, software engineering, and building practical applications.",
  keywords: [
    "Sourivya Mondal",
    "Sourivya",
    "IIIT Manipur",
    "Computer Science",
    "Backend Developer",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}