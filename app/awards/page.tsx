"use client";

import { motion, type Variants } from "framer-motion";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import { site } from "@/lib/logos";

const AWARDS = [
  {
    year: "2025",
    title: "Mobility & Stay Stipend — Germany Exchange",
    org: "FIEE — UNI",
    location: "Germany",
    logo: site("uni.edu.pe"),
  },
  {
    year: "2024",
    title: "1st Place — ABET Fair 2024",
    org: "Faculty of Electrical and Electronic Engineering (FIEE), UNI",
    location: "Lima, Peru",
    logo: site("uni.edu.pe"),
  },
  {
    year: "2024",
    title: "2nd Place — National Datathon Laboratech",
    org: "Ministry of Labor and Employment",
    location: "Peru",
    logo: site("gob.pe"),
  },
  {
    year: "2024",
    title: "Top 5 Students — Specialization Ranking",
    org: "National University of Engineering (UNI)",
    location: "Lima, Peru",
    logo: site("uni.edu.pe"),
  },
  {
    year: "2024",
    title: 'Scholarship — "Acelera Tu Futuro" Program (×2)',
    org: "Arca Continental Lindley",
    location: "Peru",
    logo: site("coca-cola.com"),
  },
  {
    year: "2021",
    title: "1st Place — Class Ranking",
    org: "National University of Engineering (UNI)",
    location: "Lima, Peru",
    logo: site("uni.edu.pe"),
  },
];

const stagger: Variants = { animate: { transition: { staggerChildren: 0.06 } } };
const rowV: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AwardsPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <Header />

      <h1 className="text-xl text-zinc-500 mb-14">awards &amp; recognition</h1>

      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="divide-y divide-zinc-900"
      >
        {AWARDS.map((a, i) => (
          <motion.div
            key={i}
            variants={rowV}
            className="group flex gap-5 py-5 first:pt-0"
          >
            <span className="shrink-0 text-xs text-zinc-600 pt-0.5 w-10">
              {a.year}
            </span>
            <span className="mt-0.5">
              <Logo src={a.logo} alt={a.org} size={18} />
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-zinc-200 font-medium leading-snug">
                {a.title}
              </p>
              <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                {a.org}
              </p>
            </div>
            <span className="shrink-0 text-xs text-zinc-700 hidden sm:block pt-0.5">
              {a.location}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
