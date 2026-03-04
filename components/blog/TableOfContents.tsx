"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { TocItem } from "@/lib/toc";

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%", threshold: 1 }
    );

    const headings = document.querySelectorAll("h2, h3");
    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  if (items.length === 0) return null;

  return (
    <nav className="hidden xl:block" aria-label="Table of contents">
      <div className="sticky top-24">
        <p className="mb-4 text-sm font-medium">On this page</p>
        <ul className="space-y-2 text-sm">
          {items.map((item) => (
            <li key={item.slug}>
              <a
                href={`#${item.slug}`}
                className={cn(
                  "block transition-colors hover:text-neutral-900 dark:hover:text-neutral-100",
                  item.level === 3 && "pl-4",
                  activeId === item.slug
                    ? "text-neutral-900 dark:text-neutral-100 font-medium"
                    : "text-neutral-500 dark:text-neutral-400"
                )}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
