import Link from "next/link";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageUrl = (page: number) => (page === 1 ? "/blog" : `/blog/page/${page}`);

  return (
    <nav className="mt-8 flex items-center justify-center gap-2" aria-label="Pagination">
      {currentPage > 1 && (
        <Link
          href={getPageUrl(currentPage - 1)}
          className="rounded-md px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
        >
          Previous
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
          Next
        </Link>
      )}
    </nav>
  );
}
