"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const DEGREES = [
  {
    school: "National University of Engineering (UNI)",
    degree: "B.Sc. Electronic Engineering — Final Year",
    note: "Top 10%",
    period: "2021 – Present",
    location: "Lima, Peru",
  },
  {
    school: "Hochschule Furtwangen University (HFU)",
    degree: "Exchange Semester (WS 2025/26)",
    period: "Sep 2025 – Mar 2026",
    location: "Villingen-Schwenningen, Germany",
  },
];

const CERTS = [
  {
    school: "Data Mining Consulting",
    degree: "Data Analytics Specialization Program",
    period: "Mar 2024 – Sep 2024",
    location: "Remote",
  },
  {
    school: "ICPNA",
    degree: "Complete English Program — CEFR C1",
    period: "2021 – 2022",
    location: "Lima, Peru",
  },
];

const LANGUAGES = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "C1 Advanced · IELTS certified" },
  { name: "German", level: "A1 Beginner · In progress" },
];

const stagger = {
  animate: { transition: { staggerChildren: 0.07 } },
};
const row = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

function EduItem({
  item,
}: {
  item: { school: string; degree: string; note?: string; period: string; location: string };
}) {
  return (
    <motion.div variants={row} className="py-6 first:pt-0">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
        <div>
          <p className="text-sm font-medium text-zinc-100">
            {item.school}
            {item.note && (
              <span className="ml-2 text-xs text-zinc-500 font-normal">
                {item.note}
              </span>
            )}
          </p>
          <p className="text-sm text-zinc-500 mt-0.5">{item.degree}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-xs text-zinc-600">{item.period}</p>
          <p className="text-xs text-zinc-700 mt-0.5">{item.location}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function EducationPage() {
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
            Education
          </h1>

          {/* Degrees */}
          <div className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-600 mb-2">
              Degrees
            </p>
            <motion.div
              variants={stagger}
              initial="initial"
              animate="animate"
              className="divide-y divide-zinc-900"
            >
              {DEGREES.map((d, i) => (
                <EduItem key={i} item={d} />
              ))}
            </motion.div>
          </div>

          <div className="border-t border-zinc-900 mb-12" />

          {/* Certifications */}
          <div className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-600 mb-2">
              Certifications &amp; Programs
            </p>
            <motion.div
              variants={stagger}
              initial="initial"
              animate="animate"
              className="divide-y divide-zinc-900"
            >
              {CERTS.map((c, i) => (
                <EduItem key={i} item={c} />
              ))}
            </motion.div>
          </div>

          <div className="border-t border-zinc-900 mb-12" />

          {/* Languages */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-600 mb-6">
              Languages
            </p>
            <motion.div
              variants={stagger}
              initial="initial"
              animate="animate"
              className="space-y-4"
            >
              {LANGUAGES.map((l, i) => (
                <motion.div
                  key={i}
                  variants={row}
                  className="flex items-baseline justify-between"
                >
                  <p className="text-sm text-zinc-200">{l.name}</p>
                  <p className="text-xs text-zinc-500">{l.level}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
