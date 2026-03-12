import Link from "next/link";
import { cn } from "@/lib/utils";
import { t, getLocalizedPath, type Locale } from "@/lib/i18n";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  lang?: Locale;
}

export function Pagination({ currentPage, totalPages, lang = "en" }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageUrl = (page: number) =>
    getLocalizedPath(page === 1 ? "/blog" : `/blog/page/${page}`, lang);

  return (
    <nav className="mt-8 flex items-center justify-center gap-2" aria-label="Pagination">
      {currentPage > 1 && (
        <Link
          href={getPageUrl(currentPage - 1)}
          className="rounded-md px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
        >
          {t(lang, "pagination.previous")}
        </Link>
      )}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={getPageUrl(page)}
          className={cn(
            "rounded-md px-3 py-2 text-sm",
            page === currentPage
              ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
              : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
          )}
        >
          {page}
        </Link>
      ))}
      {currentPage < totalPages && (
        <Link
          href={getPageUrl(currentPage + 1)}
          className="rounded-md px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
        >
          {t(lang, "pagination.next")}
        </Link>
      )}
    </nav>
  );
}
