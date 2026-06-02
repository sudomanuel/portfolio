"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import { site } from "@/lib/logos";

interface Entry {
  company: string;
  role: string;
  period: string;
  location: string;
  award?: string;
  bullets: string[];
  stack?: string[];
  logo?: string;
}

const PROFESSIONAL: Entry[] = [
  {
    company: "Arca Continental Lindley — Coca-Cola Peru",
    role: "Intern — Cooling Equipment / Logistics (Ops)",
    period: "Oct 2024 – Oct 2025",
    location: "Lima, Peru · On Site",
    logo: site("coca-cola.com"),
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
    logo: site("uni.edu.pe"),
    bullets: [
      "Launched a prototype providing real-time shuttle locations and departure recommendations from live traffic.",
    ],
  },
  {
    company: "LUPIC Project — UNI × SeoulTech",
    role: "Volunteer Educator",
    period: "Sep – Oct 2024",
    location: "Lima & Callao, Peru",
    logo: site("seoultech.ac.kr"),
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
    logo: site("uni.edu.pe"),
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
    logo: site("ieee.org"),
    bullets: [
      "Secured partnerships and industry guest speakers; built an internal knowledge base for members.",
      "Negotiated discounts for certifications and workshops, boosting participation and engagement.",
    ],
  },
];

const stagger = { animate: { transition: { staggerChildren: 0.07 } } };
const rowV = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

function Item({ entry }: { entry: Entry }) {
  return (
    <motion.div variants={rowV} className="group py-8 first:pt-0">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
        <div className="flex gap-3">
          <span className="mt-0.5">
            <Logo src={entry.logo} alt={entry.company} size={22} />
          </span>
          <div>
            <p className="text-sm font-medium text-zinc-100">{entry.company}</p>
            <p className="text-sm text-zinc-500 mt-0.5">{entry.role}</p>
            {entry.award && (
              <p className="text-xs text-amber-500/80 mt-1">{entry.award}</p>
            )}
          </div>
        </div>
        <div className="text-left sm:text-right shrink-0 pl-[34px] sm:pl-0">
          <p className="text-xs text-zinc-600">{entry.period}</p>
          <p className="text-xs text-zinc-700 mt-0.5">{entry.location}</p>
        </div>
      </div>

      <ul className="space-y-2 mb-4 pl-[34px]">
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
        <p className="text-xs text-zinc-600 pl-[34px]">
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
        <motion.div variants={stagger} initial="initial" animate="animate">
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
          animate="animate"
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
