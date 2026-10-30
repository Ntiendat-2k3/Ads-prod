# 🛒 Food Market PH - Landing Page Siêu Thị Mini (Shopee Style)

Dự án Landing Page thương mại điện tử chuyên chạy Quảng cáo chuyển đổi (Ads - Facebook/TikTok/Mess) chuẩn giao diện Mobile phong cách Shopee, sử dụng **Google Sheet làm Database** kết hợp công nghệ **Next.js ISR (Incremental Static Regeneration)** để tối ưu tốc độ và loại bỏ hoàn toàn giới hạn Rate Limit của Google.

---

## 🌟 Tính Năng Nổi Bật

1. **Giao diện chuẩn Mobile phong cách Shopee**:
   - Khung hình tối ưu trải nghiệm trên điện thoại (`max-w-md`), hiển thị lưới sản phẩm 2 cột (`grid-cols-2`).
   - Header cam Shopee với thanh tìm kiếm thông minh, giỏ hàng, thông báo.
   - Banner ưu đãi "Best Selling Products" với bộ đếm ngược Flash Sale thời gian thực.
   - Phân loại danh mục theo tab (Đồ ăn, Thú cưng, 0 calo, Mỹ phẩm...).
   - Thẻ sản phẩm có đầy đủ: Huy hiệu Yêu thích, % Giảm giá, Freeship, Giá niêm yết (PHP), Đánh giá sao, Số lượng đã bán.
   - Popup mua nhanh (Quick Modal) bóc tách toàn bộ gói combo ưu đãi từ cột Giá trên Sheet và nút điều hướng thẳng sang Landing Page chi tiết của sản phẩm đó.
   - Thanh điều hướng đáy (Bottom Navigation) chuẩn Shopee App.

2. **Google Sheet làm Database (Zero Rate Limit & Siêu Tốc)**:
   - Dữ liệu sản phẩm được đọc trực tiếp từ Google Sheet của shop.
   - Áp dụng **Next.js ISR (`revalidate: 60`)**: Web được phục vụ tĩnh từ CDN (< 0.5s), không gọi trực tiếp Google API trên từng lượt khách, chịu tải hàng trăm nghìn lượt click Ads cùng lúc mà không lo sập hay chậm.
   - Hỗ trợ **On-demand Revalidation**: Nút "Đồng bộ Sheet" nổi trên giao diện hoặc gọi API `/api/revalidate?secret=...` giúp cập nhật dữ liệu ngay lập tức khi vừa chỉnh sửa trên Google Sheet.

---

## 📊 Quy Chuẩn Cột Trên Google Sheet

Để sản phẩm hiển thị chuẩn xác nhất, trên sheet `SẢN PHẨM` cấu trúc dữ liệu như sau:

| Tên Cột | Ý Nghĩa & Dữ Liệu Mẫu |
| :--- | :--- |
| `STT` | Số thứ tự (ví dụ: `1, 2, 3...`) |
| `Ngành hàng` | Nhóm danh mục để lọc tab (ví dụ: `Đồ ăn`, `Thú cưng`, `0 calo`, `Mỹ phẩm`) |
| `Tên sp` | Tên hiển thị trên thẻ sản phẩm (ví dụ: `Sốt cay`, `Nấm khô`) |
| `Mã sp` | Mã nội bộ sản phẩm (ví dụ: `SPICY SAUCE`) |
| `Link thông tin sản phẩm` | Đường link Landing Page con khi khách bấm vào để đặt hàng |
| `Media` | Link ảnh đại diện sản phẩm (link direct image). *Nếu để trống, hệ thống sẽ tự động gán ảnh chất lượng cao tương ứng theo ngành hàng.* |
| `Giá` | Chi tiết các gói khuyến mãi (ví dụ: `buy 1 = 399 freeship \n Buy 2 take 1 = 799 freeship`). Hệ thống sẽ tự động bóc tách giá nhỏ nhất để hiển thị ra ngoài card! |

---

## 🚀 Khởi Chạy Dự Án

### 1. Cài đặt và chạy môi trường Development:
```bash
npm install
npm run dev
```
Truy cập: [http://localhost:3000](http://localhost:3000)

### 2. Build bản Production:
```bash
npm run build
npm run start
```

### 3. Cấu hình biến môi trường (`.env.local`):
```env
GOOGLE_SHEET_ID=13Sysb3EYXT9CZlPsjtUKxszzKQqBoO0cpaa3plLAEZA
GOOGLE_SHEET_GID=0
REVALIDATE_SECONDS=60
REVALIDATE_SECRET=adsprod_secret_2026
```

---

## 🔄 Cách Đồng Bộ Dữ Liệu Sau Khi Sửa Google Sheet

1. **Tự động**: Hệ thống tự động làm mới sau mỗi 60 giây khi có lượt khách truy cập mới.
2. **Thủ công tức thì**:
   - Cách 1: Bấm trực tiếp vào nút tròn **"Đồng bộ Sheet"** ở góc phải màn hình.
   - Cách 2: Gọi trực tiếp URL API trên trình duyệt:  
     `https://ten-mien-cua-ban.com/api/revalidate?secret=adsprod_secret_2026`

