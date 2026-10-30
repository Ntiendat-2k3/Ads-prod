"use client";

/**
 * Custom hook xử lý tìm kiếm, lọc danh mục và sắp xếp sản phẩm
 */

import { useState, useMemo } from "react";
import { Product, SortOption } from "@/types/product";

export function useProductFilter(initialProducts: Product[]) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [sortBy, setSortBy] = useState<SortOption>("default");

  // Tổng hợp danh mục và số lượng sản phẩm mỗi loại
  const { categories, categoryCounts } = useMemo(() => {
    const counts: Record<string, number> = { "Tất cả": initialProducts.length };
    const cats = new Set<string>();

    initialProducts.forEach((p) => {
      const cat = p.category || "Khác";
      cats.add(cat);
      counts[cat] = (counts[cat] || 0) + 1;
    });

    return {
      categories: ["Tất cả", ...Array.from(cats)],
      categoryCounts: counts,
    };
  }, [initialProducts]);

  // Lọc và sắp xếp theo điều kiện
  const filteredProducts = useMemo(() => {
    let list = [...initialProducts];

    // Lọc theo danh mục
    if (selectedCategory !== "Tất cả") {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // Lọc theo từ khóa tìm kiếm
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.code.toLowerCase().includes(q)
      );
    }

    // Sắp xếp
    if (sortBy === "price_asc") {
      list.sort((a, b) => a.displayPrice - b.displayPrice);
    } else if (sortBy === "price_desc") {
      list.sort((a, b) => b.displayPrice - a.displayPrice);
    } else if (sortBy === "best_seller") {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [initialProducts, selectedCategory, searchQuery, sortBy]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("Tất cả");
    setSortBy("default");
  };

  return {
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
  };
}

