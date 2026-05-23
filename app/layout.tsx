import type { Metadata, Viewport } from "next";
import { Outfit, Syne } from "next/font/google";
import { personJsonLd, websiteJsonLd } from "@/lib/schema";
import { profile, publications, SITE_URL } from "@/lib/cv-data";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const pub = publications[0];
const description = `${profile.title} based in Bangladesh. Published Springer LNNS researcher (BIM 2025) on IoT assistive navigation. CS Instructor at NIET. Full-stack & embedded systems developer.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} | CV, Research & Projects`,
    template: `%s | ${profile.shortName}`,
  },
  description,
  keywords: [
    "Md Moshiur Rahman",
    "Computer Science Instructor",
    "IoT researcher Bangladesh",
    "assistive technology",
    "Springer publication",
    "BIM 2025",
    "SSD-MobileNet",
    "full-stack developer",
    "NIET Dhaka",
  ],
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: SITE_URL,
    siteName: `${profile.name} – CV`,
    title: `${profile.name} | CS Instructor & IoT Researcher`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | CV & Research Portfolio`,
    description,
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  category: "technology",
  other: pub
    ? {
        "citation_title": pub.title,
        "citation_doi": pub.doi,
        "citation_publication_date": "2026/04/01",
        "citation_conference_title": pub.venue,
      }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#080b12",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${syne.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd()),
          }}
        />
      </head>
      <body className="min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
