"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, ArrowDown } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-16 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-600/7 rounded-full blur-[140px]" />
        <div className="absolute top-2/3 right-10 w-[350px] h-[350px] bg-violet-600/6 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-900/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-5xl mx-auto w-full py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Availability badge */}
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              Open to Working Student · Internship · from Nov 2025
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="font-display font-extrabold leading-[0.92] tracking-tight text-white mb-6"
            style={{ fontSize: "clamp(3.2rem, 9vw, 6.5rem)" }}
          >
            Manuel
            <br />
            <span className="bg-gradient-to-br from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              Pusma Jurado
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="font-display text-xl md:text-2xl text-zinc-400 font-medium mb-6"
          >
            Electronic Engineer &middot; Data Builder &middot;{" "}
            <span className="text-white">Exchange @ HFU Germany</span>
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={fadeUp}
            className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl"
          >
            I fix real operational pain by turning messy field data into tools
            people actually use. One hour I&apos;m building a lean ETL in
            Python/DuckDB, the next I&apos;m aligning with technicians and
            managers. Final-year student at{" "}
            <span className="text-white font-medium">UNI Lima</span>, currently
            on exchange at{" "}
            <span className="text-white font-medium">
              Hochschule Furtwangen
            </span>
            .
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-12">
            <a
              href="#experience"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25 active:translate-y-0"
            >
              See my work
            </a>
            <a
              href="mailto:mpu55262@stud.hs-furtwangen.de"
              className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Mail size={15} />
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/manuel-pusma-jurado-29876b265"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 text-zinc-500 text-sm"
          >
            <MapPin size={13} />
            <span>Villingen-Schwenningen · Baden-Württemberg, Germany</span>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-10 left-0 flex items-center gap-2 text-zinc-600 text-xs select-none"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.7, ease: "easeInOut" }}
          >
            <ArrowDown size={13} />
          </motion.div>
          scroll
        </motion.div>
      </div>
    </section>
  );
}
