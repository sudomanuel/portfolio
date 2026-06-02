"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Award } from "lucide-react";
import SectionHeader from "./SectionHeader";

const AWARDS = [
  {
    year: "2025",
    title: "Mobility & Stay Stipend — Germany Exchange",
    org: "FIEE — Facultad de Ingeniería y Tecnología Electrónica (UNI)",
    location: "Germany",
    icon: "star",
  },
  {
    year: "2024",
    title: "1st Place — ABET Fair 2024",
    org: "Faculty of Electrical and Electronic Engineering (FIEE), UNI",
    location: "Lima, Peru",
    icon: "trophy",
  },
  {
    year: "2024",
    title: "2nd Place — National Datathon Laboratech",
    org: "Ministry of Labor and Employment",
    location: "Peru",
    icon: "trophy",
  },
  {
    year: "2024",
    title: "Top 5 Students — Specialization Ranking",
    org: "National University of Engineering (UNI)",
    location: "Lima, Peru",
    icon: "star",
  },
  {
    year: "2024",
    title: 'Scholarship — "Acelera Tu Futuro" Program (×2)',
    org: "Arca Continental Lindley",
    location: "Peru",
    icon: "award",
  },
  {
    year: "2021",
    title: "1st Place — Class Ranking",
    org: "National University of Engineering (UNI)",
    location: "Lima, Peru",
    icon: "trophy",
  },
];

function Icon({ name }: { name: string }) {
  if (name === "trophy") return <Trophy size={14} className="text-amber-400" />;
  if (name === "star") return <Star size={14} className="text-indigo-400" />;
  return <Award size={14} className="text-violet-400" />;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const rowVariant = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function Awards() {
  return (
    <section id="awards" className="py-24 px-6 bg-[#0d0d13]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="Honors & Awards" title="Recognition" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-3"
        >
          {AWARDS.map((a, i) => (
            <motion.div
              key={i}
              variants={rowVariant}
              whileHover={{ x: 4, transition: { duration: 0.18 } }}
              className="flex items-center gap-4 sm:gap-5 p-5 rounded-xl bg-[#111116] border border-white/[0.07] hover:border-white/15 transition-colors duration-200 cursor-default"
            >
              <span className="shrink-0 font-display font-extrabold text-zinc-600 text-sm w-9 tabular-nums">
                {a.year}
              </span>

              <div className="shrink-0 w-8 h-8 rounded-lg bg-zinc-900 border border-white/[0.06] flex items-center justify-center">
                <Icon name={a.icon} />
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-display font-semibold text-white text-sm leading-snug">
                  {a.title}
                </p>
                <p className="text-zinc-500 text-xs truncate mt-0.5">{a.org}</p>
              </div>

              <span className="shrink-0 text-zinc-600 text-xs hidden sm:block">
                {a.location}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
