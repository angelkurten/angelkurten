"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { t, getLocalizedPath, type Locale } from "@/lib/i18n";

interface HeaderProps {
  lang?: Locale;
}

export function Header({ lang = "en" }: HeaderProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: getLocalizedPath("/", lang), label: t(lang, "nav.home") },
    { href: getLocalizedPath("/blog", lang), label: t(lang, "nav.blog") },
    { href: getLocalizedPath("/tags", lang), label: t(lang, "nav.tags") },
    { href: getLocalizedPath("/about", lang), label: t(lang, "nav.about") },
  ];

  // Language switcher: derive the alternate language URL
  const otherLang: Locale = lang === "en" ? "es" : "en";
  const langSwitchHref = (() => {
    // Strip /es prefix if present, then build the other language path
    const cleanPath = pathname.replace(/^\/es(?=\/|$)/, "") || "/";
    return getLocalizedPath(cleanPath, otherLang);
  })();

  function isActive(href: string) {
    if (href === "/" || href === "/es") return pathname === href;
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
        <Link
          href={getLocalizedPath("/", lang)}
          className="font-[family-name:var(--font-dm-serif)] text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100"
        >
          Angel Kurten
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                isActive(link.href)
                  ? "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
                  : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={langSwitchHref}
            className="rounded-md px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
          >
            {otherLang}
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <Link
            href={langSwitchHref}
            className="rounded-md px-2 py-1.5 text-xs font-semibold uppercase tracking-wide text-neutral-500 transition-colors hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
          >
            {otherLang}
          </Link>
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-neutral-200 px-6 py-3 md:hidden dark:border-neutral-800">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
