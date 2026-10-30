"use client";

/**
 * Modal xem chi tiết và chọn gói combo ưu đãi (Modern Quick-View Sheet)
 */

import React, { useState } from "react";
import { ExternalLink, ShieldCheck, Truck, CheckCircle2, Gift } from "lucide-react";
import { Product } from "@/types/product";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { formatPHP } from "@/lib/utils";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const [selectedComboIndex, setSelectedComboIndex] = useState(0);

  if (!product) return null;

  const handleGoToLandingPage = () => {
    if (product.landingUrl && product.landingUrl !== "#") {
      window.open(product.landingUrl, "_blank", "noopener,noreferrer");
    } else {
      alert("Sản phẩm chưa cập nhật link Landing Page chi tiết.");
    }
  };

  const modalTitle = (
    <div className="flex items-center gap-2">
      <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200/60">
        {product.category}
      </span>
      {product.code && (
        <span className="text-xs text-stone-400 font-mono">#{product.code}</span>
      )}
    </div>
  );

  return (
    <Modal isOpen={Boolean(product)} onClose={onClose} title={modalTitle}>
      <div className="p-4 overflow-y-auto space-y-4 no-scrollbar">
        {/* Ảnh & thông tin giá cơ bản */}
        <div className="flex gap-3.5">
          <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 border border-stone-200/70 bg-stone-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-sm font-extrabold text-stone-900 leading-snug">
              {product.name}
            </h2>

            <div className="flex items-baseline gap-2 mt-1.5">
              <span className="text-lg font-black text-stone-900">
                {formatPHP(product.displayPrice)}
              </span>
              <span className="text-xs text-stone-400 line-through">
                {formatPHP(product.originalPrice)}
              </span>
              <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded">
                -{product.discountPercent}%
              </span>
            </div>

            <p className="text-[11px] text-stone-500 mt-1 flex items-center gap-1">
              <Truck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Giao hàng COD tận nơi tại Philippines</span>
            </p>
          </div>
        </div>

        {/* Các gói combo ưu đãi */}
        <div>
          <div className="flex items-center gap-1.5 mb-2.5">
            <Gift className="w-4 h-4 text-orange-600" />
            <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wide">
              Bảng giá các gói ưu đãi:
            </h3>
          </div>

          {product.combos.length > 0 ? (
            <div className="space-y-2" role="radiogroup" aria-label="Danh sách gói combo">
              {product.combos.map((combo, idx) => {
                const isSelected = selectedComboIndex === idx;
                const isBestValue = idx === product.combos.length - 1 && product.combos.length > 1;

                return (
                  <div
                    key={idx}
                    role="radio"
                    aria-checked={isSelected}
                    tabIndex={0}
                    onClick={() => setSelectedComboIndex(idx)}
                    onKeyDown={(e) => {
                      if (e.key === " " || e.key === "Enter") {
                        setSelectedComboIndex(idx);
                      }
                    }}
                    className={`p-3 rounded-xl border text-xs cursor-pointer flex items-center justify-between transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                      isSelected
                        ? "border-orange-500 bg-orange-50/50 text-stone-900 shadow-xs"
                        : "border-stone-200/80 bg-white hover:border-stone-300 text-stone-700"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 ${
                          isSelected ? "text-orange-600" : "text-stone-300"
                        }`}
                      />
                      <div>
                        <span className="font-bold text-stone-900 block">
                          {combo.quantityText}
                        </span>
                        {isBestValue && (
                          <span className="text-[9px] font-bold text-orange-600 uppercase">
                            ⭐ Gói tiết kiệm nhất
                          </span>
                        )}
                      </div>
                    </div>

                    <span className="font-extrabold text-orange-600 text-xs">
                      {combo.priceText}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-3 bg-stone-50 rounded-xl text-xs text-stone-600 whitespace-pre-line border border-stone-200/60">
              {product.rawPrice || "Liên hệ hotline để nhận báo giá chi tiết"}
            </div>
          )}
        </div>

        {/* Cam kết mua hàng */}
        <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/60 text-[11px] text-stone-600 space-y-1.5">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-stone-700 shrink-0" />
            <span>Được quyền mở hộp kiểm tra đúng hàng trước khi thanh toán COD</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-3.5 h-3.5 text-stone-700 shrink-0" />
            <span>Đổi trả 1-1 trong 7 ngày nếu có lỗi từ nhà sản xuất</span>
          </div>
        </div>
      </div>

      {/* Nút đặt mua trực tiếp */}
      <div className="p-3.5 border-t border-stone-100 bg-white">
        <Button
          onClick={handleGoToLandingPage}
          fullWidth
          variant="primary"
          size="lg"
          className="gap-2 bg-stone-900 hover:bg-stone-850 text-white rounded-xl shadow-md"
        >
          <span>ĐẶT MUA NGAY (TRANG CHÍNH THỨC)</span>
          <ExternalLink className="w-4 h-4" />
        </Button>
      </div>
    </Modal>
  );
}
