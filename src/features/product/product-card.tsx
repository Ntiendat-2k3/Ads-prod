"use client";

/**
 * Thẻ hiển thị sản phẩm tinh tế, hiện đại (Clean Minimalist Product Card)
 */

import React from "react";
import { Star, ArrowRight } from "lucide-react";
import { Product } from "@/types/product";
import { formatPHP } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  const imageAlt = `${product.name} - ${product.category} chính hãng Philippines`;

  return (
    <article
      onClick={() => onSelect(product)}
      className="group bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-card hover:border-stone-300 transition-all duration-200 cursor-pointer flex flex-col justify-between"
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* Khung ảnh sản phẩm */}
      <div className="relative aspect-square w-full overflow-hidden bg-stone-100">
        <img
          src={product.image}
          alt={imageAlt}
          width={300}
          height={300}
          loading="lazy"
          itemProp="image"
          className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80";
          }}
        />

        {/* Nhãn giảm giá tinh tế */}
        {product.discountPercent > 0 && (
          <div className="absolute top-2 left-2 bg-stone-900/85 text-white text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-xs shadow-xs">
            -{product.discountPercent}%
          </div>
        )}

        {/* Nhãn Free Shipping tối giản */}
        {product.freeShipping && (
          <div className="absolute bottom-2 left-2 bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-[9px] font-semibold px-1.5 py-0.5 rounded-full">
            Freeship
          </div>
        )}
      </div>

      {/* Thông tin sản phẩm */}
      <div className="p-3 flex flex-col flex-1 justify-between gap-2">
        <div>
          <span
            itemProp="category"
            className="text-[10px] font-medium text-stone-500 uppercase tracking-wider"
          >
            {product.category}
          </span>

          <h2
            itemProp="name"
            className="text-xs font-bold text-stone-900 line-clamp-2 leading-snug mt-0.5 group-hover:text-orange-600 transition-colors"
          >
            {product.name}
          </h2>
        </div>

        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="priceCurrency" content="PHP" />
          <meta itemProp="price" content={String(product.displayPrice)} />
          <meta itemProp="availability" content="https://schema.org/InStock" />

          {/* Khối giá tiền */}
          <div className="flex items-baseline gap-1.5">
            <span className="text-sm font-black text-stone-900">
              {formatPHP(product.displayPrice)}
            </span>
            <span className="text-[11px] text-stone-400 line-through">
              {formatPHP(product.originalPrice)}
            </span>
          </div>

          {/* Đánh giá sao & Lượt bán */}
          <div className="flex items-center justify-between mt-1 text-[10px] text-stone-500 font-medium">
            <div className="flex items-center gap-0.5 text-amber-500">
              <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
              <span className="text-stone-700">{product.rating}</span>
            </div>
            <span>Đã bán {product.soldCount}</span>
          </div>

          {/* Nút xem chi tiết thanh lịch */}
          <div className="mt-2.5 w-full bg-stone-100 group-hover:bg-orange-600 group-hover:text-white text-stone-800 py-1.5 px-2 rounded-xl text-[11px] font-semibold flex items-center justify-center gap-1 transition-colors duration-150">
            <span>Xem ưu đãi</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </article>
  );
}
