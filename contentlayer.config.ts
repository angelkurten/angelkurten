import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import readingTime from "reading-time";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" }, required: true },
    published: { type: "boolean", default: true },
    coverImage: { type: "string" },
    canonicalUrl: { type: "string" },
  },
  computedFields: {
    lang: {
      type: "string",
      resolve: (doc) =>
        doc._raw.sourceFileName.endsWith(".es.mdx") ? "es" : "en",
    },
    slug: {
      type: "string",
      resolve: (doc) => {
        const raw = doc._raw.flattenedPath.replace("posts/", "");
        return raw.replace(/\.es$/, "");
      },
    },
    translationSlug: {
      type: "string",
      resolve: (doc) => {
        const raw = doc._raw.flattenedPath.replace("posts/", "");
        return raw.replace(/\.es$/, "");
      },
    },
    readingTime: {
      type: "string",
      resolve: (doc) => readingTime(doc.body.raw).text,
    },
    structuredData: {
      type: "json",
      resolve: (doc) => {
        const isSpanish = doc._raw.sourceFileName.endsWith(".es.mdx");
        const slug = doc._raw.flattenedPath
          .replace("posts/", "")
          .replace(/\.es$/, "");
        const url = isSpanish
          ? `https://angelkurten.com/es/blog/${slug}`
          : `https://angelkurten.com/blog/${slug}`;
        return {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: doc.title,
          datePublished: doc.date,
          dateModified: doc.date,
          description: doc.description,
          inLanguage: isSpanish ? "es" : "en",
          author: {
            "@type": "Person",
            name: "Angel Kurten",
            url: "https://angelkurten.com",
          },
          url,
        };
      },
    },
  },
}));

const rehypePrettyCodeOptions = {
  theme: {
    dark: "github-dark",
    light: "github-light",
  },
};

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
      [rehypePrettyCode, rehypePrettyCodeOptions],
    ],
  },
});
