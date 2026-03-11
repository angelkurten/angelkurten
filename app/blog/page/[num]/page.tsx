import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogListClient } from "../../BlogListClient";
import { getPaginatedPosts, getPublishedPosts } from "@/lib/blog";

interface PageProps {
  params: Promise<{ num: string }>;
}

export async function generateStaticParams() {
  const allPosts = getPublishedPosts();
  const totalPages = Math.ceil(allPosts.length / 6);
  return Array.from({ length: totalPages }, (_, i) => ({
    num: String(i + 1),
  })).filter((p) => p.num !== "1");
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { num } = await params;
  return {
    title: `Blog - Page ${num}`,
    description: `Blog posts - page ${num}`,
    alternates: {
      canonical: `https://angelkurten.com/blog/page/${num}`,
    },
  };
}

export default async function PaginatedBlogPage({ params }: PageProps) {
  const { num } = await params;
  const page = parseInt(num, 10);

  if (isNaN(page) || page < 1) notFound();
  if (page === 1) redirect("/blog");

  const { posts, totalPages, currentPage } = getPaginatedPosts(page);
  if (page > totalPages) notFound();

  const allPosts = getPublishedPosts();

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
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-8 sm:py-16">
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Thoughts on engineering leadership, system architecture, and building products.
        </p>
        <div className="mt-8">
          <BlogListClient
            posts={serializedPosts}
            allPosts={serializedAllPosts}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
