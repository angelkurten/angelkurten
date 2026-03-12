import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import { Providers } from "./providers";
import "../globals.css";
import { locales, type Locale } from "@/lib/i18n";

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
    default: "Angel Kurten — Engineering Leader & Product Developer",
    template: "%s | Angel Kurten",
  },
  description:
    "Engineering Leader driving AI-first transformations and scalable distributed systems. Building end-to-end products across high-growth SaaS platforms.",
  authors: [{ name: "Angel Kurten" }],
  openGraph: {
    title: "Angel Kurten — Engineering Leader & Product Developer",
    description:
      "Engineering Leader driving AI-first transformations and scalable distributed systems.",
    url: "https://angelkurten.com",
    siteName: "Angel Kurten",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Angel Kurten — Engineering Leader & Product Developer",
    description:
      "Engineering Leader driving AI-first transformations and scalable distributed systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://angelkurten.com",
    languages: {
      en: "https://angelkurten.com",
      es: "https://angelkurten.com/es",
    },
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
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
