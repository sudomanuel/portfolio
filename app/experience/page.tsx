"use client";

import { motion, type Variants } from "framer-motion";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import { tech } from "@/lib/logos";

interface Entry {
  company: string;
  role: string;
  period: string;
  location: string;
  award?: string;
  bullets: string[];
  stack?: string[];
  logo?: string;
  mono?: string;
}

const PROFESSIONAL: Entry[] = [
  {
    company: "Arca Continental Lindley — Coca-Cola Peru",
    role: "Intern — Cooling Equipment / Logistics (Ops)",
    period: "Oct 2024 – Oct 2025",
    location: "Lima, Peru · On Site",
    logo: tech("cocacola"),
    mono: "CC",
    bullets: [
      "Reduced field-to-dashboard latency from 2–3 days to real time via a lean ETL + AppSheet capture; enabled automated reporting in Power BI.",
      "Increased data completeness & consistency by integrating geotagged evidence and lightweight validation rules across systems.",
      "Built FastOps (in-house data backbone) and led a rapid live cutover from BASIS to SAP with minimal disruption; stabilized Cooling Equipment data flows.",
      "PDD for SAP: 13 CE processes documented + 70+ improvement proposals across market, warehouse, workshop, and service.",
    ],
    stack: ["Python", "SQL/DuckDB", "Power BI", "AppSheet", "Git", "Excel"],
  },
];

const ACADEMIC: Entry[] = [
  {
    company: "MLC FIEE — UNI",
    role: "Programmer & Co-founder — UNI-GO (Smart Mobility)",
    period: "Dec 2023 – Oct 2024",
    location: "Lima, Peru",
    award: "1st Place · ABET 2024 Fair",
    mono: "UNI",
    bullets: [
      "Launched a prototype providing real-time shuttle locations and departure recommendations from live traffic.",
    ],
  },
  {
    company: "LUPIC Project — UNI × SeoulTech",
    role: "Volunteer Educator",
    period: "Sep – Oct 2024",
    location: "Lima & Callao, Peru",
    mono: "ST",
    bullets: [
      "Delivered cybersecurity & digital literacy workshops to 1,500+ public-school students.",
      "Co-created culturally adapted materials with SeoulTech; scaled across multiple sessions.",
    ],
  },
  {
    company: "Devtech UNI",
    role: "Affiliate Member",
    period: "Mar 2023 – Present",
    location: "Lima, Peru",
    mono: "UNI",
    bullets: [
      "Coordinated international project with SeoulTech for an autonomous strawberry-picking prototype; milestones delivered on time.",
      "Led programming & design for national robotics (sumo & soccer) — Top-7 nationally in 2024.",
    ],
  },
  {
    company: "IEEE CAS UNI",
    role: "Director of Public Relations",
    period: "Dec 2022 – Nov 2023",
    location: "Lima, Peru",
    logo: tech("ieee"),
    mono: "IE",
    bullets: [
      "Secured partnerships and industry guest speakers; built an internal knowledge base for members.",
      "Negotiated discounts for certifications and workshops, boosting participation and engagement.",
    ],
  },
];

const stagger: Variants = { animate: { transition: { staggerChildren: 0.08 } } };
const rowV: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function Item({ entry }: { entry: Entry }) {
  return (
    <motion.div variants={rowV} className="group py-8 first:pt-0">
      <div className="flex items-start gap-4 mb-3">
        <Logo src={entry.logo} label={entry.company} mono={entry.mono} size={40} />
        <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
          <div>
            <p className="text-sm font-medium text-zinc-100">{entry.company}</p>
            <p className="text-sm text-zinc-500 mt-0.5">{entry.role}</p>
            {entry.award && (
              <p className="text-xs text-amber-500/80 mt-1">{entry.award}</p>
            )}
          </div>
          <div className="sm:text-right shrink-0">
            <p className="text-xs text-zinc-600">{entry.period}</p>
            <p className="text-xs text-zinc-700 mt-0.5">{entry.location}</p>
          </div>
        </div>
      </div>

      <ul className="space-y-2 mb-4 pl-[56px]">
        {entry.bullets.map((b, i) => (
          <li
            key={i}
            className="flex gap-3 text-sm text-zinc-400 leading-relaxed"
          >
            <span className="shrink-0 mt-[9px] w-[3px] h-[3px] rounded-full bg-zinc-700" />
            {b}
          </li>
        ))}
      </ul>

      {entry.stack && entry.stack.length > 0 && (
        <p className="text-xs text-zinc-600 pl-[56px]">
          {entry.stack.join(" · ")}
        </p>
      )}
    </motion.div>
  );
}

export default function ExperiencePage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <Header />

      <h1 className="text-xl text-zinc-500 mb-14">experience</h1>

      <div className="mb-14">
        <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-600 mb-6">
          professional
        </p>
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-40px" }}
        >
          {PROFESSIONAL.map((e, i) => (
            <Item key={i} entry={e} />
          ))}
        </motion.div>
      </div>

      <div className="border-t border-zinc-900 mb-14" />

      <div>
        <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-600 mb-2">
          academic &amp; extracurricular
        </p>
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-40px" }}
          className="divide-y divide-zinc-900"
        >
          {ACADEMIC.map((e, i) => (
            <Item key={i} entry={e} />
          ))}
        </motion.div>
      </div>
    </main>
  );
}
