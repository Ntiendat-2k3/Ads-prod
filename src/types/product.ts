/**
 * Định nghĩa kiểu dữ liệu cho sản phẩm, bộ lọc và các gói khuyến mãi
 */

export interface ComboOption {
  quantityText: string;
  priceText: string;
  rawText: string;
}

export interface Product {
  id: string;
  stt: number;
  category: string;
  name: string;
  code: string;
  landingUrl: string;
  image: string;
  rawPrice: string;
  displayPrice: number;
  originalPrice: number;
  discountPercent: number;
  combos: ComboOption[];
  soldCount: string;
  rating: number;
  freeShipping: boolean;
}

export type SortOption = "default" | "best_seller" | "price_asc" | "price_desc";

export interface SheetRawRow {
  STT?: string;
  "Ngành hàng"?: string;
  "Tên sp"?: string;
  "Mã sp"?: string;
  "Link thông tin sản phẩm"?: string;
  Media?: string;
  Giá?: string;
  [key: string]: string | undefined;
}
