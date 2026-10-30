/**
 * Xử lý kết nối Google Sheet, trích xuất và chuẩn hóa dữ liệu sản phẩm
 */

import Papa from "papaparse";
import { Product, SheetRawRow, ComboOption } from "@/types/product";
import { CATEGORY_FALLBACK_IMAGES, DEFAULT_PRODUCT_IMAGE } from "@/data/constants";

const SPREADSHEET_ID =
  process.env.GOOGLE_SHEET_ID || "13Sysb3EYXT9CZlPsjtUKxszzKQqBoO0cpaa3plLAEZA";
const SHEET_GID = process.env.GOOGLE_SHEET_GID || "0";
const REVALIDATE_SECONDS = parseInt(process.env.REVALIDATE_SECONDS || "60", 10);

/**
 * Tách và làm sạch văn bản giá nhiều dòng thành danh sách gói combo
 */
function parseCombos(rawPrice: string): { combos: ComboOption[]; lowestPrice: number } {
  if (!rawPrice || !rawPrice.trim()) {
    return { combos: [], lowestPrice: 299 };
  }

  const lines = rawPrice
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  const combos: ComboOption[] = [];
  const foundPrices: number[] = [];

  for (const line of lines) {
    if (line.includes("=")) {
      const parts = line.split("=");
      const quantityText = parts[0].trim();
      const priceText = parts.slice(1).join("=").trim();
      combos.push({
        quantityText,
        priceText,
        rawText: line,
      });

      const numMatch = priceText.match(/(\d+)/);
      if (numMatch) {
        foundPrices.push(parseInt(numMatch[1], 10));
      }
    } else {
      combos.push({
        quantityText: "Gói cơ bản",
        priceText: line,
        rawText: line,
      });
      const numMatch = line.match(/(\d+)/);
      if (numMatch) {
        foundPrices.push(parseInt(numMatch[1], 10));
      }
    }
  }

  const lowestPrice = foundPrices.length > 0 ? Math.min(...foundPrices) : 299;

  return { combos, lowestPrice };
}

/**
 * Tạo số lượt bán và đánh giá sao ngẫu nhiên nhưng cố định theo STT
 */
function generateProductStats(index: number) {
  const soldList = ["542", "890", "1.1k", "1.4k", "2.3k", "3.1k", "980", "1.7k"];
  const ratingList = [4.8, 4.9, 5.0, 4.7, 4.9];
  return {
    soldCount: soldList[index % soldList.length],
    rating: ratingList[index % ratingList.length],
  };
}

/**
 * Lấy danh sách sản phẩm từ Google Sheet với cơ chế ISR Cache của Next.js
 */
export async function getProductsFromSheet(): Promise<Product[]> {
  const csvUrl = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=${SHEET_GID}`;

  try {
    const response = await fetch(csvUrl, {
      next: {
        revalidate: REVALIDATE_SECONDS,
        tags: ["google-sheet-products"],
      },
    });

    if (!response.ok) {
      throw new Error(`Lỗi tải dữ liệu Google Sheet: HTTP ${response.status}`);
    }

    const csvText = await response.text();

    const parsed = Papa.parse<SheetRawRow>(csvText, {
      header: true,
      skipEmptyLines: true,
    });

    const products: Product[] = [];

    parsed.data.forEach((row, index) => {
      const name = row["Tên sp"]?.trim();
      if (!name) return;

      const category = row["Ngành hàng"]?.trim() || "Khác";
      const code = row["Mã sp"]?.trim() || "";
      const landingUrl = row["Link thông tin sản phẩm"]?.trim() || "#";
      const rawPrice = row["Giá"]?.trim() || "";
      const rawMedia = row["Media"]?.trim() || "";

      let image = rawMedia;
      if (!image || !image.startsWith("http")) {
        const fallbackList = CATEGORY_FALLBACK_IMAGES[category] || [DEFAULT_PRODUCT_IMAGE];
        image = fallbackList[index % fallbackList.length];
      }

      const { combos, lowestPrice } = parseCombos(rawPrice);
      const displayPrice = lowestPrice;
      const originalPrice = Math.round((displayPrice * 1.5) / 10) * 10;
      const discountPercent = Math.round(
        ((originalPrice - displayPrice) / originalPrice) * 100
      );

      const stats = generateProductStats(index);

      products.push({
        id: `prod-${index + 1}`,
        stt: parseInt(row["STT"] || `${index + 1}`, 10) || index + 1,
        category,
        name,
        code,
        landingUrl,
        image,
        rawPrice,
        displayPrice,
        originalPrice,
        discountPercent,
        combos,
        soldCount: stats.soldCount,
        rating: stats.rating,
        freeShipping: rawPrice.toLowerCase().includes("freeship") || true,
      });
    });

    return products;
  } catch (error) {
    console.error("Lỗi khi kết nối Google Sheet:", error);
    return [];
  }
}

