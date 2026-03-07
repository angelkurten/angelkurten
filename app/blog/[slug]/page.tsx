import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer2/hooks";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TagBadge } from "@/components/blog/TagBadge";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { PostNavigation } from "@/components/blog/PostNavigation";
import { mdxComponents } from "@/components/mdx";
import { getPublishedPosts, getAdjacentPosts } from "@/lib/blog";
import { extractToc } from "@/lib/toc";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `${siteConfig.url}/blog/${post.slug}`,
      authors: [siteConfig.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: post.canonicalUrl || `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

function MdxContent({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return <Component components={mdxComponents} />;
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);

  if (!post || post.published === false) {
    notFound();
  }

  const toc = extractToc(post.body.raw);
  const { prev, next } = getAdjacentPosts(slug);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-8 sm:py-16">
        <div className="relative flex gap-12">
          <article className="mx-auto max-w-3xl flex-1 min-w-0">
            <header className="mb-8">
              <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>·</span>
                <span>{post.readingTime}</span>
              </div>
              <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">{post.title}</h1>
              <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400 sm:text-lg">
                {post.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <TagBadge key={tag} tag={tag} />
                ))}
              </div>
            </header>
            <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:scroll-mt-20 prose-pre:max-w-[calc(100vw-3rem)] prose-img:max-w-full prose-img:h-auto">
              <MdxContent code={post.body.code} />
            </div>
            <PostNavigation
              prev={prev ? { slug: prev.slug, title: prev.title } : null}
              next={next ? { slug: next.slug, title: next.title } : null}
            />
          </article>
          <TableOfContents items={toc} />
        </div>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(post.structuredData) }}
      />
      <Footer />
    </div>
  );
}
