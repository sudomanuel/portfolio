"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import { tech, site } from "@/lib/logos";

const CURRENTLY = [
  {
    text: "Intern @ Arca Continental Lindley — Coca-Cola Peru",
    sub: "ETL pipelines & operational dashboards",
    logo: site("coca-cola.com"),
  },
  {
    text: "Exchange Semester @ HFU Furtwangen",
    sub: "Electronic Engineering · Baden-Württemberg, Germany",
    logo: site("hs-furtwangen.de"),
  },
];

const STACK = [
  { name: "Python", level: "advanced", logo: tech("python") },
  { name: "DuckDB", level: "intermediate", logo: tech("duckdb") },
  { name: "SQL", level: "intermediate", logo: undefined },
  { name: "Power BI", level: "advanced", logo: tech("powerbi") },
  { name: "Tableau", level: "advanced", logo: tech("tableau") },
  { name: "Excel", level: "advanced", logo: tech("microsoftexcel") },
  { name: "AppSheet", level: "intermediate", logo: site("about.appsheet.com") },
  { name: "Git", level: "intermediate", logo: tech("git") },
  { name: "SAP", level: "beginner", logo: tech("sap") },
];

const stagger = { animate: { transition: { staggerChildren: 0.06 } } };
const row = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <Header />

      <h1 className="text-xl text-zinc-500 mb-10">about</h1>

      <div className="space-y-5 text-sm text-zinc-300 leading-[1.85] mb-16">
        <p>
          I fix real operational pain by turning messy field data into tools
          people actually use. One hour I&apos;m building a lean ETL in
          Python/DuckDB, the next I&apos;m aligning with technicians and
          managers to make sure the solution fits how they work.
        </p>
        <p>
          I&apos;m a final-year{" "}
          <span className="text-white">Electronic Engineering</span> student
          from <span className="text-white">UNI Lima</span>, currently on
          exchange at{" "}
          <span className="text-white">Hochschule Furtwangen</span> in
          Baden-Württemberg. Living and studying in Germany is teaching me to be
          clearer, faster, and more pragmatic.
        </p>
        <p>
          I&apos;m looking for a place where I can contribute that energy, learn
          from feedback, and help the team ship things that make everyday
          operations smoother.
        </p>
      </div>

      {/* Currently */}
      <section className="mb-16">
        <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-600 mb-6">
          currently
        </p>
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="space-y-5"
        >
          {CURRENTLY.map((c, i) => (
            <motion.div key={i} variants={row} className="group flex gap-3.5">
              <span className="mt-0.5">
                <Logo src={c.logo} alt={c.text} size={20} />
              </span>
              <div>
                <p className="text-sm text-zinc-200">{c.text}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{c.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stack */}
      <section>
        <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-600 mb-6">
          stack
        </p>
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4"
        >
          {STACK.map((s, i) => (
            <motion.div
              key={i}
              variants={row}
              className="group flex items-center gap-2.5"
            >
              <Logo src={s.logo} alt={s.name} size={18} />
              <div className="min-w-0">
                <p className="text-sm text-zinc-300 leading-none">{s.name}</p>
                <p className="text-[10px] text-zinc-600 mt-1">{s.level}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
