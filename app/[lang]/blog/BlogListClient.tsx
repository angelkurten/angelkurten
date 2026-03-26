"use client";

import { useState, useCallback } from "react";
import { PostCard } from "@/components/blog/PostCard";
import { SearchBar } from "@/components/blog/SearchBar";
import { Pagination } from "@/components/blog/Pagination";
import { t, type Locale } from "@/lib/i18n";

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
  totalCount: number;
  lang?: Locale;
}

export function BlogListClient({ posts, allPosts, currentPage, totalPages, totalCount, lang = "en" }: BlogListClientProps) {
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
      <SearchBar onSearch={handleSearch} lang={lang} />

      <div className="mt-10 border-t border-neutral-200 dark:border-neutral-800 pt-10">
        <div className="flex flex-col">
          {displayPosts.length > 0 ? (
            displayPosts.map((post, index) => {
              const chapterNumber = searchQuery
                ? totalCount - allPosts.indexOf(post)
                : totalCount - ((currentPage - 1) * posts.length + index);

              return (
                <div key={post.slug} className="relative">
                  <PostCard {...post} lang={lang} chapterNumber={chapterNumber} />
                  {index < displayPosts.length - 1 && (
                    <div className="ml-[1.1rem] sm:ml-[1.35rem] mb-10 border-l border-dashed border-neutral-200 dark:border-neutral-800 h-0" />
                  )}
                </div>
              );
            })
          ) : (
            <p className="text-center text-neutral-500 dark:text-neutral-400 py-12">{t(lang, "blog.noPosts")}</p>
          )}
        </div>
      </div>

      {!searchQuery && <Pagination currentPage={currentPage} totalPages={totalPages} lang={lang} />}
    </div>
  );
}
