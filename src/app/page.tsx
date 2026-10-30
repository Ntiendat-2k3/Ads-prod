/**
 * Trang chủ Landing Page (Server Component)
 * Tối ưu hóa SEO On-page, Structured Data JSON-LD và cơ chế Next.js ISR
 */

import { getProductsFromSheet } from "@/lib/google-sheet";
import { LandingContent } from "@/components/sections/landing-content";
import {
  generateStoreSchema,
  generateProductListSchema,
  generateFAQSchema,
} from "@/lib/seo-schema";

export const revalidate = 60; // Tự động làm mới cache sau mỗi 60 giây khi có request

export default async function HomePage() {
  const products = await getProductsFromSheet();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://foodmarket-ph.com";

  // Dữ liệu có cấu trúc Schema.org cho Google Rich Results
  const storeSchema = generateStoreSchema(siteUrl);
  const productListSchema = generateProductListSchema(products, siteUrl);
  const faqSchema = generateFAQSchema();

  return (
    <main className="flex-1 flex flex-col">
      {/* Tiêu đề ẩn ngữ nghĩa H1 chuẩn SEO Google */}
      <h1 className="sr-only">
        Food Market Philippines - Siêu Thị Đặc Sản & Thực Phẩm Nhập Khẩu Chính Hãng
      </h1>

      {/* JSON-LD Dữ liệu có cấu trúc Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Nội dung tương tác Landing Page */}
      <LandingContent initialProducts={products} />
    </main>
  );
}
