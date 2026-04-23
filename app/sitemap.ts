import { MetadataRoute } from "next";
import { getPublishedPosts, getAllTags } from "@/lib/blog";
import { siteConfig } from "@/lib/seo";
import { locales, defaultLocale, type Locale } from "@/lib/i18n";

function langUrl(path: string, lang: Locale): string {
  if (lang === defaultLocale) {
    return `${siteConfig.url}${path}`;
  }
  return `${siteConfig.url}/${lang}${path}`;
}

function langAlternates(
  path: string,
  langs: Locale[] = [...locales]
): { languages: Record<string, string> } {
  const languages: Record<string, string> = {};
  for (const lang of langs) {
    languages[lang] = langUrl(path, lang);
  }
  return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages — both languages with mutual hreflang alternates
  const staticPages = [
    { path: "", changeFrequency: "monthly" as const, priority: 1 },
    { path: "/blog", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/tags", changeFrequency: "weekly" as const, priority: 0.6 },
    { path: "/plata/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.flatMap((page) =>
    locales.map((lang) => ({
      url: langUrl(page.path, lang),
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: langAlternates(page.path),
    }))
  );

  // Blog posts — only add ES entry if an ES translation exists
  const enPosts = getPublishedPosts("en");
  const esPosts = getPublishedPosts("es");
  const esSlugSet = new Set(esPosts.map((p) => p.slug));
  const enSlugSet = new Set(enPosts.map((p) => p.slug));

  const blogEntries: MetadataRoute.Sitemap = [];

  for (const post of enPosts) {
    const path = `/blog/${post.slug}`;
    const hasEs = esSlugSet.has(post.slug);
    const availableLangs: Locale[] = hasEs ? [...locales] : ["en"];

    blogEntries.push({
      url: langUrl(path, "en"),
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: langAlternates(path, availableLangs),
    });

    if (hasEs) {
      blogEntries.push({
        url: langUrl(path, "es"),
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: langAlternates(path, availableLangs),
      });
    }
  }

  // ES-only posts (no EN counterpart)
  for (const post of esPosts) {
    if (!enSlugSet.has(post.slug)) {
      const path = `/blog/${post.slug}`;
      blogEntries.push({
        url: langUrl(path, "es"),
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: langAlternates(path, ["es"]),
      });
    }
  }

  // Tag pages — generate for each language that has posts with that tag
  const tagEntries: MetadataRoute.Sitemap = [];
  const allTagSlugs = new Set<string>();

  for (const lang of locales) {
    const tags = Object.keys(getAllTags(lang));
    for (const tag of tags) {
      allTagSlugs.add(tag.toLowerCase());
    }
  }

  for (const tagSlug of allTagSlugs) {
    const path = `/tags/${tagSlug}`;
    for (const lang of locales) {
      tagEntries.push({
        url: langUrl(path, lang),
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.5,
        alternates: langAlternates(path),
      });
    }
  }

  return [...staticEntries, ...blogEntries, ...tagEntries];
}
