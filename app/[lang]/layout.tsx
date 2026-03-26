import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import { Providers } from "./providers";
import "../globals.css";
import { locales, type Locale } from "@/lib/i18n";
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
    "Engineering Leader building scalable distributed systems and AI-driven products. Practical insights on backend architecture, RAG pipelines, and engineering at scale.",
  authors: [{ name: "Angel Kurten" }],
  openGraph: {
    siteName: "Angel Kurten",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
      </body>
    </html>
  );
}
