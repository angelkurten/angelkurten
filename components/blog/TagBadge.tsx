import Link from "next/link";
import { cn } from "@/lib/utils";

interface TagBadgeProps {
  tag: string;
  className?: string;
}

export function TagBadge({ tag, className }: TagBadgeProps) {
  return (
    <Link
      href={`/tags/${tag.toLowerCase()}`}
      className={cn(
        "inline-block rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700",
        className
      )}
    >
      {tag}
    </Link>
  );
}
