import React from "react";
import { ShieldCheck, Truck, Headphones, RotateCcw } from "lucide-react";
import { STORE_CONFIG } from "@/data/constants";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-6 pt-5 pb-24 px-4 text-gray-600">
      {/* Cam kết dịch vụ */}
      <div className="grid grid-cols-2 gap-3 pb-5 border-b border-gray-100 text-xs">
        <div className="flex items-start gap-2">
          <Truck className="w-4 h-4 text-[#ee4d2d] shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-gray-900">Giao hàng COD</p>
            <p className="text-[11px] text-gray-500">Kiểm tra trước khi trả tiền</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-[#ee4d2d] shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-gray-900">100% Chính hãng</p>
            <p className="text-[11px] text-gray-500">Đảm bảo nguồn gốc rõ ràng</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <RotateCcw className="w-4 h-4 text-[#ee4d2d] shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-gray-900">Đổi trả 7 ngày</p>
            <p className="text-[11px] text-gray-500">Miễn phí nếu có lỗi từ nhà sản xuất</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Headphones className="w-4 h-4 text-[#ee4d2d] shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-gray-900">Hỗ trợ 24/7</p>
            <p className="text-[11px] text-gray-500">Hotline: {STORE_CONFIG.hotline}</p>
          </div>
        </div>
      </div>

      {/* Thông tin thương hiệu */}
      <div className="pt-4 text-center space-y-1">
        <p className="text-xs font-bold text-gray-900">{STORE_CONFIG.name}</p>
        <p className="text-[11px] text-gray-500">{STORE_CONFIG.slogan}</p>
        <p className="text-[10px] text-gray-400 mt-2">
          © {new Date().getFullYear()} {STORE_CONFIG.shortName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

