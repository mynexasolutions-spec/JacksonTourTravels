import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jackson Tour Travels | Taxi & Cab Service in Jalandhar, Punjab",
  description:
    "Book taxis, airport transfers, one-way cabs, outstation rides and tour packages with Jackson Tour Travels, Jalandhar. 24/7 bookings, experienced chauffeurs and clear upfront fares.",
  applicationName: site.name,
  keywords: [
    "Jackson Tour Travels",
    "taxi service Jalandhar",
    "cab service Jalandhar",
    "Jalandhar to Delhi taxi",
    "Jalandhar airport taxi",
    "Amritsar airport transfer",
    "outstation cabs Punjab",
    "Himachal tour package",
    "4 Dham Yatra taxi",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  category: "travel",
  icons: {
    icon: "/fevicon.jpeg",
    shortcut: "/fevicon.jpeg",
    apple: "/fevicon.jpeg",
  },
  openGraph: {
    title: "Jackson Tour Travels | Taxi & Cab Service in Jalandhar",
    description:
      "Airport transfers, one-way cabs, outstation journeys and curated tours across North India. Proudly based in Jalandhar, available 24/7.",
    type: "website",
    locale: "en_IN",
    siteName: site.name,
  },
  twitter: {
    card: "summary",
    title: "Jackson Tour Travels | Taxi & Cab Service in Jalandhar",
    description:
      "Reliable taxis, airport transfers and tour packages from Jalandhar. Clear fares, verified chauffeurs and 24/7 support.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4b81c",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: site.name,
  description:
    "Taxi and cab service based in Jalandhar offering airport transfers, one-way cabs, outstation journeys and tour packages across North India.",
  telephone: site.primaryPhone.href.replace("tel:", ""),
  email: site.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: "Jalandhar",
    addressRegion: "Punjab",
    addressCountry: "IN",
  },
  areaServed: [
    "Jalandhar",
    "Punjab",
    "Amritsar",
    "Chandigarh",
    "Delhi",
    "Himachal Pradesh",
    "North India",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  sameAs: [site.social.facebook, site.social.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          as="image"
          href="/hero1-1600.webp"
          imageSrcSet="/hero1-800.webp 800w, /hero1-1200.webp 1200w, /hero1-1600.webp 1600w"
          imageSizes="100vw"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
