import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { TagBadge } from "./TagBadge";

interface PostCardProps {
  title: string;
  slug: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: string;
}

export function PostCard({ title, slug, date, description, tags, readingTime }: PostCardProps) {
  return (
    <article className="group rounded-lg border border-neutral-200 p-6 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700">
      <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
        <time dateTime={date}>{formatDate(date)}</time>
        <span>·</span>
        <span>{readingTime}</span>
      </div>
      <h2 className="mt-2 text-xl font-semibold">
        <Link href={`/blog/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400 line-clamp-2">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>
    </article>
  );
}
