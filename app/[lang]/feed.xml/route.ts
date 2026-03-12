import { getPublishedPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/seo";
import { escapeXml } from "@/lib/utils";
import { type Locale, defaultLocale } from "@/lib/i18n";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ lang: string }> }
) {
  const { lang: langParam } = await params;
  const lang = (langParam || defaultLocale) as Locale;
  const posts = getPublishedPosts(lang);
  const isSpanish = lang === "es";

  const feedUrl = isSpanish
    ? `${siteConfig.url}/es/feed.xml`
    : `${siteConfig.url}/feed.xml`;
  const siteLink = isSpanish ? `${siteConfig.url}/es` : siteConfig.url;

  const items = posts
    .map((post) => {
      const postUrl = isSpanish
        ? `${siteConfig.url}/es/blog/${post.slug}`
        : `${siteConfig.url}/blog/${post.slug}`;
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteConfig.title)}</title>
    <link>${siteLink}</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>${lang}</language>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
