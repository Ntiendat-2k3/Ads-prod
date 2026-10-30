import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      fullWidth = false,
      children,
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      primary:
        "bg-gradient-to-r from-orange-500 to-[#ee4d2d] text-white shadow-sm hover:opacity-95 active:scale-98 focus-visible:ring-2 focus-visible:ring-orange-500",
      secondary:
        "bg-gray-100 text-gray-800 hover:bg-gray-200 active:scale-98 focus-visible:ring-2 focus-visible:ring-gray-400",
      outline:
        "border border-[#ee4d2d] text-[#ee4d2d] bg-white hover:bg-orange-50 active:scale-98 focus-visible:ring-2 focus-visible:ring-orange-500",
      ghost:
        "text-gray-600 hover:bg-gray-100 active:scale-98 focus-visible:ring-2 focus-visible:ring-gray-300",
    };

    const sizeStyles = {
      sm: "text-xs py-1.5 px-3 min-h-[36px]",
      md: "text-xs font-bold py-2.5 px-4 min-h-[44px]",
      lg: "text-sm font-extrabold py-3 px-5 min-h-[48px]",
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center rounded-lg transition-all duration-200 font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 focus-visible:outline-none",
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

