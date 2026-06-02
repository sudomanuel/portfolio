"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const ITEMS = [
  {
    school: "National University of Engineering (UNI)",
    degree: "B.Sc. Electronic Engineering — Final Year",
    badge: "Top 10%",
    period: "2021 – Present",
    location: "Lima, Peru",
    accent: true,
  },
  {
    school: "Hochschule Furtwangen University (HFU)",
    degree: "Exchange Semester (WS 2025/26)",
    period: "Sep 2025 – Mar 2026",
    location: "Villingen-Schwenningen, Germany",
    accent: true,
  },
  {
    school: "Data Mining Consulting",
    degree: "Data Analytics Specialization Program",
    period: "Mar 2024 – Sep 2024",
    location: "Remote",
    accent: false,
  },
  {
    school: "ICPNA",
    degree: "Complete English Program — CEFR C1",
    period: "2021 – 2022",
    location: "Lima, Peru",
    accent: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-[#0d0d13]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="Education" title="Academic background" />

        <div className="grid sm:grid-cols-2 gap-4">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className={`rounded-2xl border p-6 transition-colors duration-300 ${
                item.accent
                  ? "bg-indigo-950/25 border-indigo-500/20 hover:border-indigo-500/45"
                  : "bg-[#111116] border-white/[0.07] hover:border-white/15"
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-1.5">
                <h3 className="font-display font-bold text-white text-sm leading-snug">
                  {item.school}
                </h3>
                {item.badge && (
                  <span className="shrink-0 px-2 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
                    {item.badge}
                  </span>
                )}
              </div>
              <p className="text-zinc-300 text-sm font-medium mb-1.5">
                {item.degree}
              </p>
              <p className="text-zinc-500 text-xs">
                {item.period} &middot; {item.location}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
