import { allPosts, type Post } from "contentlayer/generated";

const POSTS_PER_PAGE = 6;

export function getPublishedPosts(lang: string = "en"): Post[] {
  return allPosts
    .filter((post) => post.published !== false && post.lang === lang)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPaginatedPosts(
  page: number,
  lang: string = "en",
  perPage = POSTS_PER_PAGE
) {
  const posts = getPublishedPosts(lang);
  const totalPages = Math.ceil(posts.length / perPage);
  const start = (page - 1) * perPage;
  const paginatedPosts = posts.slice(start, start + perPage);

  return {
    posts: paginatedPosts,
    totalPages,
    currentPage: page,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  };
}

export function getAllTags(lang: string = "en"): Record<string, number> {
  const posts = getPublishedPosts(lang);
  const tags: Record<string, number> = {};
  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      tags[tag] = (tags[tag] || 0) + 1;
    });
  });
  return tags;
}

export function getPostsByTag(tag: string, lang: string = "en"): Post[] {
  return getPublishedPosts(lang).filter((post) =>
    post.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

export function getAdjacentPosts(slug: string, lang: string = "en") {
  const posts = getPublishedPosts(lang);
  const index = posts.findIndex((post) => post.slug === slug);
  return {
    prev: index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  };
}

export function getTranslationSlugs(slug: string): {
  en: boolean;
  es: boolean;
} {
  const published = allPosts.filter((post) => post.published !== false);
  return {
    en: published.some(
      (post) => post.translationSlug === slug && post.lang === "en"
    ),
    es: published.some(
      (post) => post.translationSlug === slug && post.lang === "es"
    ),
  };
}

export function getPostBySlugAndLang(
  slug: string,
  lang: string
): Post | undefined {
  return allPosts.find(
    (post) =>
      post.slug === slug && post.lang === lang && post.published !== false
  );
}
