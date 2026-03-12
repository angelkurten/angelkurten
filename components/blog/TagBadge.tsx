import Link from "next/link";
import { cn } from "@/lib/utils";
import { getLocalizedPath, type Locale } from "@/lib/i18n";

interface TagBadgeProps {
  tag: string;
  className?: string;
  lang?: Locale;
}

export function TagBadge({ tag, className, lang = "en" }: TagBadgeProps) {
  return (
    <Link
      href={getLocalizedPath(`/tags/${tag.toLowerCase()}`, lang)}
      className={cn(
        "inline-block rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700",
        className
      )}
    >
      {tag}
    </Link>
  );
}
