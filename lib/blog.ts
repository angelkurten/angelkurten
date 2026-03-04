import { allPosts, type Post } from "contentlayer/generated";

const POSTS_PER_PAGE = 6;

export function getPublishedPosts(): Post[] {
  return allPosts
    .filter((post) => post.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPaginatedPosts(page: number, perPage = POSTS_PER_PAGE) {
  const posts = getPublishedPosts();
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

export function getAllTags(): Record<string, number> {
  const posts = getPublishedPosts();
  const tags: Record<string, number> = {};
  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      tags[tag] = (tags[tag] || 0) + 1;
    });
  });
  return tags;
}

export function getPostsByTag(tag: string): Post[] {
  return getPublishedPosts().filter((post) =>
    post.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

export function getAdjacentPosts(slug: string) {
  const posts = getPublishedPosts();
  const index = posts.findIndex((post) => post.slug === slug);
  return {
    prev: index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  };
}
