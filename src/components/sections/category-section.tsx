"use client";

/**
 * Thanh chọn danh mục sản phẩm (Minimalist Category Pills)
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
      className="bg-white/95 backdrop-blur-md border-b border-stone-200/80 px-4 py-2.5 sticky top-[95px] z-30"
    >
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          const count = categoryCounts[cat] || 0;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => onSelectCategory(cat)}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs whitespace-nowrap font-medium transition-all duration-150 shrink-0 cursor-pointer",
                isActive
                  ? "bg-stone-900 text-white shadow-xs font-semibold"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200/80 hover:text-stone-900"
              )}
            >
              {getCategoryIcon(cat)}
              <span>{cat}</span>
              <span
                className={cn(
                  "text-[10px] px-1.5 py-0.2 rounded-full font-mono",
                  isActive ? "bg-white/20 text-white" : "bg-stone-200/70 text-stone-500"
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
