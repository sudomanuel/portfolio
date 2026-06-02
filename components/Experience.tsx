"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";
import SectionHeader from "./SectionHeader";

interface Entry {
  company: string;
  role: string;
  period: string;
  location: string;
  award?: string;
  bullets: string[];
  stack: string[];
}

const PROFESSIONAL: Entry[] = [
  {
    company: "Arca Continental Lindley — Coca-Cola Peru",
    role: "Intern — Cooling Equipment / Logistics (Ops)",
    period: "Oct 2024 – Oct 2025",
    location: "Lima, Peru · On Site",
    bullets: [
      "Reduced field-to-dashboard latency from 2–3 days to real time via a lean ETL + AppSheet capture; enabled automated reporting in Power BI.",
      "Increased data completeness & consistency by integrating geotagged evidence and lightweight validation rules across systems.",
      "Built FastOps (in-house data backbone) and led a rapid live cutover from BASIS to SAP with minimal disruption; stabilized Cooling Equipment data flows.",
      "PDD for SAP: 13 CE processes documented + 70+ improvement proposals (market / warehouse / workshop / service).",
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
    bullets: [
      "Launched a prototype providing real-time shuttle locations and departure recommendations from live traffic.",
    ],
    stack: [],
  },
  {
    company: "LUPIC Project — UNI × SeoulTech",
    role: "Volunteer Educator",
    period: "Sep – Oct 2024",
    location: "Lima & Callao, Peru",
    bullets: [
      "Delivered cybersecurity & digital literacy workshops to 1,500+ public-school students.",
      "Co-created culturally adapted materials with SeoulTech; scalable content used across multiple sessions.",
    ],
    stack: [],
  },
  {
    company: "Devtech UNI",
    role: "Affiliate Member",
    period: "Mar 2023 – Present",
    location: "Lima, Peru",
    bullets: [
      "Coordinated international project with SeoulTech for an autonomous strawberry-picking prototype; milestones delivered on time.",
      "Led programming/design for national robotics (sumo & soccer) — Top-7 in 2024.",
    ],
    stack: [],
  },
  {
    company: "IEEE CAS UNI",
    role: "Director of Public Relations",
    period: "Dec 2022 – Nov 2023",
    location: "Lima, Peru",
    bullets: [
      "Secured partnerships and industry guest speakers; built an internal knowledge base for members.",
      "Negotiated discounts for certifications/workshops, boosting participation and engagement.",
    ],
    stack: [],
  },
];

const TAG_STYLE: Record<string, string> = {
  Python: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  "SQL/DuckDB": "bg-amber-500/10 text-amber-300 border-amber-500/20",
  "Power BI": "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
  AppSheet: "bg-green-500/10 text-green-300 border-green-500/20",
  Git: "bg-orange-500/10 text-orange-300 border-orange-500/20",
  Excel: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
};

function Card({ data, index }: { data: Entry; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="bg-[#111116] rounded-2xl border border-white/[0.07] p-6 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/5 transition-colors duration-300"
    >
      <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
        <div>
          <h3 className="font-display font-bold text-white text-[15px]">
            {data.company}
          </h3>
          <p className="text-indigo-400 text-sm font-medium mt-0.5">{data.role}</p>
        </div>
        {data.award && (
          <span className="inline-flex shrink-0 items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <Trophy size={10} />
            {data.award}
          </span>
        )}
      </div>

      <p className="text-zinc-500 text-xs mb-4">
        {data.period} &middot; {data.location}
      </p>

      <ul className="space-y-2.5 mb-4">
        {data.bullets.map((b, i) => (
          <li key={i} className="flex gap-2.5 text-zinc-400 text-sm leading-relaxed">
            <span className="mt-[7px] shrink-0 w-1 h-1 rounded-full bg-indigo-500" />
            {b}
          </li>
        ))}
      </ul>

      {data.stack.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {data.stack.map((s) => (
            <span
              key={s}
              className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                TAG_STYLE[s] ?? "bg-zinc-800/60 text-zinc-400 border-zinc-700/60"
              }`}
            >
              {s}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Experience"
          title="Where I've worked"
          description="Professional and academic involvement across operations, data, and engineering."
        />

        {/* Professional */}
        <div className="mb-14">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-[0.18em] mb-5"
          >
            <Briefcase size={13} className="text-indigo-400" />
            Professional
          </motion.h3>
          <div className="space-y-4">
            {PROFESSIONAL.map((e, i) => (
              <Card key={i} data={e} index={i} />
            ))}
          </div>
        </div>

        {/* Academic */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-[0.18em] mb-5"
          >
            <GraduationCap size={13} className="text-indigo-400" />
            Academic &amp; Extracurricular
          </motion.h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {ACADEMIC.map((e, i) => (
              <Card key={i} data={e} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
