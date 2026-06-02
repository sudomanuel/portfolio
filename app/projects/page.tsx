"use client";

import { motion, type Variants } from "framer-motion";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import { tech, logos } from "@/lib/logos";

interface Project {
  title: string;
  blurb: string;
  period: string;
  award?: string;
  tags: string[];
  logo?: string;
  mono?: string;
}

const PROJECTS: Project[] = [
  {
    title: "FastOps",
    blurb:
      "In-house operational data backbone at Arca Continental Lindley. Cut field-to-dashboard latency from 2–3 days to real time, and led the BASIS → SAP live cutover with minimal disruption.",
    period: "2024 – 2025",
    tags: ["Python", "DuckDB", "AppSheet", "Power BI", "SAP"],
    logo: tech("cocacola"),
    mono: "CC",
  },
  {
    title: "UNI-GO — Smart Mobility",
    blurb:
      "Co-founded a prototype delivering real-time campus shuttle locations and departure recommendations computed from live traffic data.",
    period: "2023 – 2024",
    award: "1st Place · ABET 2024",
    tags: ["Python", "Real-time", "Mobility"],
    logo: logos.uni,
    mono: "UNI",
  },
  {
    title: "Autonomous Strawberry-Picking Robot",
    blurb:
      "International R&D collaboration with SeoulTech to prototype an autonomous harvesting robot. Coordinated the team and delivered every milestone on time.",
    period: "2023 – 2024",
    tags: ["Robotics", "Computer Vision", "Embedded"],
    logo: logos.seoultech,
    mono: "ST",
  },
  {
    title: "Combat & Soccer Robotics",
    blurb:
      "Led programming and mechanical design for national sumo and soccer robotics competitions, placing Top-7 nationally.",
    period: "2024",
    tags: ["Robotics", "Control", "Embedded"],
    logo: logos.uni,
    mono: "UNI",
  },
  {
    title: "Laboratech Datathon",
    blurb:
      "Built and presented an end-to-end analytics solution under time pressure at the national datathon organized by the Ministry of Labor.",
    period: "2024",
    award: "2nd Place · National",
    tags: ["Python", "Data Analysis"],
    mono: "PE",
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

function Card({ project }: { project: Project }) {
  return (
    <motion.article variants={rowV} className="group py-8 first:pt-0">
      <div className="flex items-start gap-4 mb-3">
        <Logo src={project.logo} label={project.title} mono={project.mono} size={42} />
        <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
          <div>
            <h2 className="text-sm font-medium text-zinc-100">{project.title}</h2>
            {project.award && (
              <p className="text-xs text-amber-500/80 mt-1">{project.award}</p>
            )}
          </div>
          <p className="text-xs text-zinc-600 shrink-0">{project.period}</p>
        </div>
      </div>

      <p className="text-sm text-zinc-400 leading-relaxed mb-4 pl-[58px]">
        {project.blurb}
      </p>

      <p className="text-xs text-zinc-600 pl-[58px]">{project.tags.join(" · ")}</p>
    </motion.article>
  );
}

export default function ProjectsPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <Header />

      <h1 className="text-xl text-zinc-500 mb-4">projects</h1>
      <p className="text-sm text-zinc-400 leading-relaxed mb-12 max-w-md">
        Selected work — from operational data systems to robotics and
        data competitions.
      </p>

      <motion.div
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-40px" }}
        className="divide-y divide-zinc-900"
      >
        {PROJECTS.map((p, i) => (
          <Card key={i} project={p} />
        ))}
      </motion.div>
    </main>
  );
}
