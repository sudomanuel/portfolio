"use client";

import { motion, type Variants } from "framer-motion";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import { logos } from "@/lib/logos";

interface Item {
  school: string;
  degree: string;
  note?: string;
  period: string;
  location: string;
  mono?: string;
  logo?: string;
}

const DEGREES: Item[] = [
  {
    school: "National University of Engineering (UNI)",
    degree: "B.Sc. Electronic Engineering — Final Year",
    note: "Top 10%",
    period: "2021 – Present",
    location: "Lima, Peru",
    logo: logos.uni,
    mono: "UNI",
  },
  {
    school: "Hochschule Furtwangen University (HFU)",
    degree: "Exchange Semester (WS 2025/26)",
    period: "Sep 2025 – Mar 2026",
    location: "Villingen-Schwenningen, Germany",
    logo: logos.hfu,
    mono: "HFU",
  },
];

const CERTS: Item[] = [
  {
    school: "Data Mining Consulting",
    degree: "Data Analytics Specialization Program",
    period: "Mar 2024 – Sep 2024",
    location: "Remote",
    mono: "DM",
  },
  {
    school: "ICPNA",
    degree: "Complete English Program — CEFR C1",
    period: "2021 – 2022",
    location: "Lima, Peru",
    logo: logos.icpna,
    mono: "IC",
  },
];

const LANGUAGES = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "C1 Advanced · IELTS certified" },
  { name: "German", level: "A1 Beginner · In progress" },
];

const stagger: Variants = { animate: { transition: { staggerChildren: 0.08 } } };
const rowV: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

function EduItem({ item }: { item: Item }) {
  return (
    <motion.div variants={rowV} className="group py-6 first:pt-0">
      <div className="flex items-start gap-4">
        <Logo src={item.logo} label={item.school} mono={item.mono} size={40} />
        <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
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
          <div className="sm:text-right shrink-0">
            <p className="text-xs text-zinc-600">{item.period}</p>
            <p className="text-xs text-zinc-700 mt-0.5">{item.location}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function EducationPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <Header />

      <h1 className="text-xl text-zinc-500 mb-14">education</h1>

      <div className="mb-12">
        <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-600 mb-2">
          degrees
        </p>
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-40px" }}
          className="divide-y divide-zinc-900"
        >
          {DEGREES.map((d, i) => (
            <EduItem key={i} item={d} />
          ))}
        </motion.div>
      </div>

      <div className="border-t border-zinc-900 mb-12" />

      <div className="mb-12">
        <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-600 mb-2">
          certifications &amp; programs
        </p>
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-40px" }}
          className="divide-y divide-zinc-900"
        >
          {CERTS.map((c, i) => (
            <EduItem key={i} item={c} />
          ))}
        </motion.div>
      </div>

      <div className="border-t border-zinc-900 mb-12" />

      <div>
        <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-600 mb-6">
          languages
        </p>
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-40px" }}
          className="space-y-4"
        >
          {LANGUAGES.map((l, i) => (
            <motion.div
              key={i}
              variants={rowV}
              className="flex items-baseline justify-between"
            >
              <p className="text-sm text-zinc-200">{l.name}</p>
              <p className="text-xs text-zinc-500">{l.level}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
