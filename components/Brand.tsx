"use client";

import Link from "next/link";

interface Props {
  variant?: "lg" | "sm";
  href?: string;
}

/**
 * Brand wordmark in Press Start 2P (8-bit arcade). The full name on the
 * home; compact "MPJ" initials on subpages, since the pixel font is wide.
 */
export default function Brand({ variant = "lg", href }: Props) {
  const label = variant === "lg" ? "Manuel Pusma Jurado" : "MPJ";
  const cls =
    variant === "lg"
      ? "font-display text-white text-[17px] sm:text-[21px] leading-[1.7]"
      : "font-display text-zinc-300 text-xs leading-none";

  if (href) {
    return (
      <Link href={href} aria-label="Home" className="group inline-block">
        <span
          className={`${cls} transition-colors duration-200 group-hover:text-white`}
        >
          {label}
        </span>
      </Link>
    );
  }

  return <span className={cls}>{label}</span>;
}
