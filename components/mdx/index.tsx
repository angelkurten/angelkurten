import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { Callout } from "./Callout";
import { ResponsiveImage } from "./ResponsiveImage";
import { YouTube } from "./YouTube";

export const mdxComponents: MDXComponents = {
  Callout,
  YouTube,
  img: ({ src, alt, ...props }) => (
    <ResponsiveImage src={src || ""} alt={alt || ""} {...props} />
  ),
  a: ({ href, children, ...props }) => {
    if (href?.startsWith("/")) {
      return <Link href={href} {...props}>{children}</Link>;
    }
    if (href?.startsWith("#")) {
      return <a href={href} {...props}>{children}</a>;
    }
    return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
  },
};
