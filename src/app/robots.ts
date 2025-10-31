import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.BASE_URL ?? "http://localhost:3000";

  const noIndexPaths = ["/api/", "/_next/", "/public/"];

  if (process.env.NODE_ENV !== "production") {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: "*",
        },
      ],
    };
  }

  return {
    rules: [
      ...noIndexPaths.map((path) => ({
        userAgent: "*",
        disallow: path,
      })),
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
