"use client";

/**
 * Khung nội dung chính của Landing Page
 * Tối giản giao diện, lược bỏ thanh điều hướng giả lập không cần thiết
 */

import React, { useState } from "react";
import { Product } from "@/types/product";
import { useProductFilter } from "@/hooks/use-product-filter";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
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
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header thương hiệu tối giản */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        productCount={initialProducts.length}
      />

      {/* Banner Flash Sale thanh lịch (Tự động ẩn khi tìm kiếm) */}
      {!searchQuery && <FlashSaleSection />}

      {/* Bộ lọc danh mục dạng pills */}
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

      {/* Phần hỏi đáp tăng uy tín */}
      <FAQSection />

      {/* Footer thông tin cửa hàng */}
      <Footer />

      {/* Modal chi tiết gói combo sản phẩm */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Nút hỗ trợ admin đồng bộ Google Sheet tức thì */}
      <SyncSheetButton />
    </div>
  );
}
