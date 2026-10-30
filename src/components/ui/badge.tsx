import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "shopee" | "warning" | "success" | "outline";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "default",
  size = "sm",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-gray-100 text-gray-700",
    shopee: "bg-[#ee4d2d] text-white",
    warning: "bg-yellow-400 text-[#ee4d2d] font-black",
    success: "bg-emerald-600/90 text-white",
    outline: "border border-gray-200 text-gray-600 bg-white",
  };

  const sizeStyles = {
    sm: "text-[9px] px-1.5 py-0.5",
    md: "text-[11px] px-2 py-0.5",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-bold rounded-xs tracking-tight shadow-2xs leading-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

