import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PostCard } from "@/components/blog/PostCard";
import { getAllTags, getPostsByTag } from "@/lib/blog";
import { t, type Locale } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ lang: string; tag: string }>;
}

export async function generateStaticParams() {
  const enTags = getAllTags("en");
  const esTags = getAllTags("es");
  const allTagNames = new Set([
    ...Object.keys(enTags).map((t) => t.toLowerCase()),
    ...Object.keys(esTags).map((t) => t.toLowerCase()),
  ]);
  return Array.from(allTagNames).map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, tag } = await params;
  const locale = lang as Locale;
  return {
    title: `${t(locale, "tags.postsTagged")} "${tag}"`,
    description: `${t(locale, "tags.postsTagged")} "${tag}".`,
    alternates: {
      canonical: locale === "es" ? `https://angelkurten.com/es/tags/${tag.toLowerCase()}` : `https://angelkurten.com/tags/${tag.toLowerCase()}`,
      languages: {
        en: `https://angelkurten.com/tags/${tag.toLowerCase()}`,
        es: `https://angelkurten.com/es/tags/${tag.toLowerCase()}`,
      },
    },
  };
}

export default async function TagPage({ params }: PageProps) {
  const { lang, tag } = await params;
  const locale = lang as Locale;
  const posts = getPostsByTag(tag, locale);

  if (posts.length === 0) {
    notFound();
  }

  const postCount = posts.length;
  const postWord = postCount === 1 ? t(locale, "tags.postSingular") : t(locale, "tags.postPlural");

  return (
    <div className="min-h-screen">
      <Header lang={locale} />
      <main className="mx-auto max-w-3xl px-6 py-8 sm:py-16">
        <h1 className="text-3xl font-bold tracking-tight">
          {t(locale, "tags.postsTagged")} &ldquo;{tag}&rdquo;
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          {postCount} {postWord} {t(locale, "tags.found")}.
        </p>
        <div className="mt-8 grid gap-6">
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              title={post.title}
              slug={post.slug}
              date={post.date}
              description={post.description}
              tags={post.tags}
              readingTime={post.readingTime}
              lang={locale}
            />
          ))}
        </div>
      </main>
      <Footer lang={locale} />
    </div>
  );
}
