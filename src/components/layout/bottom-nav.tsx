"use client";

/**
 * Thanh điều hướng đáy màn hình chuẩn Shopee Mobile
 */

import React, { useState } from "react";
import { Home, Store, PlaySquare, Bell, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function BottomNav() {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "mall", label: "Mall", icon: Store },
    { id: "live", label: "Live & Video", icon: PlaySquare, badge: "Live" },
    { id: "notifications", label: "Thông báo", icon: Bell, badge: "12" },
    { id: "profile", label: "Tôi", icon: User },
  ];

  return (
    <nav
      aria-label="Điều hướng chính"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg"
    >
      <div className="max-w-md mx-auto flex items-center justify-around py-1.5 px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex flex-col items-center justify-center py-1 px-2 transition-colors relative min-w-[48px] min-h-[48px] cursor-pointer",
                isActive ? "text-[#ee4d2d]" : "text-gray-500 hover:text-gray-800"
              )}
            >
              <div className="relative">
                <Icon
                  className={cn("w-5 h-5", isActive ? "stroke-[2.5]" : "stroke-[1.75]")}
                />
                {tab.badge && (
                  <span className="absolute -top-1 -right-2 bg-[#ee4d2d] text-white text-[9px] font-bold px-1 rounded-full leading-none py-0.5 scale-90">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span className={cn("text-[10px] mt-0.5", isActive ? "font-bold" : "font-normal")}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

