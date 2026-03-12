import Link from "next/link";
import { t, getLocalizedPath, type Locale } from "@/lib/i18n";

interface PostNavigationProps {
  prev: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
  lang?: Locale;
}

export function PostNavigation({ prev, next, lang = "en" }: PostNavigationProps) {
  if (!prev && !next) return null;

  return (
    <nav className="mt-12 flex justify-between gap-4 border-t border-neutral-200 pt-8 dark:border-neutral-800" aria-label="Post navigation">
      {prev ? (
        <Link href={getLocalizedPath(`/blog/${prev.slug}`, lang)} className="group flex-1">
          <span className="text-sm text-neutral-500 dark:text-neutral-400">{t(lang, "postNav.previous")}</span>
          <p className="mt-1 font-medium group-hover:underline">{prev.title}</p>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      {next ? (
        <Link href={getLocalizedPath(`/blog/${next.slug}`, lang)} className="group flex-1 text-right">
          <span className="text-sm text-neutral-500 dark:text-neutral-400">{t(lang, "postNav.next")}</span>
          <p className="mt-1 font-medium group-hover:underline">{next.title}</p>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
