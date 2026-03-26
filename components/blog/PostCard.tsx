import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { getLocalizedPath, type Locale } from "@/lib/i18n";

interface PostCardProps {
  title: string;
  slug: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: string;
  lang?: Locale;
  chapterNumber?: number;
}

export function PostCard({ title, slug, date, description, tags, readingTime, lang = "en", chapterNumber }: PostCardProps) {
  const dateLocale = lang === "es" ? "es-ES" : "en-US";
  const chapter = chapterNumber?.toString().padStart(2, "0");

  return (
    <article className="group relative flex gap-6 sm:gap-10">
      {/* Chapter number */}
      {chapter && (
        <div className="flex flex-col items-center shrink-0">
          <span className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-4xl font-normal text-neutral-300 transition-colors group-hover:text-neutral-900 dark:text-neutral-700 dark:group-hover:text-neutral-100 tabular-nums">
            {chapter}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0 pb-10">
        <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500">
          <time dateTime={date}>{formatDate(date, dateLocale)}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{readingTime}</span>
        </div>

        <h2 className="mt-3 text-xl sm:text-2xl font-semibold leading-tight tracking-tight">
          <Link
            href={getLocalizedPath(`/blog/${slug}`, lang)}
            className="transition-colors hover:text-neutral-600 dark:hover:text-neutral-300"
          >
            {title}
          </Link>
        </h2>

        <p className="mt-3 text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-neutral-400 dark:text-neutral-600">
          {tags.map((tag, i) => (
            <span key={tag} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden="true">&middot;</span>}
              <Link
                href={getLocalizedPath(`/tags/${tag.toLowerCase()}`, lang)}
                className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-200"
              >
                {tag}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
