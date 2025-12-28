/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";

/**
 * Reusable Badge component for status, categories, or tags
 */
export default function Badge({
  children,
  className = "",
  variant = "primary", // primary, secondary, outline, danger, success, warning, info
  size = "md", // sm, md
  rounded = "full", // full, md, sm
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold tracking-wide uppercase";

  const variants = {
    primary: "bg-primary-50 text-primary-700 border border-primary-100",
    secondary: "bg-secondary-50 text-secondary-700 border border-secondary-100",
    outline: "bg-transparent border border-neutral-200 text-neutral-600",
    neutral: "bg-neutral-100 text-neutral-600 border border-neutral-200",
    danger: "bg-red-50 text-red-600 border border-red-100",
    success: "bg-green-50 text-green-700 border border-green-100",
    warning: "bg-amber-50 text-amber-700 border border-amber-100",
    info: "bg-blue-50 text-blue-700 border border-blue-100",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-2.5 py-1 text-xs",
    lg: "px-3 py-1.5 text-sm",
  };

  const shapes = {
    full: "rounded-full",
    md: "rounded-md",
    sm: "rounded-sm",
  };

  return (
    <span
      className={twMerge(
        baseStyles,
        variants[variant],
        sizes[size],
        shapes[rounded],
        className
      )}
    >
      {children}
    </span>
  );
}
