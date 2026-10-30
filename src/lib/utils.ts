/**
 * Tiện ích dùng chung cho toàn bộ dự án
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Hợp nhất class names an toàn với Tailwind CSS
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Định dạng tiền tệ Philippine Peso (PHP)
 */
export function formatPHP(amount: number): string {
  return `₱${amount.toLocaleString("en-PH")}`;
}

