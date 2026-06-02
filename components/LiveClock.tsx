"use client";

import { useState, useEffect } from "react";

const fmt = new Intl.DateTimeFormat("en-US", {
  timeZone: "Europe/Berlin",
  month: "2-digit",
  day: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});

function format(d: Date) {
  // "06/02/2026, 06:47 AM" -> "06/02/2026 06:47am"
  return fmt
    .format(d)
    .replace(",", "")
    .replace(" AM", "am")
    .replace(" PM", "pm");
}

export default function LiveClock() {
  const [now, setNow] = useState("");

  useEffect(() => {
    const tick = () => setNow(format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span suppressHydrationWarning>{now || "—"} GERMANY</span>
  );
}
