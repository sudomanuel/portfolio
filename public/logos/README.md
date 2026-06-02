# Logos

How logos are resolved across the site:

- **Technologies** (Python, Power BI, Git…) → Simple Icons CDN
  (`lib/logos.ts` → `tech("python")`).
- **Universities** (UNI, HFU) → real logos hotlinked from Wikimedia
  (`lib/logos.ts` → `logos.uni`, `logos.hfu`).
- **Everything else** → a clean initials monogram (e.g. `<Logo mono="ST" />`),
  shown automatically when there is no image or it fails to load.

Logos render in **grayscale** on a light tile to stay monochrome, and line up
on a fixed-size grid so nothing looks misplaced.

## Self-hosting a logo (recommended for production)

1. Download the image into this folder, e.g. `uni.png`.
2. Point the value at the local path:

```ts
// lib/logos.ts
export const logos = {
  uni: "/logos/uni.png",
  hfu: "/logos/hfu.png",
};
```

Local files load faster and never break if an external URL changes.
