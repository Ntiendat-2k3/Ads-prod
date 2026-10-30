import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { STORE_CONFIG } from "@/data/constants";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://foodmarket-ph.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${STORE_CONFIG.name} | Siêu Thị Đặc Sản & Thực Phẩm Nhập Khẩu`,
    template: `%s | ${STORE_CONFIG.shortName}`,
  },
  description:
    "Mua sắm đặc sản, sốt cay, men vi sinh, đồ ăn vặt nhập khẩu chính hãng tại Philippines. Giảm tới 50%, miễn phí giao hàng COD toàn quốc. Đặt hàng ngay hôm nay!",
  keywords: [
    STORE_CONFIG.name,
    STORE_CONFIG.shortName,
    "Sốt cay Philippines",
    "Nấm khô",
    "Men vi sinh thú cưng",
    "Đường la hán quả",
    "Đặc sản nhập khẩu",
    "Freeship COD",
  ],
  authors: [{ name: STORE_CONFIG.name }],
  creator: STORE_CONFIG.name,
  publisher: STORE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
    title: `${STORE_CONFIG.name} | Siêu Thị Đặc Sản & Thực Phẩm Nhập Khẩu`,
    description:
      "Mua sắm đặc sản, sốt cay, men vi sinh, đồ ăn vặt nhập khẩu chính hãng tại Philippines. Giảm tới 50%, miễn phí giao hàng COD toàn quốc.",
    siteName: STORE_CONFIG.shortName,
    images: [
      {
        url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: `${STORE_CONFIG.name} - Siêu Thị Đặc Sản Chính Hãng`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${STORE_CONFIG.name} | Siêu Thị Đặc Sản & Thực Phẩm Nhập Khẩu`,
    description:
      "Mua sắm đặc sản, sốt cay, men vi sinh nhập khẩu Philippines. Giảm tới 50%, Freeship COD.",
    images: [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#ea580c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={inter.variable}>
      <body className="bg-stone-100/70 min-h-screen text-stone-900 font-sans antialiased selection:bg-orange-500 selection:text-white">
        {/* Khung giao diện cao cấp: 100% fluid trên điện thoại, thanh lịch trên màn hình lớn */}
        <div className="w-full max-w-xl mx-auto min-h-screen bg-white shadow-soft relative flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
