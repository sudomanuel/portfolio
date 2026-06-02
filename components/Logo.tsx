"use client";

import { useState } from "react";

interface Props {
  src?: string;
  alt: string;
  size?: number;
  className?: string;
}

/**
 * Small inline logo. Renders monochrome (grayscale) at rest and reveals its
 * real color on hover. Hides itself silently if the image fails to load,
 * so a missing logo never shows a broken-image icon.
 */
export default function Logo({ src, alt, size = 18, className = "" }: Props) {
  const [ok, setOk] = useState(true);

  if (!src || !ok) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setOk(false)}
      style={{ width: size, height: size }}
      className={`inline-block object-contain shrink-0 grayscale opacity-50 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100 ${className}`}
    />
  );
}
