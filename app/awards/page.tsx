"use client";

import { motion, type Variants } from "framer-motion";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import { tech, logos } from "@/lib/logos";

interface Award {
  year: string;
  title: string;
  org: string;
  location: string;
  mono?: string;
  logo?: string;
}

const AWARDS: Award[] = [
  {
    year: "2025",
    title: "Mobility & Stay Stipend — Germany Exchange",
    org: "FIEE — UNI",
    location: "Germany",
    logo: logos.uni,
    mono: "UNI",
  },
  {
    year: "2024",
    title: "1st Place — ABET Fair 2024",
    org: "Faculty of Electrical and Electronic Engineering (FIEE), UNI",
    location: "Lima, Peru",
    logo: logos.uni,
    mono: "UNI",
  },
  {
    year: "2024",
    title: "2nd Place — National Datathon Laboratech",
    org: "Ministry of Labor and Employment",
    location: "Peru",
    mono: "PE",
  },
  {
    year: "2024",
    title: "Top 5 Students — Specialization Ranking",
    org: "National University of Engineering (UNI)",
    location: "Lima, Peru",
    logo: logos.uni,
    mono: "UNI",
  },
  {
    year: "2024",
    title: 'Scholarship — "Acelera Tu Futuro" Program (×2)',
    org: "Arca Continental Lindley",
    location: "Peru",
    logo: tech("cocacola"),
    mono: "CC",
  },
  {
    year: "2021",
    title: "1st Place — Class Ranking",
    org: "National University of Engineering (UNI)",
    location: "Lima, Peru",
    logo: logos.uni,
    mono: "UNI",
  },
];

const stagger: Variants = { animate: { transition: { staggerChildren: 0.07 } } };
const rowV: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
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
        whileInView="animate"
        viewport={{ once: true, margin: "-40px" }}
        className="divide-y divide-zinc-900"
      >
        {AWARDS.map((a, i) => (
          <motion.div
            key={i}
            variants={rowV}
            className="group flex items-center gap-4 py-5 first:pt-0"
          >
            <span className="shrink-0 text-xs text-zinc-600 w-10">{a.year}</span>
            <Logo src={a.logo} label={a.org} mono={a.mono} size={34} />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-zinc-200 font-medium leading-snug">
                {a.title}
              </p>
              <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                {a.org}
              </p>
            </div>
            <span className="shrink-0 text-xs text-zinc-700 hidden sm:block">
              {a.location}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
