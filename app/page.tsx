"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Mail, Linkedin, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="max-w-2xl mx-auto px-6 pt-32 pb-28">
        {/* Status */}
        <motion.div {...fade(0)}>
          <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available from November 2025
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fade(0.08)}
          className="text-4xl sm:text-5xl font-semibold tracking-[-0.02em] text-[#ededed] leading-tight mb-3"
        >
          Manuel Pusma Jurado
        </motion.h1>

        {/* Role */}
        <motion.p {...fade(0.14)} className="text-zinc-400 text-base mb-8">
          Electronic Engineer · Data Builder · Exchange @ HFU Germany
        </motion.p>

        {/* Bio */}
        <motion.p
          {...fade(0.2)}
          className="text-zinc-400 text-sm leading-[1.75] mb-10 max-w-lg"
        >
          I fix real operational pain by turning messy field data into tools
          people actually use. One hour building a lean ETL in Python/DuckDB,
          the next aligning with technicians and managers to make sure the
          solution fits. Final-year at{" "}
          <span className="text-zinc-200">UNI Lima</span>, currently on
          exchange at{" "}
          <span className="text-zinc-200">Hochschule Furtwangen</span> in
          Baden-Württemberg.
        </motion.p>

        {/* Links */}
        <motion.div {...fade(0.26)} className="flex flex-wrap gap-5 mb-14">
          <a
            href="https://www.linkedin.com/in/manuel-pusma-jurado-29876b265"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-200 transition-colors"
          >
            <Linkedin size={13} />
            LinkedIn
            <ArrowUpRight size={11} className="text-zinc-600" />
          </a>
          <a
            href="mailto:mpu55262@stud.hs-furtwangen.de"
            className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-200 transition-colors"
          >
            <Mail size={13} />
            mpu55262@stud.hs-furtwangen.de
            <ArrowUpRight size={11} className="text-zinc-600" />
          </a>
          <span className="flex items-center gap-1.5 text-sm text-zinc-600">
            <MapPin size={13} />
            Villingen-Schwenningen, Germany
          </span>
        </motion.div>

        {/* Divider */}
        <motion.div {...fade(0.3)} className="border-t border-zinc-900 mb-10" />

        {/* Currently */}
        <motion.div {...fade(0.34)} className="mb-12">
          <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-600 mb-5">
            Currently
          </p>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-zinc-200 font-medium">
                Intern @ Arca Continental Lindley — Coca-Cola Peru
              </p>
              <p className="text-sm text-zinc-500 mt-0.5">
                Building ETL pipelines and operational dashboards · Lima, Peru
              </p>
            </div>
            <div>
              <p className="text-sm text-zinc-200 font-medium">
                Exchange Semester @ HFU Furtwangen
              </p>
              <p className="text-sm text-zinc-500 mt-0.5">
                Electronic Engineering · Baden-Württemberg, Germany
              </p>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div {...fade(0.38)} className="border-t border-zinc-900 mb-10" />

        {/* Availability */}
        <motion.div {...fade(0.42)} className="mb-14">
          <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-600 mb-4">
            Availability
          </p>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Open to{" "}
            <span className="text-zinc-200">Working Student</span> or{" "}
            <span className="text-zinc-200">Internship</span> positions from
            November 2025.
            <br />
            Up to 20 h/week during term · Full-time during semester breaks.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div {...fade(0.46)} className="border-t border-zinc-900 mb-10" />

        {/* Navigation to subpages */}
        <motion.div {...fade(0.5)}>
          <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-600 mb-2">
            Explore
          </p>
          {[
            { label: "Experience", href: "/experience", sub: "Professional & academic work" },
            { label: "Education", href: "/education", sub: "UNI Lima · HFU Germany · Certifications" },
            { label: "Awards", href: "/awards", sub: "7 recognitions since 2021" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center justify-between py-4 border-b border-zinc-900 hover:border-zinc-700 transition-colors"
            >
              <div>
                <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                  {item.label}
                </p>
                <p className="text-xs text-zinc-600 mt-0.5">{item.sub}</p>
              </div>
              <ArrowUpRight
                size={14}
                className="text-zinc-700 group-hover:text-zinc-400 transition-colors"
              />
            </Link>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
