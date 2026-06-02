"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import LiveClock from "@/components/LiveClock";

const MENU = [
  { label: "about", href: "/about" },
  { label: "experience", href: "/experience" },
  { label: "education", href: "/education" },
  { label: "awards", href: "/awards" },
  { label: "contact", href: "/contact" },
];

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.45 } },
};

const item: Variants = {
  hidden: { opacity: 0, x: -8 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="max-w-md mx-auto w-full px-6 flex-1 flex flex-col pt-[19vh] pb-12">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-2.5"
        >
          <div className="inline-block bg-red-600 px-5 py-2">
            <span className="font-sans font-bold italic text-3xl text-white tracking-tight">
              Manuel
            </span>
          </div>
        </motion.div>

        {/* Live clock */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center text-xs text-zinc-500 mb-20"
        >
          <LiveClock />
        </motion.p>

        {/* Menu */}
        <motion.nav
          variants={list}
          initial="hidden"
          animate="show"
          className="space-y-5"
        >
          {MENU.map((m) => (
            <motion.div
              key={m.href}
              variants={item}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {m.external ? (
                <a
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-300 hover:text-white transition-colors"
                >
                  {m.label}
                </a>
              ) : (
                <Link
                  href={m.href}
                  className="text-sm text-zinc-300 hover:text-white transition-colors"
                >
                  {m.label}
                </Link>
              )}
            </motion.div>
          ))}

          <motion.p variants={item} className="text-sm text-zinc-600 pt-1">
            available — nov 2025
          </motion.p>
        </motion.nav>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          className="flex items-center gap-5 mt-16"
        >
          <a
            href="https://github.com/sudomanuel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-600 hover:text-zinc-200 transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/manuel-pusma-jurado-29876b265"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-600 hover:text-zinc-200 transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:mpu55262@stud.hs-furtwangen.de"
            aria-label="Email"
            className="text-zinc-600 hover:text-zinc-200 transition-colors"
          >
            <Mail size={16} />
          </a>
        </motion.div>
      </div>
    </main>
  );
}
