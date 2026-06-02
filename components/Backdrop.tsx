"use client";

import { motion } from "framer-motion";

/**
 * Subtle living background — two faint glows drifting slowly on the black
 * canvas. Barely perceptible, just enough to give the page some life
 * without breaking the minimalist feel.
 */
export default function Backdrop() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <motion.div
        className="absolute -top-[15%] left-1/2 h-[55vh] w-[55vh] rounded-full bg-white/[0.025] blur-[130px]"
        animate={{ x: ["-35%", "5%", "-35%"], y: ["0%", "18%", "0%"] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-[15%] -right-[10%] h-[48vh] w-[48vh] rounded-full bg-white/[0.018] blur-[130px]"
        animate={{ x: ["0%", "-18%", "0%"], y: ["0%", "-12%", "0%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
