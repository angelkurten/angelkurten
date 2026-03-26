import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogListClient } from "../../BlogListClient";
import { getPaginatedPosts, getPublishedPosts } from "@/lib/blog";
import { t, getLocalizedPath, type Locale } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ lang: string; num: string }>;
}

export async function generateStaticParams() {
  const enPosts = getPublishedPosts("en");
  const esPosts = getPublishedPosts("es");
  const maxPages = Math.max(
    Math.ceil(enPosts.length / 6),
    Math.ceil(esPosts.length / 6)
  );
  return Array.from({ length: maxPages }, (_, i) => ({
    num: String(i + 1),
  })).filter((p) => p.num !== "1");
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, num } = await params;
  const locale = lang as Locale;
  return {
    title: `${t(locale, "blogPaginated.title")} ${num}`,
    description: `${t(locale, "blogPaginated.description")} ${num}`,
    alternates: {
      canonical: locale === "es" ? `https://angelkurten.com/es/blog/page/${num}` : `https://angelkurten.com/blog/page/${num}`,
      languages: {
        en: `https://angelkurten.com/blog/page/${num}`,
        es: `https://angelkurten.com/es/blog/page/${num}`,
      },
    },
  };
}

export default async function PaginatedBlogPage({ params }: PageProps) {
  const { lang, num } = await params;
  const locale = lang as Locale;
  const page = parseInt(num, 10);

  if (isNaN(page) || page < 1) notFound();
  if (page === 1) redirect(getLocalizedPath("/blog", locale));

  const { posts, totalPages, currentPage } = getPaginatedPosts(page, locale);
  if (page > totalPages) notFound();

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
            totalCount={allPosts.length}
            lang={locale}
          />
        </div>
      </main>
      <Footer lang={locale} />
    </div>
  );
}
