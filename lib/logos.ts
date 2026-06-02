// Logo sources, mapped to reliable hosts.
//
//   gb()  -> gilbarbara/logos via jsDelivr  (reliable, hotlink-friendly CDN)
//   si()  -> Simple Icons CDN               (monochrome brand glyphs)
//   /logos/*  -> self-hosted in /public/logos (Wikimedia originals)
//
// tech(slug) resolves a slug to the best available source. Anything not
// mapped falls back to Simple Icons. Unknown logos degrade to an initials
// monogram in the <Logo /> component, so nothing ever renders broken.

const gb = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/${slug}.svg`;
const si = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

const SOURCES: Record<string, string> = {
  python: gb("python"),
  powerbi: gb("microsoft-power-bi"),
  tableau: gb("tableau"),
  git: gb("git-icon"),
  sap: gb("sap"),
  duckdb: si("duckdb"),
  ieee: si("ieee"),
  microsoftexcel: "/logos/excel.svg",
  cocacola: "/logos/coca-cola.svg",
};

export const tech = (slug: string) => SOURCES[slug] ?? si(slug);

export const logos = {
  // Real institution logos, self-hosted in /public/logos/ for reliability.
  uni: "/logos/uni.jpg",
  hfu: "/logos/hfu.png",
  seoultech: "/logos/seoultech.png",
  icpna: "/logos/icpna.png",
};
