"use client";

/**
 * Header giao diện phong cách Shopee chuẩn Mobile
 */

import React from "react";
import { Search, ShoppingCart, MessageCircle, Camera, Sparkles } from "lucide-react";
import { STORE_CONFIG } from "@/data/constants";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  productCount: number;
}

export function Header({ searchQuery, onSearchChange, productCount }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-[#ee4d2d] to-[#ff5722] text-white shadow-md">
      {/* Thanh thông tin shop */}
      <div className="flex items-center justify-between px-3.5 pt-2.5 pb-1.5">
        <div className="flex items-center gap-1.5">
          <div className="bg-white/20 p-1 rounded-full">
            <Sparkles className="w-4 h-4 text-yellow-300" />
          </div>
          <span className="font-bold text-base tracking-tight drop-shadow-sm">
            {STORE_CONFIG.shortName}
          </span>
          <span className="bg-white/20 text-[10px] font-medium px-1.5 py-0.5 rounded-full ml-1">
            {productCount} items
          </span>
        </div>

        {/* Các biểu tượng giỏ hàng & tin nhắn */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Tin nhắn thông báo"
            className="relative p-2 hover:opacity-80 transition cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="absolute top-1 right-1 bg-yellow-400 text-black text-[9px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center">
              2
            </span>
          </button>
          <button
            type="button"
            aria-label="Giỏ hàng mua sắm"
            className="relative p-2 hover:opacity-80 transition cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute top-1 right-1 bg-yellow-400 text-black text-[9px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center">
              5
            </span>
          </button>
        </div>
      </div>

      {/* Thanh tìm kiếm phong cách Shopee */}
      <div className="px-3.5 pb-2.5">
        <div className="relative flex items-center">
          <Search className="absolute left-3 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Tìm món ngon, đồ ăn vặt, sốt cay, men vi sinh..."
            className="w-full pl-9 pr-8 py-2 rounded bg-white text-gray-800 text-xs placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-inner"
          />
          <Camera className="absolute right-3 w-4 h-4 text-gray-400 cursor-pointer" />
        </div>
      </div>

      {/* Dòng ticker ưu đãi freeship */}
      <div className="bg-[#d73211] px-3.5 py-1 text-[11px] flex items-center justify-between font-medium">
        <span>🚚 {STORE_CONFIG.shippingPolicy}</span>
        <span className="text-yellow-300 font-semibold">Ưu đãi hôm nay</span>
      </div>
    </header>
  );
}

