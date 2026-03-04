import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 py-8 text-sm text-neutral-500 dark:text-neutral-400 sm:flex-row sm:justify-between">
        <p>&copy; 2026 Angel Kurten. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:angelkurten@gmail.com"
            className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/angelkurten"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
