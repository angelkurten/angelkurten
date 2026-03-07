import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getAllTags } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Tags",
  description: "Browse blog posts by topic.",
};

export default function TagsPage() {
  const tags = getAllTags();
  const sortedTags = Object.entries(tags).sort((a, b) => b[1] - a[1]);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-8 sm:py-16">
        <h1 className="text-3xl font-bold tracking-tight">Tags</h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Browse posts by topic.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {sortedTags.map(([tag, count]) => (
            <Link
              key={tag}
              href={`/tags/${tag.toLowerCase()}`}
              className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
            >
              {tag}
              <span className="rounded-full bg-neutral-200 px-2 py-0.5 text-xs dark:bg-neutral-700">
                {count}
              </span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
