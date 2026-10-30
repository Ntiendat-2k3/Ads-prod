"use client";

/**
 * Thẻ hiển thị sản phẩm 2 cột chuẩn Mobile
 */

import React from "react";
import { Star, ShoppingBag, Truck } from "lucide-react";
import { Product } from "@/types/product";
import { Badge } from "@/components/ui/badge";
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
      className="bg-white rounded-lg overflow-hidden shadow-2xs border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-200 cursor-pointer group focus-within:ring-2 focus-within:ring-[#ee4d2d]"
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* Khung ảnh sản phẩm */}
      <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={imageAlt}
          width={300}
          height={300}
          loading="lazy"
          itemProp="image"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80";
          }}
        />

        {/* Nhãn HOT / Yêu thích */}
        <div className="absolute top-1 left-0">
          <Badge variant="shopee" size="sm" className="rounded-r">
            Yêu thích
          </Badge>
        </div>

        {/* Nhãn giảm giá */}
        <div className="absolute top-0 right-0">
          <Badge variant="warning" size="sm" className="rounded-bl">
            -{product.discountPercent}%
          </Badge>
        </div>

        {/* Nhãn Freeship */}
        {product.freeShipping && (
          <div className="absolute bottom-1 left-1">
            <Badge variant="success" size="sm" className="flex items-center gap-0.5 rounded">
              <Truck className="w-2.5 h-2.5" />
              <span>Free Shipping</span>
            </Badge>
          </div>
        )}
      </div>

      {/* Thông tin sản phẩm */}
      <div className="p-2 flex flex-col flex-1 justify-between gap-1.5">
        <div>
          <h2
            itemProp="name"
            className="text-xs font-medium text-gray-800 line-clamp-2 leading-snug group-hover:text-[#ee4d2d] transition-colors"
          >
            {product.name}
          </h2>

          <div className="flex items-center gap-1 mt-0.5">
            <span
              itemProp="category"
              className="text-[10px] text-gray-400 bg-gray-100 px-1 rounded"
            >
              {product.category}
            </span>
            {product.code && (
              <span className="text-[9px] text-gray-400 font-mono">
                #{product.code}
              </span>
            )}
          </div>
        </div>

        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="priceCurrency" content="PHP" />
          <meta itemProp="price" content={String(product.displayPrice)} />
          <meta itemProp="availability" content="https://schema.org/InStock" />

          {/* Giá tiền */}
          <div className="flex items-baseline gap-1.5 flex-wrap">
            <span className="text-sm font-extrabold text-[#ee4d2d]">
              {formatPHP(product.displayPrice)}
            </span>
            <span className="text-[10px] text-gray-400 line-through">
              {formatPHP(product.originalPrice)}
            </span>
          </div>

          {/* Đánh giá sao & Lượt bán */}
          <div className="flex items-center justify-between mt-1 text-[10px] text-gray-500">
            <div className="flex items-center gap-0.5 text-amber-500 font-medium">
              <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
            </div>
            <span>Đã bán {product.soldCount}</span>
          </div>

          {/* Nút xem chi tiết / Mua */}
          <button
            type="button"
            className="w-full mt-2 bg-gradient-to-r from-orange-500 to-[#ee4d2d] text-white py-1.5 rounded text-[11px] font-bold flex items-center justify-center gap-1 active:scale-95 transition-transform shadow-2xs min-h-[34px] cursor-pointer"
          >
            <ShoppingBag className="w-3 h-3" />
            <span>Xem ưu đãi</span>
          </button>
        </div>
      </div>
    </article>
  );
}

