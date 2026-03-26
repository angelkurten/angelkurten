import { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { siteConfig } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";

const meta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Angel Kurten — Scalable Distributed Systems & AI Engineering",
    description:
      "Engineering Leader building scalable distributed systems and AI-driven products. Practical insights on backend architecture, RAG pipelines, and engineering at scale.",
  },
  es: {
    title: "Angel Kurten — Sistemas Distribuidos Escalables e Ingeniería de IA",
    description:
      "Líder de Ingeniería construyendo sistemas distribuidos escalables y productos impulsados por IA. Conocimiento práctico en arquitectura backend, pipelines RAG e ingeniería a escala.",
  },
};

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang === "es" ? "es" : "en") as Locale;
  const { title, description } = meta[locale];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: locale === "es" ? `${siteConfig.url}/es` : siteConfig.url,
      siteName: "Angel Kurten",
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: locale === "es" ? `${siteConfig.url}/es` : siteConfig.url,
      languages: {
        en: siteConfig.url,
        es: `${siteConfig.url}/es`,
      },
    },
  };
}

export default function Page() {
  return <HomePage />;
}
