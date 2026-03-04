# angelkurten.com

Personal portfolio and blog built with Next.js 15, MDX, and Contentlayer2.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Content**: MDX via Contentlayer2
- **Styling**: Tailwind CSS + @tailwindcss/typography
- **Dark Mode**: next-themes (class strategy)
- **Syntax Highlighting**: rehype-pretty-code (Shiki, dual themes)
- **Fonts**: DM Serif Display + Inter (via next/font/google)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Creating Blog Posts

Create a new `.mdx` file in `content/posts/`:

```mdx
---
title: "Your Post Title"
date: 2026-03-01
description: "A brief description of the post."
tags: [nextjs, react]
published: true
---

Your MDX content here...
```

### Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | yes | Post title |
| `date` | date | yes | Publication date |
| `description` | string | yes | Short description for cards and SEO |
| `tags` | string[] | yes | Topic tags |
| `published` | boolean | no | Set `false` to hide (default: `true`) |
| `coverImage` | string | no | Cover image path |
| `canonicalUrl` | string | no | Canonical URL override |

### Available MDX Components

- `<Callout type="info|warning|error">` — Styled callout boxes
- `<YouTube id="..." />` — YouTube embed
- Images auto-wrap with `next/image`

## Project Structure

```
app/                    # Next.js App Router pages
  blog/                 # Blog index + pagination
  blog/[slug]/          # Individual post pages
  tags/                 # Tag listing + filtering
  about/                # About page
  feed.xml/             # RSS feed
  sitemap.ts            # Dynamic sitemap
components/
  layout/               # Header, Footer
  blog/                 # PostCard, Pagination, SearchBar, TOC
  mdx/                  # MDX component overrides
  common/               # ThemeToggle
content/posts/          # MDX blog posts
lib/                    # Utilities (blog, SEO, TOC, helpers)
contentlayer.config.ts  # Content schema + MDX plugins
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Portfolio homepage |
| `/blog` | Blog index with search |
| `/blog/[slug]` | Individual blog post |
| `/blog/page/[num]` | Paginated blog pages |
| `/tags` | All tags with counts |
| `/tags/[tag]` | Posts filtered by tag |
| `/about` | About page |
| `/feed.xml` | RSS 2.0 feed |
| `/sitemap.xml` | XML sitemap |

## Deploy to Vercel

```bash
npx vercel
```

Or connect your GitHub repository to [Vercel](https://vercel.com) for automatic deployments.
