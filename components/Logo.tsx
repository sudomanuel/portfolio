"use client";

import { useState } from "react";

interface Props {
  /** Image URL (Simple Icons, Wikimedia, or a /logos/ path). */
  src?: string;
  /** Alt text + source for the monogram fallback. */
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
 * Uniform logo tile. Light tile keeps any logo (colored, with or without a
 * background) legible on the dark page, rendered in grayscale to stay
 * monochrome. Fixed size means everything lines up. Falls back to a clean
 * initials monogram if there is no image or it fails to load.
 *
 * Wrap the surrounding row in a `group` class for the hover lift.
 */
export default function Logo({ src, label, mono, size = 40 }: Props) {
  const [failed, setFailed] = useState(false);
  const showImg = !!src && !failed;

  return (
    <span
      style={{ width: size, height: size }}
      className="inline-flex items-center justify-center shrink-0 rounded-lg bg-zinc-200 overflow-hidden transition-colors duration-300 group-hover:bg-white"
    >
      {showImg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={label}
          onError={() => setFailed(true)}
          style={{
            width: size,
            height: size,
            padding: Math.max(4, Math.round(size * 0.17)),
          }}
          className="object-contain grayscale"
        />
      ) : (
        <span className="font-mono text-[11px] font-semibold tracking-tight text-zinc-500">
          {mono ?? initials(label)}
        </span>
      )}
    </span>
  );
}
