import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer2/hooks";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TagBadge } from "@/components/blog/TagBadge";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { PostNavigation } from "@/components/blog/PostNavigation";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { mdxComponents } from "@/components/mdx";
import {
  getPublishedPosts,
  getAdjacentPosts,
  getPostBySlugAndLang,
  getTranslationSlugs,
} from "@/lib/blog";
import { extractToc } from "@/lib/toc";
import { formatDate } from "@/lib/utils";
import { siteConfig, generateBlogPostJsonLd } from "@/lib/seo";
import { locales, getLocalizedPath, type Locale } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of locales) {
    const posts = getPublishedPosts(lang);
    for (const post of posts) {
      params.push({ lang, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: langParam, slug } = await params;
  const lang = (langParam === "es" ? "es" : "en") as Locale;
  const post = getPostBySlugAndLang(slug, lang);
  if (!post) return {};

  const postUrl = getLocalizedPath(`/blog/${post.slug}`, lang);
  const canonicalUrl = post.canonicalUrl || `${siteConfig.url}${postUrl}`;

  const alternatesLanguages: Record<string, string> = {};
  const translationSlugs = getTranslationSlugs(post.translationSlug || post.slug);
  if (translationSlugs.en) {
    alternatesLanguages.en = `${siteConfig.url}/blog/${post.translationSlug || post.slug}`;
  }
  if (translationSlugs.es) {
    alternatesLanguages.es = `${siteConfig.url}/es/blog/${post.translationSlug || post.slug}`;
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `${siteConfig.url}${postUrl}`,
      authors: [siteConfig.author.name],
      locale: lang === "es" ? "es_ES" : "en_US",
      images: [{
        url: `${siteConfig.url}/api/og?title=${encodeURIComponent(post.title)}&description=${encodeURIComponent(post.description)}&tags=${encodeURIComponent(post.tags?.join(",") || "")}&readingTime=${encodeURIComponent(post.readingTime || "")}&lang=${lang}`,
        width: 1200,
        height: 630,
        alt: post.title,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [{
        url: `${siteConfig.url}/api/og?title=${encodeURIComponent(post.title)}&description=${encodeURIComponent(post.description)}&tags=${encodeURIComponent(post.tags?.join(",") || "")}&readingTime=${encodeURIComponent(post.readingTime || "")}&lang=${lang}`,
        width: 1200,
        height: 630,
        alt: post.title,
      }],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: alternatesLanguages,
    },
  };
}

function MdxContent({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return <Component components={mdxComponents} />;
}

export default async function PostPage({ params }: PageProps) {
  const { lang: langParam, slug } = await params;
  const lang = (langParam === "es" ? "es" : "en") as Locale;
  const post = getPostBySlugAndLang(slug, lang);

  if (!post) {
    notFound();
  }

  const dateLocale = lang === "es" ? "es-ES" : "en-US";
  const toc = extractToc(post.body.raw);
  const { prev, next } = getAdjacentPosts(slug, lang);
  const jsonLd = generateBlogPostJsonLd({
    title: post.title,
    description: post.description,
    date: post.date,
    slug: post.slug,
    lang,
  });

  return (
    <div className="min-h-screen">
      <Header lang={lang} />
      <main className="mx-auto max-w-7xl px-6 py-8 sm:py-16">
        <div className="relative flex gap-12">
          <article className="mx-auto max-w-3xl flex-1 min-w-0">
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                <Link href={getLocalizedPath("/about", lang)} className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100">
                  By Angel Kurten
                </Link>
                <span aria-hidden="true">&middot;</span>
                <time dateTime={post.date}>{formatDate(post.date, dateLocale)}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{post.readingTime}</span>
              </div>
              <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">{post.title}</h1>
              <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400 sm:text-lg">
                {post.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <TagBadge key={tag} tag={tag} lang={lang} />
                ))}
              </div>
            </header>
            <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:scroll-mt-20 prose-pre:max-w-[calc(100vw-3rem)] prose-img:max-w-full prose-img:h-auto">
              <MdxContent code={post.body.code} />
            </div>
            <PostNavigation
              prev={prev ? { slug: prev.slug, title: prev.title } : null}
              next={next ? { slug: next.slug, title: next.title } : null}
              lang={lang}
            />
            <RelatedPosts
              currentSlug={post.slug}
              currentTags={post.tags}
              lang={lang}
            />
          </article>
          <TableOfContents items={toc} lang={lang} />
        </div>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: lang === "es" ? "Inicio" : "Home",
                item: lang === "es" ? `${siteConfig.url}/es` : siteConfig.url,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: lang === "es" ? `${siteConfig.url}/es/blog` : `${siteConfig.url}/blog`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `${siteConfig.url}${getLocalizedPath(`/blog/${post.slug}`, lang)}`,
              },
            ],
          }),
        }}
      />
      <Footer lang={lang} />
    </div>
  );
}
