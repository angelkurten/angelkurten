"use client";

import { useState, useCallback } from "react";
import { PostCard } from "@/components/blog/PostCard";
import { SearchBar } from "@/components/blog/SearchBar";
import { Pagination } from "@/components/blog/Pagination";

interface Post {
  title: string;
  slug: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: string;
}

interface BlogListClientProps {
  posts: Post[];
  allPosts: Post[];
  currentPage: number;
  totalPages: number;
}

export function BlogListClient({ posts, allPosts, currentPage, totalPages }: BlogListClientProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const displayPosts = searchQuery
    ? allPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : posts;

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="mt-8 grid gap-6">
        {displayPosts.length > 0 ? (
          displayPosts.map((post) => <PostCard key={post.slug} {...post} />)
        ) : (
          <p className="text-center text-neutral-500 dark:text-neutral-400">No posts found.</p>
        )}
      </div>
      {!searchQuery && <Pagination currentPage={currentPage} totalPages={totalPages} />}
    </div>
  );
}
