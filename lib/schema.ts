import { profile, publications, SITE_URL } from "./cv-data";

export function personJsonLd() {
  const pub = publications[0];
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: profile.email,
    telephone: profile.phone,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Faridpur",
      addressCountry: "BD",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Dhaka International University",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "National Institute of Engineering & Technology",
      },
    ],
    worksFor: {
      "@type": "Organization",
      name: "National Institute of Engineering & Technology (NIET)",
      url: "https://niet.edu.bd/",
    },
    knowsAbout: [
      "Internet of Things",
      "Assistive Technology",
      "Computer Vision",
      "Full-Stack Web Development",
      "Embedded Systems",
    ],
    sameAs: ["https://icpc.global/ICPCID/3PZDUGT233SG"],
    author: pub
      ? {
          "@type": "ScholarlyArticle",
          headline: pub.title,
          url: pub.url,
          identifier: pub.doi,
          publisher: {
            "@type": "Organization",
            name: "Springer",
          },
        }
      : undefined,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${profile.name} – CV & Portfolio`,
    url: SITE_URL,
    description: profile.tagline,
    author: {
      "@type": "Person",
      name: profile.name,
    },
  };
}
