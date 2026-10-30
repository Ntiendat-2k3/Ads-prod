"use client";

/**
 * Nút đồng bộ lại dữ liệu từ Google Sheet
 */

import React, { useState } from "react";
import { RefreshCw, Check, AlertCircle } from "lucide-react";

export function SyncSheetButton() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleSync = async () => {
    setLoading(true);
    setMessage(null);
    setStatus(null);

    try {
      const res = await fetch("/api/revalidate?secret=adsprod_secret_2026");
      const data = await res.json();

      if (res.ok && data.revalidated) {
        setStatus("success");
        setMessage("Đã đồng bộ Google Sheet thành công!");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        setStatus("error");
        setMessage(data.error || "Không thể đồng bộ");
      }
    } catch {
      setStatus("error");
      setMessage("Lỗi kết nối máy chủ");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setMessage(null);
        setStatus(null);
      }, 4000);
    }
  };

  return (
    <div className="fixed bottom-16 right-3 z-40">
      <div className="flex flex-col items-end gap-1.5">
        {message && (
          <div
            className={`text-[11px] font-medium px-2.5 py-1 rounded shadow-md flex items-center gap-1 transition-all animate-in fade-in slide-in-from-right duration-200 ${
              status === "success"
                ? "bg-emerald-600 text-white"
                : "bg-red-600 text-white"
            }`}
          >
            {status === "success" ? (
              <Check className="w-3.5 h-3.5" />
            ) : (
              <AlertCircle className="w-3.5 h-3.5" />
            )}
            <span>{message}</span>
          </div>
        )}

        <button
          type="button"
          onClick={handleSync}
          disabled={loading}
          title="Đồng bộ dữ liệu từ Google Sheet ngay lập tức"
          className="bg-gray-900/85 hover:bg-gray-900 text-white text-[11px] font-semibold pl-2.5 pr-3 py-1.5 rounded-full shadow-lg backdrop-blur-xs flex items-center gap-1.5 transition active:scale-95 disabled:opacity-50 cursor-pointer min-h-[36px]"
        >
          <RefreshCw
            className={`w-3.5 h-3.5 text-orange-400 ${loading ? "animate-spin" : ""}`}
          />
          <span>{loading ? "Đang đồng bộ..." : "Đồng bộ Sheet"}</span>
        </button>
      </div>
    </div>
  );
}

