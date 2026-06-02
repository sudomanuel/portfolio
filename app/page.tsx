"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import Brand from "@/components/Brand";
import LiveClock from "@/components/LiveClock";

const MENU = [
  { label: "about", href: "/about" },
  { label: "experience", href: "/experience" },
  { label: "projects", href: "/projects" },
  { label: "education", href: "/education" },
  { label: "awards", href: "/awards" },
  { label: "contact", href: "/contact" },
];

const blurUp: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const menuList: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.5 } },
};

const menuItem: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="max-w-md mx-auto w-full px-6 flex-1 flex flex-col pt-[17vh] pb-12">
        {/* Brand + identity */}
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center mb-20"
        >
          <motion.div variants={blurUp}>
            <Brand variant="lg" />
          </motion.div>

          <motion.p variants={blurUp} className="mt-4 text-xs text-zinc-500">
            Electronic Engineer · Data Builder
          </motion.p>

          <motion.p variants={blurUp} className="mt-2 text-[11px] text-zinc-600">
            <LiveClock />
          </motion.p>
        </motion.div>

        {/* Menu */}
        <motion.nav
          variants={menuList}
          initial="hidden"
          animate="show"
          className="space-y-5"
        >
          {MENU.map((m) => (
            <motion.div key={m.href} variants={menuItem}>
              <Link
                href={m.href}
                className="group relative inline-block text-sm text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {m.label}
                <span className="absolute left-0 -bottom-1 h-px w-full origin-left scale-x-0 bg-white/50 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            </motion.div>
          ))}

          <motion.p variants={menuItem} className="text-sm text-zinc-600 pt-1">
            available — nov 2025
          </motion.p>
        </motion.nav>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex items-center gap-5 mt-16"
        >
          {[
            { icon: Github, href: "https://github.com/sudomanuel", label: "GitHub" },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/manuel-pusma-jurado-29876b265",
              label: "LinkedIn",
            },
            {
              icon: Mail,
              href: "mailto:mpu55262@stud.hs-furtwangen.de",
              label: "Email",
            },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="text-zinc-600 hover:text-zinc-200 transition-colors"
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
