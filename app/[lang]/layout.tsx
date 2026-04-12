import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import { Providers } from "./providers";
import "../globals.css";
import { locales, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/seo";
import { GoogleTagManagerHead, GoogleTagManagerBody } from "@/components/GoogleTagManager";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://angelkurten.com"),
  title: {
    default: "Angel Kurten — Scalable Distributed Systems & AI Engineering",
    template: "%s | Angel Kurten",
  },
  description:
    "Engineering Leader: 15+ years building distributed systems at scale. Insights on AI architecture, RAG pipelines, microservices, and tech leadership.",
  authors: [{ name: "Angel Kurten" }],
  openGraph: {
    siteName: "Angel Kurten",
    locale: "en_US",
    type: "website",
    images: [{
      url: `${siteConfig.url}/api/og?title=${encodeURIComponent("Angel Kurten")}&description=${encodeURIComponent("Engineering Leader building scalable distributed systems and AI-driven products.")}`,
      width: 1200,
      height: 630,
      alt: "Angel Kurten — Scalable Distributed Systems & AI Engineering",
    }],
  },
  twitter: {
    card: "summary_large_image",
    images: [{
      url: `${siteConfig.url}/api/og?title=${encodeURIComponent("Angel Kurten")}&description=${encodeURIComponent("Engineering Leader building scalable distributed systems and AI-driven products.")}`,
      width: 1200,
      height: 630,
      alt: "Angel Kurten — Scalable Distributed Systems & AI Engineering",
    }],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html
      lang={lang}
      className={`${dmSerif.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <GoogleTagManagerHead />
      </head>
      <body className="font-sans antialiased">
        <GoogleTagManagerBody />
        <Providers>{children}</Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Angel Kurten",
              url: siteConfig.url,
              sameAs: [
                "https://linkedin.com/in/angelkurten",
                "https://github.com/angelkurten",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: siteConfig.url,
              name: "Angel Kurten",
            }),
          }}
        />
      </body>
    </html>
  );
}
