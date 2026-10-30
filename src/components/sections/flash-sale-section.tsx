"use client";

/**
 * Banner quảng cáo & Flash Sale với phong cách thiết kế hiện đại, thanh lịch
 */

import React from "react";
import { Clock, ShieldCheck, Truck, RotateCcw, Sparkles } from "lucide-react";
import { useCountdown } from "@/hooks/use-countdown";
import { STORE_CONFIG } from "@/data/constants";

export function FlashSaleSection() {
  const { formattedHours, formattedMinutes, formattedSeconds } = useCountdown(2, 45, 18);

  return (
    <section aria-label="Khuyến mãi nổi bật" className="px-4 pt-3.5 pb-2">
      {/* Banner chính tinh tế */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-stone-900 via-stone-850 to-orange-950 text-white p-5 shadow-card border border-stone-800/60">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-orange-500/20 text-orange-400 border border-orange-500/30 font-semibold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2 backdrop-blur-xs">
            <Sparkles className="w-3 h-3 text-orange-400" />
            <span>Flash Deal Hôm Nay</span>
          </div>

          <h2 className="text-xl font-extrabold tracking-tight text-white leading-tight">
            Ưu Đãi Đặc Sản & Thực Phẩm
          </h2>

          <p className="text-xs text-stone-300 mt-1 max-w-[280px] leading-relaxed">
            {STORE_CONFIG.slogan} — Giảm tới <span className="text-orange-400 font-bold">50%</span> các combo bán chạy nhất.
          </p>

          {/* Bộ đếm ngược thời gian kiểu hiện đại */}
          <div className="mt-4 flex items-center gap-2">
            <div className="flex items-center gap-1 text-[11px] text-stone-400">
              <Clock className="w-3.5 h-3.5 text-orange-400" />
              <span>Kết thúc sau:</span>
            </div>

            <div className="flex items-center gap-1 font-mono text-xs font-bold">
              <span className="bg-white/10 px-2 py-0.5 rounded border border-white/10 text-white">
                {formattedHours}h
              </span>
              <span className="text-stone-500">:</span>
              <span className="bg-white/10 px-2 py-0.5 rounded border border-white/10 text-white">
                {formattedMinutes}m
              </span>
              <span className="text-stone-500">:</span>
              <span className="bg-white/10 px-2 py-0.5 rounded border border-white/10 text-orange-400">
                {formattedSeconds}s
              </span>
            </div>
          </div>
        </div>

        {/* Ánh sáng nền trang trí trang nhã */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-orange-500/20 rounded-full blur-2xl pointer-events-none" />
      </div>

      {/* Dải cam kết uy tín tối giản */}
      <div className="grid grid-cols-3 gap-2 mt-2.5">
        <div className="flex items-center gap-1.5 p-2 rounded-xl bg-stone-50 border border-stone-200/60 text-[11px] text-stone-700 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-orange-600 shrink-0" />
          <span className="truncate">100% Chính Hãng</span>
        </div>
        <div className="flex items-center gap-1.5 p-2 rounded-xl bg-stone-50 border border-stone-200/60 text-[11px] text-stone-700 font-medium">
          <Truck className="w-3.5 h-3.5 text-orange-600 shrink-0" />
          <span className="truncate">Kiểm tra khi nhận</span>
        </div>
        <div className="flex items-center gap-1.5 p-2 rounded-xl bg-stone-50 border border-stone-200/60 text-[11px] text-stone-700 font-medium">
          <RotateCcw className="w-3.5 h-3.5 text-orange-600 shrink-0" />
          <span className="truncate">Đổi trả 7 ngày</span>
        </div>
      </div>
    </section>
  );
}
