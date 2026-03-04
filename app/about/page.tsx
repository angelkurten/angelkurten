import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Angel Kurten — Engineering Leader building distributed systems, scaling teams, and shipping AI-driven products end to end.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
          About
        </h1>

        <div className="mt-8 space-y-6 text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <p>
            I&apos;m Angel Kurten, an Engineering Leader and Product Developer
            based in LATAM. I&apos;ve spent over 15 years building distributed
            systems, scaling engineering teams, and embedding AI into real
            products.
          </p>

          <p>
            I realized the line between product and technology doesn&apos;t exist
            anymore &mdash; and I stopped pretending it does. Today I define,
            build, and ship. End to end. Alone or leading teams.
          </p>

          <p>
            Currently I&apos;m leading the transformation from an
            operations-focused company into an AI-driven SaaS platform at ORBIDI
            / PLINNG, where I architected an AI-native Marketing Intelligence
            Engine and scaled the team from 3 to 18 engineers.
          </p>

          <p>
            Previously, I led engineering at Crehana (edtech), Muni Tienda
            (e-commerce), and Mensajeros Urbanos (logistics), driving
            availability improvements, Kubernetes migrations, and event-driven
            architectures at scale.
          </p>

          <p>
            I write about engineering leadership, distributed systems, and the
            intersection of product and technology on my{" "}
            <Link
              href="/blog"
              className="underline underline-offset-2 decoration-neutral-400 hover:decoration-neutral-900 dark:hover:decoration-neutral-100 transition-colors"
            >
              blog
            </Link>
            .
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 text-sm">
          <a
            href="mailto:angelkurten@gmail.com"
            className="inline-flex items-center gap-2 rounded-md border border-neutral-200 px-4 py-2 font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/angelkurten"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-neutral-200 px-4 py-2 font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            LinkedIn
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
