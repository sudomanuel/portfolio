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
      ? "font-sans font-semibold tracking-tight text-white text-[30px] sm:text-[36px] leading-[1.05]"
      : "font-sans font-medium tracking-tight text-zinc-300 text-sm";

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
