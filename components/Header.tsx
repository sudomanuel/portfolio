"use client";

import { motion } from "framer-motion";
import Brand from "./Brand";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16"
    >
      <Brand variant="sm" href="/" />
    </motion.header>
  );
}
