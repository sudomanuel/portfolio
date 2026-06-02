// Helpers to build logo image URLs.
//
// tech(slug)  -> Simple Icons CDN. Clean brand SVGs for technologies.
//                Browse slugs at https://simpleicons.org
// site(domain) -> Favicon service. Works for almost any company/university domain.
//
// To use your OWN image instead, drop a file in /public/logos/ and pass
// "/logos/myfile.png" directly as the `logo` value in any data array below.

export const tech = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

export const site = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
