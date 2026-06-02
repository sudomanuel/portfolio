"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Copy, Check, Clock } from "lucide-react";
import SectionHeader from "./SectionHeader";

const EMAIL = "mpu55262@stud.hs-furtwangen.de";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const cards = [
    {
      id: "email",
      icon: copied ? (
        <Check size={18} className="text-emerald-400" />
      ) : (
        <Mail size={18} className="text-indigo-400" />
      ),
      iconBg: "bg-indigo-500/10 border-indigo-500/20",
      label: "Email",
      value: EMAIL,
      sub: copied ? "Copied to clipboard!" : "Click to copy",
      subColor: copied ? "text-emerald-400" : "text-indigo-400",
      hoverBorder: "hover:border-indigo-500/35",
      onClick: copyEmail,
      as: "button" as const,
    },
    {
      id: "linkedin",
      icon: <Linkedin size={18} className="text-blue-400" />,
      iconBg: "bg-blue-500/10 border-blue-500/20",
      label: "LinkedIn",
      value: "Manuel Pusma Jurado",
      sub: "View profile →",
      subColor: "text-blue-400",
      hoverBorder: "hover:border-blue-500/35",
      href: "https://www.linkedin.com/in/manuel-pusma-jurado-29876b265",
      as: "a" as const,
    },
    {
      id: "location",
      icon: <MapPin size={18} className="text-violet-400" />,
      iconBg: "bg-violet-500/10 border-violet-500/20",
      label: "Location",
      value: "Villingen-Schwenningen",
      sub: "Baden-Württemberg, Germany",
      subColor: "text-zinc-500",
      hoverBorder: "hover:border-white/15",
      as: "div" as const,
    },
    {
      id: "availability",
      icon: <Clock size={18} className="text-emerald-400" />,
      iconBg: "bg-emerald-500/10 border-emerald-500/20",
      label: "Availability",
      value: "From November 2025",
      sub: "Up to 20 h/week (term) · Full-time (breaks)",
      subColor: "text-zinc-500",
      hoverBorder: "hover:border-white/15",
      as: "div" as const,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Contact"
          title="Let's connect"
          description="Looking for a working student position or internship from November 2025."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, i) => {
            const base =
              `flex flex-col items-start gap-4 p-6 rounded-2xl bg-[#111116] border border-white/[0.07] transition-all duration-200 text-left ${card.hoverBorder}`;

            const content = (
              <>
                <div
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center ${card.iconBg}`}
                >
                  {card.icon}
                </div>
                <div className="min-w-0 w-full">
                  <p className="text-zinc-400 text-xs font-medium mb-0.5">
                    {card.label}
                  </p>
                  <p className="text-white text-sm font-semibold break-all leading-snug">
                    {card.value}
                  </p>
                  <p className={`text-xs mt-1 ${card.subColor}`}>{card.sub}</p>
                </div>
              </>
            );

            const motionProps = {
              initial: { opacity: 0, y: 22 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
              whileHover: { y: -3, transition: { duration: 0.18 } },
            };

            if (card.as === "button") {
              return (
                <motion.button
                  key={card.id}
                  {...motionProps}
                  onClick={card.onClick}
                  className={`${base} cursor-pointer`}
                >
                  {content}
                </motion.button>
              );
            }

            if (card.as === "a") {
              return (
                <motion.a
                  key={card.id}
                  {...motionProps}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${base} cursor-pointer`}
                >
                  {content}
                </motion.a>
              );
            }

            return (
              <motion.div key={card.id} {...motionProps} className={base}>
                {content}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
