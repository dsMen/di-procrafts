"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "#services", label: "Services" },
  { href: "#how", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#08080f]/85 backdrop-blur-xl border-b border-white/[0.07] py-3"
            : "py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-[family-name:var(--font-space)] text-xl font-bold text-slate-100">
            <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
            DI ProCrafts
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#book"
            className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-purple-700 to-purple-500 text-white text-sm font-semibold font-[family-name:var(--font-space)] px-5 py-2.5 rounded-xl shadow-[0_0_24px_rgba(168,85,247,0.35)] hover:shadow-[0_0_40px_rgba(168,85,247,0.55)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Book a Call →
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-slate-200 rounded" />
            <span className="block w-6 h-0.5 bg-slate-200 rounded" />
            <span className="block w-6 h-0.5 bg-slate-200 rounded" />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[99] bg-[#08080f]/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-slate-300 text-2xl cursor-pointer hover:text-white transition-colors"
          aria-label="Close menu"
        >
          ✕
        </button>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-[family-name:var(--font-space)] text-3xl font-bold text-slate-200 hover:text-purple-400 transition-colors"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#book"
          onClick={() => setOpen(false)}
          className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-purple-700 to-purple-500 text-white text-base font-semibold font-[family-name:var(--font-space)] px-8 py-3.5 rounded-xl shadow-[0_0_24px_rgba(168,85,247,0.35)]"
        >
          Book a Call →
        </a>
      </div>
    </>
  );
}
