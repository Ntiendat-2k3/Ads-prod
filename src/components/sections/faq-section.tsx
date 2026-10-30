"use client";

/**
 * Section câu hỏi thường gặp (Minimalist FAQ Accordion)
 */

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_ITEMS } from "@/data/constants";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Mở sẵn câu đầu tiên cho tiện xem

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section aria-label="Câu hỏi thường gặp" className="px-4 py-4">
      <div className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-xs">
        <div className="flex items-center gap-2 mb-3.5">
          <div className="p-1.5 rounded-lg bg-orange-50 text-orange-600">
            <HelpCircle className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
              Câu Hỏi Thường Gặp
            </h2>
            <p className="text-[10px] text-stone-500">
              Giải đáp thắc mắc về chính sách giao nhận và thanh toán
            </p>
          </div>
        </div>

        <div className="space-y-2">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="border border-stone-200/70 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-3 text-left text-xs font-semibold text-stone-800 bg-stone-50/70 hover:bg-stone-100/80 transition cursor-pointer min-h-[44px]"
                >
                  <span className="pr-2">{item.question}</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-stone-400 transition-transform duration-200 shrink-0",
                      isOpen && "rotate-180 text-orange-600"
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="p-3 text-[11px] text-stone-600 bg-white border-t border-stone-100 leading-relaxed animate-in fade-in duration-150">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
