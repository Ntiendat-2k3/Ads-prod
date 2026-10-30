"use client";

/**
 * Header tối giản, hiện đại và sang trọng (Clean Modern Header)
 * Lược bỏ các biểu tượng giả lập không cần thiết, tập trung vào tìm kiếm và nhận diện thương hiệu
 */

import React from "react";
import { Search, X, ShieldCheck, PhoneCall } from "lucide-react";
import { STORE_CONFIG } from "@/data/constants";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  productCount: number;
}

export function Header({ searchQuery, onSearchChange, productCount }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 transition-all duration-200">
      {/* Hàng trên: Logo & Hotline tư vấn */}
      <div className="flex items-center justify-between px-4 pt-3 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-black text-sm shadow-xs">
            TP
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-stone-900 text-base tracking-tight leading-none">
                {STORE_CONFIG.shortName}
              </span>
              <span className="inline-flex items-center gap-0.5 text-[9px] font-semibold bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded-full border border-emerald-200/60">
                <ShieldCheck className="w-2.5 h-2.5" /> Official
              </span>
            </div>
            <p className="text-[10px] text-stone-500 font-medium mt-0.5">
              {productCount} sản phẩm tuyển chọn
            </p>
          </div>
        </div>

        {/* Nút gọi hotline hỗ trợ nhanh (CTA thực tế thay vì giỏ hàng giả) */}
        <a
          href={`tel:${STORE_CONFIG.hotline.replace(/[^0-9+]/g, "")}`}
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-stone-700 bg-stone-100/80 hover:bg-stone-100 px-2.5 py-1.5 rounded-full border border-stone-200/60 transition cursor-pointer"
        >
          <PhoneCall className="w-3 h-3 text-orange-600" />
          <span>Hotline</span>
        </a>
      </div>

      {/* Hàng dưới: Thanh tìm kiếm sản phẩm tối giản */}
      <div className="px-4 pb-3">
        <div className="relative flex items-center">
          <Search className="absolute left-3.5 w-4 h-4 text-stone-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Tìm theo tên sản phẩm, sốt cay, men vi sinh..."
            className="w-full pl-9 pr-9 py-2 rounded-xl bg-stone-100/70 border border-transparent text-stone-900 text-xs placeholder:text-stone-400 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              aria-label="Xóa từ khóa tìm kiếm"
              className="absolute right-3 p-0.5 rounded-full text-stone-400 hover:text-stone-700 transition"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
