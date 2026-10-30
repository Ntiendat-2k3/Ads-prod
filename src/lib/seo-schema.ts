/**
 * Trình sinh dữ liệu có cấu trúc Schema.org (JSON-LD) tối ưu SEO Google Rich Results
 */

import { Product } from "@/types/product";
import { STORE_CONFIG, FAQ_ITEMS } from "@/data/constants";

export function generateStoreSchema(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Store",
    name: STORE_CONFIG.name,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&h=630&q=80",
    url: siteUrl,
    telephone: STORE_CONFIG.hotline,
    priceRange: "₱₱",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PH",
      addressRegion: "Metro Manila",
    },
    currenciesAccepted: "PHP",
    paymentAccepted: "Cash, Cash on Delivery",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  };
}

export function generateProductListSchema(products: Product[], siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.slice(0, 15).map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        image: product.image,
        description: `Sản phẩm ${product.name} thuộc ngành hàng ${product.category}. Đặt hàng nhận ưu đãi freeship tại Philippines.`,
        sku: product.code || `PROD-${product.stt}`,
        offers: {
          "@type": "Offer",
          url: product.landingUrl || siteUrl,
          priceCurrency: "PHP",
          price: product.displayPrice,
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: product.rating,
          reviewCount: parseInt(product.soldCount.replace(/[^0-9]/g, "") || "100", 10) * 10,
        },
      },
    })),
  };
}

export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

