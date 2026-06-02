"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const LINKS = [
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Awards", href: "/awards" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const handle = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastY.current && y > 80);
      lastY.current = y;
    };
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.header
          key="nav"
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
            scrolled ? "bg-black/70 backdrop-blur-md border-b border-white/[0.06]" : ""
          }`}
        >
          <nav className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
            {isHome ? (
              <Link
                href="/"
                className="text-sm font-medium text-[#ededed] hover:text-white transition-colors"
              >
                mpj.
              </Link>
            ) : (
              <Link
                href="/"
                className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-[#ededed] transition-colors"
              >
                <ArrowLeft size={13} />
                Manuel Pusma Jurado
              </Link>
            )}

            <ul className="flex items-center gap-6">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`text-sm transition-colors ${
                      pathname === l.href
                        ? "text-[#ededed]"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
