"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, MapPin, Copy, Check } from "lucide-react";
import Header from "@/components/Header";

const EMAIL = "mpu55262@stud.hs-furtwangen.de";

const stagger = { animate: { transition: { staggerChildren: 0.07 } } };
const row = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <Header />

      <h1 className="text-xl text-zinc-500 mb-4">contact</h1>
      <p className="text-sm text-zinc-400 leading-relaxed mb-12 max-w-md">
        Open to Working Student or Internship positions from November 2025.
        Feel free to reach out.
      </p>

      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="divide-y divide-zinc-900"
      >
        {/* Email (click to copy) */}
        <motion.button
          variants={row}
          onClick={copy}
          className="group w-full flex items-center gap-4 py-4 text-left"
        >
          <Mail size={15} className="shrink-0 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
          <span className="flex-1 text-sm text-zinc-300 break-all">{EMAIL}</span>
          {copied ? (
            <Check size={13} className="shrink-0 text-emerald-500" />
          ) : (
            <Copy size={13} className="shrink-0 text-zinc-700 group-hover:text-zinc-400 transition-colors" />
          )}
        </motion.button>

        {/* LinkedIn */}
        <motion.a
          variants={row}
          href="https://www.linkedin.com/in/manuel-pusma-jurado-29876b265"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 py-4"
        >
          <Linkedin size={15} className="shrink-0 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
          <span className="flex-1 text-sm text-zinc-300">manuel-pusma-jurado</span>
          <span className="text-xs text-zinc-700 group-hover:text-zinc-400 transition-colors">↗</span>
        </motion.a>

        {/* GitHub */}
        <motion.a
          variants={row}
          href="https://github.com/sudomanuel"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 py-4"
        >
          <Github size={15} className="shrink-0 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
          <span className="flex-1 text-sm text-zinc-300">sudomanuel</span>
          <span className="text-xs text-zinc-700 group-hover:text-zinc-400 transition-colors">↗</span>
        </motion.a>

        {/* Phone */}
        <motion.a
          variants={row}
          href="tel:+51949155329"
          className="group flex items-center gap-4 py-4"
        >
          <Phone size={15} className="shrink-0 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
          <span className="flex-1 text-sm text-zinc-300">+51 949 155 329</span>
          <span className="text-xs text-zinc-700">PE</span>
        </motion.a>

        {/* Location */}
        <motion.div variants={row} className="flex items-center gap-4 py-4">
          <MapPin size={15} className="shrink-0 text-zinc-600" />
          <span className="flex-1 text-sm text-zinc-400">
            Villingen-Schwenningen, Baden-Württemberg, Germany
          </span>
        </motion.div>
      </motion.div>
    </main>
  );
}
