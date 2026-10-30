import React from "react";
import { ShieldCheck, Truck, Headphones, RotateCcw } from "lucide-react";
import { STORE_CONFIG } from "@/data/constants";

export function Footer() {
  return (
    <footer className="bg-stone-50 border-t border-stone-200/80 mt-6 pt-6 pb-12 px-4 text-stone-600">
      {/* Cam kết thương hiệu */}
      <div className="grid grid-cols-2 gap-3 pb-6 border-b border-stone-200/60 text-xs">
        <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white border border-stone-200/50">
          <Truck className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-stone-900">Giao hàng COD</p>
            <p className="text-[10px] text-stone-500">Kiểm tra trước khi trả tiền</p>
          </div>
        </div>

        <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white border border-stone-200/50">
          <ShieldCheck className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-stone-900">100% Chính hãng</p>
            <p className="text-[10px] text-stone-500">Nguồn gốc xuất xứ rõ ràng</p>
          </div>
        </div>

        <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white border border-stone-200/50">
          <RotateCcw className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-stone-900">Đổi trả 7 ngày</p>
            <p className="text-[10px] text-stone-500">Bảo vệ quyền lợi người mua</p>
          </div>
        </div>

        <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white border border-stone-200/50">
          <Headphones className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-stone-900">Hỗ trợ nhanh</p>
            <p className="text-[10px] text-stone-500">{STORE_CONFIG.hotline}</p>
          </div>
        </div>
      </div>

      {/* Thông tin cửa hàng */}
      <div className="pt-4 text-center space-y-1">
        <p className="text-xs font-bold text-stone-900">{STORE_CONFIG.name}</p>
        <p className="text-[11px] text-stone-500">{STORE_CONFIG.slogan}</p>
        <p className="text-[10px] text-stone-400 mt-2">
          © {new Date().getFullYear()} {STORE_CONFIG.shortName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
