export const siteConfig = {
  title: "Angel Kurten",
  description:
    "Engineering Leader driving AI-first transformations and scalable distributed systems.",
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
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
    url: `${siteConfig.url}/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}
