"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { t, getLocalizedPath, type Locale } from "@/lib/i18n";

export default function NotFound() {
  const params = useParams<{ lang: string }>();
  const lang = (params?.lang === "es" ? "es" : "en") as Locale;

  return (
    <>
      <Header lang={lang} />
      <main className="mx-auto flex max-w-3xl flex-col items-center justify-center px-6 py-32 text-center">
        <h1 className="font-[family-name:var(--font-dm-serif)] text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-8xl">
          404
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
          {t(lang, "notFound.title")}. {t(lang, "notFound.description")}
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href={getLocalizedPath("/", lang)}
            className="rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
          >
            {t(lang, "notFound.home")}
          </Link>
          <Link
            href={getLocalizedPath("/blog", lang)}
            className="rounded-md border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            {t(lang, "notFound.blog")}
          </Link>
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
