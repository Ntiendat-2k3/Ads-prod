"use client";

/**
 * Section hiển thị lưới sản phẩm 2 cột kèm sắp xếp và trạng thái rỗng
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
    <section aria-label="Danh sách sản phẩm" className="flex-1">
      {/* Thanh điều khiển sắp xếp */}
      <div className="bg-white px-3 py-2 border-b border-gray-100 flex items-center justify-between text-xs text-gray-600">
        <span className="font-medium">
          Hiển thị: <strong className="text-gray-900">{products.length}</strong> sản phẩm
        </span>

        <div className="flex items-center gap-1">
          <ArrowUpDown className="w-3.5 h-3.5 text-gray-400" />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            aria-label="Sắp xếp sản phẩm"
            className="bg-transparent font-medium text-gray-700 focus:outline-none cursor-pointer py-1"
          >
            <option value="default">Phổ biến</option>
            <option value="best_seller">Bán chạy nhất</option>
            <option value="price_asc">Giá: Thấp đến cao</option>
            <option value="price_desc">Giá: Cao đến thấp</option>
          </select>
        </div>
      </div>

      {/* Lưới sản phẩm 2 cột (Grid-cols-2) */}
      <div className="px-3 pt-3">
        {products.length > 0 ? (
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg p-8 text-center text-gray-500 my-4 shadow-2xs">
            <AlertCircle className="w-10 h-10 text-gray-300 mx-auto mb-2" />
            <p className="text-sm font-medium">Không tìm thấy sản phẩm phù hợp</p>
            <p className="text-xs text-gray-400 mt-1">
              Thử tìm kiếm với từ khóa khác hoặc chuyển danh mục
            </p>
            <button
              type="button"
              onClick={onResetFilters}
              className="mt-3 text-xs text-[#ee4d2d] font-bold underline cursor-pointer p-2"
            >
              Xem tất cả sản phẩm
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

