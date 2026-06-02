"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const handle = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      setHidden(y > lastY.current && y > 120);
      lastY.current = y;
    };
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.header
          key="navbar"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
            scrolled
              ? "bg-[#0a0a0f]/75 backdrop-blur-xl border-b border-white/[0.06]"
              : ""
          }`}
        >
          <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <a
              href="#"
              className="font-display font-extrabold text-xl text-white hover:text-indigo-300 transition-colors duration-200"
            >
              mpj<span className="text-indigo-400">.</span>
            </a>

            <ul className="hidden md:flex items-center gap-7">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="mailto:mpu55262@stud.hs-furtwangen.de"
              className="hidden md:block text-sm font-semibold px-4 py-2 rounded-lg border border-indigo-500/40 text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-500/70 transition-all duration-200"
            >
              Get in touch
            </a>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
