"use client";

/**
 * Section hiển thị lưới sản phẩm 2 cột kèm sắp xếp và bộ lọc
 */

import React from "react";
import { ArrowUpDown, AlertCircle } from "lucide-react";
import { Product, SortOption } from "@/types/product";
import { ProductCard } from "@/features/product/product-card";

interface ProductGridSectionProps {
  products: Product[];
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  onSelectProduct: (product: Product) => void;
  onResetFilters: () => void;
}

export function ProductGridSection({
  products,
  sortBy,
  onSortChange,
  onSelectProduct,
  onResetFilters,
}: ProductGridSectionProps) {
  return (
    <section aria-label="Danh sách sản phẩm" className="flex-1 pb-6">
      {/* Thanh điều khiển số lượng & sắp xếp */}
      <div className="px-4 py-2.5 flex items-center justify-between text-xs text-stone-500 border-b border-stone-100">
        <span>
          <strong className="text-stone-900 font-bold">{products.length}</strong> sản phẩm có sẵn
        </span>

        <div className="flex items-center gap-1.5 bg-stone-100/70 px-2.5 py-1 rounded-lg">
          <ArrowUpDown className="w-3 h-3 text-stone-400" />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            aria-label="Sắp xếp sản phẩm"
            className="bg-transparent font-medium text-stone-700 focus:outline-none cursor-pointer text-xs"
          >
            <option value="default">Phổ biến</option>
            <option value="best_seller">Bán chạy nhất</option>
            <option value="price_asc">Giá: Thấp đến cao</option>
            <option value="price_desc">Giá: Cao đến thấp</option>
          </select>
        </div>
      </div>

      {/* Lưới sản phẩm 2 cột */}
      <div className="px-4 pt-3.5">
        {products.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:gap-3.5">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
              />
            ))}
          </div>
        ) : (
          <div className="bg-stone-50 rounded-2xl p-8 text-center text-stone-500 my-4 border border-stone-200/60">
            <AlertCircle className="w-10 h-10 text-stone-300 mx-auto mb-2" />
            <p className="text-sm font-semibold text-stone-800">Không tìm thấy sản phẩm phù hợp</p>
            <p className="text-xs text-stone-400 mt-1">
              Thử tìm kiếm với từ khóa khác hoặc bấm nút bên dưới để xem lại tất cả
            </p>
            <button
              type="button"
              onClick={onResetFilters}
              className="mt-3.5 inline-flex text-xs text-orange-600 font-bold underline cursor-pointer p-1.5"
            >
              Xem tất cả sản phẩm
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
