import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogListClient } from "./BlogListClient";
import { getPaginatedPosts, getPublishedPosts } from "@/lib/blog";
import { t, type Locale } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  return {
    title: t(locale, "blog.title"),
    description: t(locale, "blog.description"),
    alternates: {
      canonical: locale === "es" ? "https://angelkurten.com/es/blog" : "https://angelkurten.com/blog",
      languages: {
        en: "https://angelkurten.com/blog",
        es: "https://angelkurten.com/es/blog",
      },
    },
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { lang } = await params;
  const locale = lang as Locale;
  const { posts, totalPages, currentPage } = getPaginatedPosts(1, locale);
  const allPosts = getPublishedPosts(locale);

  const serializedPosts = posts.map((p) => ({
    title: p.title,
    slug: p.slug,
    date: p.date,
    description: p.description,
    tags: p.tags,
    readingTime: p.readingTime,
  }));

  const serializedAllPosts = allPosts.map((p) => ({
    title: p.title,
    slug: p.slug,
    date: p.date,
    description: p.description,
    tags: p.tags,
    readingTime: p.readingTime,
  }));

  return (
    <div className="min-h-screen">
      <Header lang={locale} />
      <main className="mx-auto max-w-3xl px-6 py-8 sm:py-16">
        <h1 className="text-3xl font-bold tracking-tight">{t(locale, "blog.title")}</h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          {t(locale, "blog.description")}
        </p>
        <div className="mt-8">
          <BlogListClient
            posts={serializedPosts}
            allPosts={serializedAllPosts}
            currentPage={currentPage}
            totalPages={totalPages}
            lang={locale}
          />
        </div>
      </main>
      <Footer lang={locale} />
    </div>
  );
}
