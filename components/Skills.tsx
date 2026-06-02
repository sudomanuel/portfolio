"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

interface Skill {
  name: string;
  level: number;
  note?: string;
}

interface Group {
  label: string;
  color: string;
  skills: Skill[];
}

const GROUPS: Group[] = [
  {
    label: "Data & Engineering",
    color: "from-indigo-500 to-violet-500",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL / DuckDB", level: 75 },
      { name: "Power BI", level: 85 },
      { name: "Tableau", level: 70 },
      { name: "ETL Design", level: 80 },
      { name: "AppSheet", level: 75 },
    ],
  },
  {
    label: "Tools & Platforms",
    color: "from-violet-500 to-purple-500",
    skills: [
      { name: "Excel / Office Suite", level: 92 },
      { name: "Git", level: 75 },
      { name: "SAP", level: 65 },
      { name: "Power BI Service", level: 75 },
    ],
  },
  {
    label: "Languages",
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Spanish", level: 100, note: "Native" },
      { name: "English", level: 90, note: "C1 · IELTS" },
      { name: "German", level: 20, note: "A1 · In progress" },
    ],
  },
];

function SkillBar({ skill, color, index }: { skill: Skill; color: string; index: number }) {
  return (
    <li>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-zinc-300">{skill.name}</span>
        {skill.note && (
          <span className="text-xs text-zinc-500">{skill.note}</span>
        )}
      </div>
      <div className="h-1.5 rounded-full bg-zinc-800 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.9,
            delay: index * 0.07,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </li>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="Skills" title="What I work with" />

        <div className="grid md:grid-cols-3 gap-5">
          {GROUPS.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: gi * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#111116] border border-white/[0.07] rounded-2xl p-6"
            >
              <h3 className="font-display font-semibold text-zinc-400 text-xs uppercase tracking-[0.15em] mb-6">
                {group.label}
              </h3>
              <ul className="space-y-5">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={si}
                    skill={skill}
                    color={group.color}
                    index={si}
                  />
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
