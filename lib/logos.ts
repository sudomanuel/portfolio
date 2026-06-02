// Build logo image URLs for technologies.
//
//   tech("python") -> Simple Icons CDN (clean monochrome brand SVG).
//                     Browse slugs at https://simpleicons.org
//
// Organizations (companies / universities) usually have no clean brand icon,
// so they fall back to a tidy initials monogram (see <Logo mono="UNI" />).
// To force a real image for anything, drop a file in /public/logos/ and pass
// its path directly, e.g. logo: "/logos/uni.png".

export const tech = (slug: string) => `https://cdn.simpleicons.org/${slug}`;
