// Logo sources.
//
//   tech("python")  -> Simple Icons CDN (clean monochrome brand SVG).
//                      Browse slugs at https://simpleicons.org
//   logos.<key>     -> real institution logos (hotlinked from Wikimedia).
//
// Anything without a source falls back to a tidy initials monogram
// (see <Logo mono="UNI" />). To self-host a logo, download it into
// /public/logos/ and point the value at e.g. "/logos/uni.png".

export const tech = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

export const logos = {
  // Real institution logos, self-hosted in /public/logos/ for reliability.
  // Sources: UNI coat of arms & HFU official logo (via Wikimedia).
  uni: "/logos/uni.jpg",
  hfu: "/logos/hfu.png",
};
