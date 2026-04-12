import Link from "next/link";
import { getPublishedPosts } from "@/lib/blog";
import { t, getLocalizedPath, type Locale } from "@/lib/i18n";

interface RelatedPostsProps {
  currentSlug: string;
  currentTags: string[];
  lang: Locale;
}

export function RelatedPosts({ currentSlug, currentTags, lang }: RelatedPostsProps) {
  const posts = getPublishedPosts(lang);

  const related = posts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      const sharedTags = post.tags.filter((tag) =>
        currentTags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
      );
      return { post, sharedCount: sharedTags.length };
    })
    .filter(({ sharedCount }) => sharedCount > 0)
    .sort((a, b) => b.sharedCount - a.sharedCount)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-12 border-t border-neutral-200 pt-8 dark:border-neutral-800">
      <h2 className="text-lg font-semibold tracking-tight">{t(lang, "relatedPosts.title")}</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {related.map(({ post }) => (
          <Link
            key={post.slug}
            href={getLocalizedPath(`/blog/${post.slug}`, lang)}
            className="group"
          >
            <h3 className="font-medium leading-snug transition-colors group-hover:text-neutral-600 dark:group-hover:text-neutral-300">
              {post.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
