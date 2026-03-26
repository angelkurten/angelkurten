import { withContentlayer } from "next-contentlayer2";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.angelkurten.com" }],
        destination: "https://angelkurten.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default withContentlayer(nextConfig);
