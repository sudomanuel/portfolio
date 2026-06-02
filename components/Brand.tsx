"use client";

import Link from "next/link";

interface Props {
  size?: number;
  href?: string;
}

/**
 * Minimal "MP" monogram — the brand mark. Monochrome, bordered chip.
 * Used large & centered on the home, and small (linking home) on subpages.
 */
export default function Brand({ size = 40, href }: Props) {
  const chip = (
    <span
      style={{ width: size, height: size }}
      className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.03]"
    >
      <span
        style={{ fontSize: Math.round(size * 0.33) }}
        className="font-mono font-medium tracking-tight text-zinc-100 leading-none"
      >
        MP
      </span>
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        aria-label="Home"
        className="inline-block transition-transform duration-300 hover:scale-[1.06]"
      >
        {chip}
      </Link>
    );
  }

  return chip;
}
