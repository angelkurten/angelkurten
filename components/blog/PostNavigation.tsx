import Link from "next/link";

interface PostNavigationProps {
  prev: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
}

export function PostNavigation({ prev, next }: PostNavigationProps) {
  if (!prev && !next) return null;

  return (
    <nav className="mt-12 flex justify-between gap-4 border-t border-neutral-200 pt-8 dark:border-neutral-800" aria-label="Post navigation">
      {prev ? (
        <Link href={`/blog/${prev.slug}`} className="group flex-1">
          <span className="text-sm text-neutral-500 dark:text-neutral-400">Previous</span>
          <p className="mt-1 font-medium group-hover:underline">{prev.title}</p>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      {next ? (
        <Link href={`/blog/${next.slug}`} className="group flex-1 text-right">
          <span className="text-sm text-neutral-500 dark:text-neutral-400">Next</span>
          <p className="mt-1 font-medium group-hover:underline">{next.title}</p>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
