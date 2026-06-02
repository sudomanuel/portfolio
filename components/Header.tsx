"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16"
    >
      <Link
        href="/"
        className="inline-block bg-red-600 px-3 py-1 hover:bg-red-500 transition-colors"
      >
        <span className="font-sans font-bold italic text-base text-white tracking-tight">
          Manuel
        </span>
      </Link>
    </motion.header>
  );
}
