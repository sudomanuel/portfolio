"use client";

import { useState } from "react";

interface Props {
  /** Image URL (Simple Icons, or a /logos/ path). Omit to show a monogram. */
  src?: string;
  /** Used for alt text and to derive a monogram when there is no image. */
  label: string;
  /** Explicit monogram text (e.g. "UNI"). Falls back to initials of label. */
  mono?: string;
  size?: number;
}

function initials(label: string) {
  const words = label
    .replace(/[^A-Za-z0-9 ]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 0) return "·";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

/**
 * Uniform logo chip. Fixed size keeps everything perfectly aligned.
 * Shows the real logo (grayscale → color on hover) when available, and
 * gracefully falls back to a clean initials monogram if it is missing
 * or fails to load — so a logo never renders broken or misplaced.
 *
 * Wrap the surrounding row in a `group` class to get the hover reveal.
 */
export default function Logo({ src, label, mono, size = 38 }: Props) {
  const [failed, setFailed] = useState(false);
  const showImg = !!src && !failed;
  const inner = Math.round(size * 0.56);

  return (
    <span
      style={{ width: size, height: size }}
      className="inline-flex items-center justify-center shrink-0 rounded-lg border border-white/10 bg-white/[0.02] overflow-hidden transition-colors duration-300 group-hover:border-white/25"
    >
      {showImg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={label}
          onError={() => setFailed(true)}
          style={{ width: inner, height: inner }}
          className="object-contain grayscale opacity-70 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
        />
      ) : (
        <span className="font-mono text-[10px] font-medium tracking-tight text-zinc-500 transition-colors duration-300 group-hover:text-zinc-200">
          {mono ?? initials(label)}
        </span>
      )}
    </span>
  );
}
