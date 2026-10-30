"use client";

/**
 * Section danh mục sản phẩm theo dạng Tabs cuộn ngang
 */

import React from "react";
import { Utensils, Heart, Sparkles, Coffee, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategorySectionProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  categoryCounts: Record<string, number>;
}

export function CategorySection({
  categories,
  selectedCategory,
  onSelectCategory,
  categoryCounts,
}: CategorySectionProps) {
  const getCategoryIcon = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "đồ ăn":
        return <Utensils className="w-3.5 h-3.5" />;
      case "thú cưng":
        return <Heart className="w-3.5 h-3.5" />;
      case "mỹ phẩm":
        return <Sparkles className="w-3.5 h-3.5" />;
      case "0 calo":
        return <Coffee className="w-3.5 h-3.5" />;
      default:
        return <Layers className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section
      aria-label="Danh mục sản phẩm"
      className="bg-white border-b border-gray-100 px-3 py-2 sticky top-[108px] z-30 shadow-2xs"
    >
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          const count = categoryCounts[cat] || 0;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => onSelectCategory(cat)}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs whitespace-nowrap font-medium transition-all duration-200 shrink-0 cursor-pointer min-h-[36px]",
                isActive
                  ? "bg-[#ee4d2d] text-white shadow-2xs font-semibold scale-102"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              {getCategoryIcon(cat)}
              <span>{cat}</span>
              <span
                className={cn(
                  "text-[10px] px-1.5 py-0.2 rounded-full",
                  isActive ? "bg-white/25 text-white" : "bg-gray-200 text-gray-600"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

