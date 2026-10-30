/**
 * Cấu hình robots.txt tối ưu cho SEO và trình thu thập dữ liệu
 */

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://foodmarket-ph.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // Cho phép các bot AI tìm kiếm (ChatGPT, Perplexity, Gemini...) thu thập dữ liệu sản phẩm
      {
        userAgent: ["Googlebot", "Bingbot", "PerplexityBot", "OAI-SearchBot"],
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

