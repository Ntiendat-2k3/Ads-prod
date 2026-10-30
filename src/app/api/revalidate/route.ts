/**
 * API Route hỗ trợ làm mới dữ liệu cache ngay lập tức (On-demand Revalidation)
 * Khi khách hàng thêm/sửa sản phẩm trên Google Sheet, gọi endpoint này để cập nhật web ngay.
 */

import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const secret = searchParams.get("secret");

  const expectedSecret = process.env.REVALIDATE_SECRET || "adsprod_secret_2026";

  // Kiểm tra khóa bí mật để tránh người ngoài spam
  if (secret !== expectedSecret) {
    return NextResponse.json(
      { error: "Khóa bảo mật không chính xác (Invalid secret)" },
      { status: 401 }
    );
  }

  try {
    // Làm mới cache tag của Google Sheet và trang chủ
    revalidateTag("google-sheet-products");
    revalidatePath("/");

    return NextResponse.json({
      revalidated: true,
      message: "Đã làm mới dữ liệu từ Google Sheet thành công!",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Lỗi trong quá trình revalidate cache", details: String(error) },
      { status: 500 }
    );
  }
}

