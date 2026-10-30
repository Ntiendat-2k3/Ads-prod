"use client";

/**
 * Section hỏi đáp thường gặp (FAQ Accordion)
 */

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_ITEMS } from "@/data/constants";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section aria-label="Câu hỏi thường gặp" className="mt-6 mx-3">
      <div className="bg-white rounded-xl p-3.5 shadow-2xs border border-gray-100">
        <div className="flex items-center gap-1.5 mb-3">
          <HelpCircle className="w-4 h-4 text-[#ee4d2d]" />
          <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
            Câu Hỏi Thường Gặp (FAQ)
          </h2>
        </div>

        <div className="space-y-2">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="border border-gray-100 rounded-lg overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-2.5 text-left text-xs font-semibold text-gray-800 bg-gray-50/70 hover:bg-gray-100 transition cursor-pointer min-h-[44px]"
                >
                  <span className="pr-2">{item.question}</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-gray-400 transition-transform duration-200 shrink-0",
                      isOpen && "rotate-180 text-[#ee4d2d]"
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="p-2.5 text-[11px] text-gray-600 bg-white border-t border-gray-100 leading-relaxed animate-in fade-in duration-200">
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

