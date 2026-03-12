import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { t, getLocalizedPath, type Locale } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  return {
    title: t(locale, "about.title"),
    description: t(locale, "about.description"),
    alternates: {
      canonical: locale === "es" ? "https://angelkurten.com/es/about" : "https://angelkurten.com/about",
      languages: {
        en: "https://angelkurten.com/about",
        es: "https://angelkurten.com/es/about",
      },
    },
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { lang } = await params;
  const locale = lang as Locale;

  return (
    <>
      <Header lang={locale} />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
          {t(locale, "about.title")}
        </h1>

        <div className="mt-8 space-y-6 text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <p>{t(locale, "about.p1")}</p>
          <p>{t(locale, "about.p2")}</p>
          <p>{t(locale, "about.p3")}</p>
          <p>{t(locale, "about.p4")}</p>
          <p>
            {t(locale, "about.p5")}{" "}
            <Link
              href={getLocalizedPath("/blog", locale)}
              className="underline underline-offset-2 decoration-neutral-400 hover:decoration-neutral-900 dark:hover:decoration-neutral-100 transition-colors"
            >
              {t(locale, "about.blogLink")}
            </Link>
            .
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 text-sm">
          <a
            href="mailto:angelkurten@gmail.com"
            className="inline-flex items-center gap-2 rounded-md border border-neutral-200 px-4 py-2 font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            {t(locale, "footer.email")}
          </a>
          <a
            href="https://linkedin.com/in/angelkurten"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-neutral-200 px-4 py-2 font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            {t(locale, "footer.linkedin")}
          </a>
        </div>
      </main>
      <Footer lang={locale} />
    </>
  );
}
