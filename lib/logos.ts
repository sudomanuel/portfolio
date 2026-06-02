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
  // Universidad Nacional de Ingeniería (Lima, Peru) — coat of arms
  uni: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Escudo1UNI.jpg/320px-Escudo1UNI.jpg",
  // Hochschule Furtwangen University (Germany)
  hfu: "https://upload.wikimedia.org/wikipedia/de/thumb/5/57/Hochschule_Furtwangen_HFU_logo.svg/320px-Hochschule_Furtwangen_HFU_logo.svg.png",
};
