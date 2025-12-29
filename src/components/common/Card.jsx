/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";

/**
 * Reusable Card component wrapper
 */
export default function Card({
  children,
  className = "",
  hoverEffect = true,
  variant = "default", // default, bordered, flat
  ...props
}) {
  const baseStyles =
    "bg-white rounded-2xl overflow-hidden transition-all duration-300";

  const variants = {
    default: "shadow-soft",
    bordered: "border border-neutral-100 shadow-sm",
    flat: "bg-neutral-50",
    glass: "glass border border-white/20",
  };

  const hoverStyles = hoverEffect
    ? "hover:shadow-premium hover:-translate-y-1"
    : "";

  return (
    <div
      className={twMerge(baseStyles, variants[variant], hoverStyles, className)}
      {...props}
    >
      {children}
    </div>
  );
}
