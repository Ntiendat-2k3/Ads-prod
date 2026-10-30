"use client";

/**
 * Section Flash Sale và Banner ưu đãi chính
 */

import React from "react";
import { Flame, Clock, ShieldCheck, Truck, Zap } from "lucide-react";
import { useCountdown } from "@/hooks/use-countdown";
import { STORE_CONFIG } from "@/data/constants";

export function FlashSaleSection() {
  const { formattedHours, formattedMinutes, formattedSeconds } = useCountdown(2, 45, 18);

  return (
    <section aria-label="Khuyến mãi Flash Sale" className="bg-white pb-2.5">
      {/* Banner chính */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 text-white p-4 mx-3 mt-3 rounded-xl shadow-xs">
        <div className="relative z-10 max-w-[70%]">
          <div className="inline-flex items-center gap-1 bg-yellow-400 text-black font-extrabold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider mb-1">
            <Zap className="w-3 h-3 fill-black" /> Hot Deals
          </div>
          <h2 className="text-xl font-black leading-tight tracking-tight drop-shadow-xs">
            BEST SELLING PRODUCTS
          </h2>
          <p className="text-[11px] text-yellow-100 mt-1 font-medium">
            {STORE_CONFIG.slogan}
          </p>
        </div>

        {/* Huy hiệu giảm giá tròn */}
        <div className="absolute -right-2 -bottom-2 bg-yellow-400 text-red-600 w-24 h-24 rounded-full flex flex-col items-center justify-center font-black rotate-[-12deg] shadow-lg border-2 border-white">
          <span className="text-xs uppercase">GIẢM TỚI</span>
          <span className="text-2xl leading-none">50%</span>
          <span className="text-[9px] text-black">HÔM NAY</span>
        </div>
      </div>

      {/* Cam kết thương hiệu */}
      <div className="grid grid-cols-3 gap-1 px-3 mt-2.5 text-[10px] text-gray-600 font-medium">
        <div className="flex items-center gap-1 justify-center bg-orange-50/60 py-1.5 rounded">
          <ShieldCheck className="w-3.5 h-3.5 text-[#ee4d2d]" />
          <span>100% Chính Hãng</span>
        </div>
        <div className="flex items-center gap-1 justify-center bg-orange-50/60 py-1.5 rounded">
          <Truck className="w-3.5 h-3.5 text-[#ee4d2d]" />
          <span>Freeship COD</span>
        </div>
        <div className="flex items-center gap-1 justify-center bg-orange-50/60 py-1.5 rounded">
          <Zap className="w-3.5 h-3.5 text-[#ee4d2d]" />
          <span>Giao Nhanh 24h</span>
        </div>
      </div>

      {/* Khối Flash Sale */}
      <div className="mt-3 px-3">
        <div className="flex items-center justify-between bg-gradient-to-r from-red-600 to-orange-500 text-white px-3 py-1.5 rounded-t-lg">
          <div className="flex items-center gap-1.5">
            <Flame className="w-4 h-4 fill-yellow-300 text-yellow-300 animate-bounce" />
            <span className="font-extrabold text-xs uppercase tracking-wide">
              FLASH SALE
            </span>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-mono">
            <Clock className="w-3.5 h-3.5" />
            <span className="bg-black/60 px-1 py-0.5 rounded text-[10px] font-bold">
              {formattedHours}
            </span>
            <span>:</span>
            <span className="bg-black/60 px-1 py-0.5 rounded text-[10px] font-bold">
              {formattedMinutes}
            </span>
            <span>:</span>
            <span className="bg-black/60 px-1 py-0.5 rounded text-[10px] font-bold">
              {formattedSeconds}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

