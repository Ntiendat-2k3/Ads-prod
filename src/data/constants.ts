/**
 * Dữ liệu tĩnh và cấu hình mặc định cho hệ thống Landing Page
 */

export const STORE_CONFIG = {
  name: "Food Market Philippines",
  shortName: "Food Market PH",
  slogan: "Siêu thị đặc sản & thực phẩm nhập khẩu chính hãng",
  currency: "PHP",
  currencySymbol: "₱",
  hotline: "+63-912-345-6789",
  shippingPolicy: "Miễn phí vận chuyển COD toàn quốc",
  deliveryTime: "1 - 3 ngày tại Metro Manila, 3 - 5 ngày toàn quốc",
  guarantee: "100% Chính hãng - Kiểm tra hàng trước khi thanh toán",
};

export const CATEGORY_FALLBACK_IMAGES: Record<string, string[]> = {
  "Đồ ăn": [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80",
  ],
  "Thú cưng": [
    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80",
  ],
  "Mỹ phẩm": [
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
  ],
  "0 calo": [
    "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
  ],
};

export const DEFAULT_PRODUCT_IMAGE =
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80";

export const FAQ_ITEMS = [
  {
    question: "Tôi có được kiểm tra hàng trước khi thanh toán không?",
    answer:
      "Có, quý khách được quyền mở gói hàng kiểm tra đúng sản phẩm, mã hàng và số lượng trước khi thanh toán tiền (COD) cho shipper.",
  },
  {
    question: "Thời gian giao hàng tại Philippines là bao lâu?",
    answer:
      "Thời gian giao hàng trung bình từ 1 - 3 ngày làm việc đối với khu vực Metro Manila, và từ 3 - 5 ngày đối với các tỉnh thành khác.",
  },
  {
    question: "Phí vận chuyển được tính như thế nào?",
    answer:
      "Hầu hết các đơn hàng và combo ưu đãi từ 2 sản phẩm trở lên đều được áp dụng chính sách Miễn phí vận chuyển (Free Shipping COD) toàn quốc.",
  },
  {
    question: "Chính sách đổi trả sản phẩm ra sao?",
    answer:
      "Shop hỗ trợ đổi trả 1 đổi 1 miễn phí trong vòng 7 ngày nếu sản phẩm có lỗi từ nhà sản xuất hoặc hư hại do vận chuyển.",
  },
];

