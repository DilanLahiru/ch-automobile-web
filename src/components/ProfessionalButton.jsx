import React from "react";
import { cn } from "../lib/utils";

/**
 * Professional Button Component
 * Industry-standard minimalist design with smooth interactions
 * 
 * Variants: primary, secondary, ghost, danger, success
 * Sizes: sm, md, lg, xl
 */

const ProfessionalButton = React.forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      icon: Icon = null,
      iconPosition = "left",
      isLoading = false,
      disabled = false,
      fullWidth = false,
      rounded = "rounded-lg",
      href = null,
      className = "",
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 hover:shadow-md";

    // Size variants
    const sizes = {
      sm: "px-3 py-1.5 text-xs gap-1.5",
      md: "px-4 py-2 text-sm gap-2",
      lg: "px-6 py-3 text-base gap-2",
      xl: "px-8 py-4 text-lg gap-3",
    };

    // Color variants with minimalist aesthetic
    const variants = {
      primary: {
        base: "bg-cyan-600 text-white border border-cyan-600",
        hover: "hover:bg-cyan-700 hover:border-cyan-700 focus-visible:ring-cyan-500",
        active: "active:bg-cyan-800",
      },
      secondary: {
        base: "bg-gray-100 text-gray-900 border border-gray-300",
        hover: "hover:bg-gray-200 hover:border-gray-400 focus-visible:ring-gray-500",
        active: "active:bg-gray-300",
      },
      ghost: {
        base: "bg-transparent text-gray-700 border border-gray-300",
        hover: "hover:bg-gray-50 hover:border-gray-400 focus-visible:ring-gray-500",
        active: "active:bg-gray-100",
      },
      outline: {
        base: "bg-transparent text-cyan-600 border-2 border-cyan-600",
        hover: "hover:bg-cyan-50 focus-visible:ring-cyan-500",
        active: "active:bg-cyan-100",
      },
      danger: {
        base: "bg-red-600 text-white border border-red-600",
        hover: "hover:bg-red-700 hover:border-red-700 focus-visible:ring-red-500",
        active: "active:bg-red-800",
      },
      success: {
        base: "bg-emerald-600 text-white border border-emerald-600",
        hover: "hover:bg-emerald-700 hover:border-emerald-700 focus-visible:ring-emerald-500",
        active: "active:bg-emerald-800",
      },
    };

    const variantStyles =
      variants[variant] ||
      variants.primary;
    const sizeStyle = sizes[size] || sizes.md;

    const buttonClasses = cn(
      baseStyles,
      sizeStyle,
      variantStyles.base,
      variantStyles.hover,
      variantStyles.active,
      rounded = "rounded-lg",
      fullWidth && "w-full",
      className
    );

    const content = (
      <>
        {Icon && iconPosition === "left" && (
          <Icon className={cn("shrink-0", sizeIconMap[size])} />
        )}
        {isLoading && (
          <svg
            className="animate-spin shrink-0"
            style={{ width: sizeIconMap[size], height: sizeIconMap[size] }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        <span className={isLoading ? "opacity-75" : ""}>{children}</span>
        {Icon && iconPosition === "right" && (
          <Icon className={cn("shrink-0", sizeIconMap[size])} />
        )}
      </>
    );

    // Icon size mapping based on button size
    const sizeIconMap = {
      sm: "w-3.5 h-3.5",
      md: "w-4 h-4",
      lg: "w-5 h-5",
      xl: "w-6 h-6",
    };

    if (href) {
      return (
        <a href={href} className={buttonClasses} ref={ref} {...props}>
          {content}
        </a>
      );
    }

    return (
      <button
        className={buttonClasses}
        disabled={disabled || isLoading}
        ref={ref}
        {...props}
      >
        {content}
      </button>
    );
  }
);

ProfessionalButton.displayName = "ProfessionalButton";

export default ProfessionalButton;
