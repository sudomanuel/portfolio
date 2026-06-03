"use client";

import Link from "next/link";

const NAME = "Manuel Pusma Jurado";

interface Props {
  variant?: "lg" | "sm";
  href?: string;
}

/**
 * Wordmark brand — the full name. Large & centered on the home,
 * small (linking home) on subpages. Monochrome.
 */
export default function Brand({ variant = "lg", href }: Props) {
  const cls =
    variant === "lg"
      ? "font-display text-white text-[42px] sm:text-[54px] leading-[1.04] tracking-[-0.01em]"
      : "font-display text-zinc-300 text-[18px]";

  if (href) {
    return (
      <Link href={href} aria-label="Home" className="group inline-block">
        <span className={`${cls} transition-colors duration-200 group-hover:text-white`}>
          {NAME}
        </span>
      </Link>
    );
  }

  return <span className={cls}>{NAME}</span>;
}
