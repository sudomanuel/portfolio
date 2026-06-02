"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const AWARDS = [
  {
    year: "2025",
    title: "Mobility & Stay Stipend — Germany Exchange",
    org: "FIEE — UNI",
    location: "Germany",
  },
  {
    year: "2024",
    title: "1st Place — ABET Fair 2024",
    org: "Faculty of Electrical and Electronic Engineering (FIEE), UNI",
    location: "Lima, Peru",
  },
  {
    year: "2024",
    title: "2nd Place — National Datathon Laboratech",
    org: "Ministry of Labor and Employment",
    location: "Peru",
  },
  {
    year: "2024",
    title: "Top 5 Students — Specialization Ranking",
    org: "National University of Engineering (UNI)",
    location: "Lima, Peru",
  },
  {
    year: "2024",
    title: 'Scholarship — "Acelera Tu Futuro" Program (×2)',
    org: "Arca Continental Lindley",
    location: "Peru",
  },
  {
    year: "2021",
    title: "1st Place — Class Ranking",
    org: "National University of Engineering (UNI)",
    location: "Lima, Peru",
  },
];

const stagger = {
  animate: { transition: { staggerChildren: 0.06 } },
};
const row = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export default function AwardsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 pt-28 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-3xl font-semibold tracking-[-0.02em] text-[#ededed] mb-14">
            Awards &amp; Recognition
          </h1>

          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="divide-y divide-zinc-900"
          >
            {AWARDS.map((a, i) => (
              <motion.div
                key={i}
                variants={row}
                className="flex gap-6 py-5 first:pt-0"
              >
                <span className="shrink-0 text-xs text-zinc-600 font-mono pt-0.5 w-10">
                  {a.year}
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
        </motion.div>
      </main>
    </div>
  );
}
