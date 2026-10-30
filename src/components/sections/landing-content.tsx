"use client";

/**
 * Khung nội dung chính của Landing Page
 * Quản lý trạng thái tương tác và kết hợp các section theo kiến trúc hướng khối (Section-Based)
 */

import React, { useState } from "react";
import { Product } from "@/types/product";
import { useProductFilter } from "@/hooks/use-product-filter";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BottomNav } from "@/components/layout/bottom-nav";
import { FlashSaleSection } from "@/components/sections/flash-sale-section";
import { CategorySection } from "@/components/sections/category-section";
import { ProductGridSection } from "@/components/sections/product-grid-section";
import { FAQSection } from "@/components/sections/faq-section";
import { ProductDetailModal } from "@/features/product/product-detail-modal";
import { SyncSheetButton } from "@/features/product/sync-sheet-button";

interface LandingContentProps {
  initialProducts: Product[];
}

export function LandingContent({ initialProducts }: LandingContentProps) {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    categories,
    categoryCounts,
    filteredProducts,
    resetFilters,
  } = useProductFilter(initialProducts);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Shopee Mobile */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        productCount={initialProducts.length}
      />

      {/* Banner Flash Sale (Ẩn khi đang gõ tìm kiếm) */}
      {!searchQuery && <FlashSaleSection />}

      {/* Danh mục dạng tabs */}
      <CategorySection
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        categoryCounts={categoryCounts}
      />

      {/* Lưới sản phẩm 2 cột */}
      <ProductGridSection
        products={filteredProducts}
        sortBy={sortBy}
        onSortChange={setSortBy}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onResetFilters={resetFilters}
      />

      {/* FAQ hỗ trợ tăng tỷ lệ chuyển đổi và SEO */}
      <FAQSection />

      {/* Footer thông tin cửa hàng & cam kết */}
      <Footer />

      {/* Modal chi tiết gói combo sản phẩm */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Nút hỗ trợ admin đồng bộ dữ liệu tức thì */}
      <SyncSheetButton />

      {/* Thanh điều hướng cố định dưới đáy */}
      <BottomNav />
    </div>
  );
}

