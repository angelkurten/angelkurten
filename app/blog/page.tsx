import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogListClient } from "./BlogListClient";
import { getPaginatedPosts, getPublishedPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on engineering leadership, system architecture, and building products.",
};

export default function BlogPage() {
  const { posts, totalPages, currentPage } = getPaginatedPosts(1);
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
      <main className="mx-auto max-w-3xl px-4 py-16">
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
