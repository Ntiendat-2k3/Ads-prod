"use client";

/**
 * Modal xem chi tiết và chọn gói combo sản phẩm
 */

import React, { useState } from "react";
import { ExternalLink, ShieldCheck, Truck, CheckCircle2, Gift } from "lucide-react";
import { Product } from "@/types/product";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
      <Badge variant="shopee" size="sm" className="rounded-full">
        {product.category}
      </Badge>
      <span className="text-xs text-gray-500 font-mono">STT: #{product.stt}</span>
    </div>
  );

  return (
    <Modal isOpen={Boolean(product)} onClose={onClose} title={modalTitle}>
      <div className="p-4 overflow-y-auto space-y-3.5 no-scrollbar">
        {/* Ảnh & thông tin giá cơ bản */}
        <div className="flex gap-3">
          <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 border border-gray-100 bg-gray-50">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-sm font-bold text-gray-900 leading-snug">
              {product.name}
            </h2>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-lg font-extrabold text-[#ee4d2d]">
                {formatPHP(product.displayPrice)}
              </span>
              <span className="text-xs text-gray-400 line-through">
                {formatPHP(product.originalPrice)}
              </span>
              <Badge variant="warning" size="sm">
                -{product.discountPercent}%
              </Badge>
            </div>
            <p className="text-[11px] text-gray-500 mt-1 flex items-center gap-1">
              <Truck className="w-3 h-3 text-emerald-600" /> Miễn phí giao hàng toàn quốc
            </p>
          </div>
        </div>

        {/* Các gói combo ưu đãi */}
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <Gift className="w-4 h-4 text-[#ee4d2d]" />
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
              Chọn gói khuyến mãi (Bảng giá chi tiết):
            </h3>
          </div>

          {product.combos.length > 0 ? (
            <div className="space-y-2" role="radiogroup" aria-label="Danh sách gói combo">
              {product.combos.map((combo, idx) => {
                const isSelected = selectedComboIndex === idx;
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
                    className={`p-2.5 rounded-lg border text-xs cursor-pointer flex items-center justify-between transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ee4d2d] ${
                      isSelected
                        ? "border-[#ee4d2d] bg-orange-50/70 text-gray-900 shadow-2xs"
                        : "border-gray-200 bg-white hover:border-gray-300 text-gray-700"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 ${
                          isSelected ? "text-[#ee4d2d]" : "text-gray-300"
                        }`}
                      />
                      <span className="font-semibold text-gray-800">
                        {combo.quantityText}
                      </span>
                    </div>
                    <span className="font-extrabold text-[#ee4d2d]">
                      {combo.priceText}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-3 bg-gray-50 rounded text-xs text-gray-600 whitespace-pre-line border border-gray-100">
              {product.rawPrice || "Liên hệ để nhận báo giá chi tiết"}
            </div>
          )}
        </div>

        {/* Chính sách bán hàng */}
        <div className="bg-amber-50/60 p-2.5 rounded-lg border border-amber-100/80 text-[11px] text-amber-900 space-y-1">
          <div className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-700 shrink-0" />
            <span>Kiểm tra hàng trước khi thanh toán (COD tận nhà)</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <Truck className="w-3.5 h-3.5 text-amber-700 shrink-0" />
            <span>Đổi trả 1-1 trong 7 ngày nếu lỗi từ nhà sản xuất</span>
          </div>
        </div>
      </div>

      {/* Footer modal */}
      <div className="p-3 border-t border-gray-100 bg-gray-50">
        <Button
          onClick={handleGoToLandingPage}
          fullWidth
          variant="primary"
          size="lg"
          className="gap-1.5"
        >
          <span>MUA NGAY TẠI TRANG CHÍNH THỨC</span>
          <ExternalLink className="w-4 h-4" />
        </Button>
      </div>
    </Modal>
  );
}

