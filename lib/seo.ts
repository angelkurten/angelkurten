export const siteConfig = {
  title: "Angel Kurten",
  description:
    "Engineering Leader building scalable distributed systems and AI-driven products. Practical insights on backend architecture, RAG pipelines, and engineering at scale.",
  url: "https://angelkurten.com",
  author: {
    name: "Angel Kurten",
    email: "angelkurten@gmail.com",
    linkedin: "https://linkedin.com/in/angelkurten",
  },
};

export function generateBlogPostJsonLd(post: {
  title: string;
  description: string;
  date: string;
  slug: string;
  lang?: string;
}) {
  const lang = post.lang || "en";
  const postUrl =
    lang === "es"
      ? `${siteConfig.url}/es/blog/${post.slug}`
      : `${siteConfig.url}/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: lang,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
    url: postUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };
}
