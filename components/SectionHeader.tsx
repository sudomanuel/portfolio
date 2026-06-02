"use client";

import { motion } from "framer-motion";

interface Props {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ label, title, description }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12"
    >
      <p className="text-indigo-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
        {label}
      </p>
      <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
