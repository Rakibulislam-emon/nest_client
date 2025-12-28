/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";

/**
 * Skeleton loading component
 */
export default function Skeleton({
  className = "",
  variant = "text", // text, circular, rectangular
  count = 1,
}) {
  const baseStyles = "bg-neutral-200 animate-shimmer rounded";

  const variants = {
    text: "h-4 w-full",
    circular: "rounded-full",
    rectangular: "h-full w-full",
  };

  if (count > 1) {
    return (
      <div className="space-y-2">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={twMerge(baseStyles, variants[variant], className)}
          />
        ))}
      </div>
    );
  }

  return <div className={twMerge(baseStyles, variants[variant], className)} />;
}
