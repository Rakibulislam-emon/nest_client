/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";

/**
 * Premium Loader component using Tailwind animations
 */
export default function Loader({
  className = "",
  variant = "spinner", // spinner, dots, pulse
  size = "md", // sm, md, lg
}) {
  const sizes = {
    sm: "w-5 h-5 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  };

  if (variant === "dots") {
    return (
      <div
        className={twMerge(
          "flex space-x-1 justify-center items-center py-4",
          className
        )}
      >
        <div className="h-2 w-2 bg-primary-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-2 w-2 bg-primary-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-2 w-2 bg-primary-500 rounded-full animate-bounce"></div>
      </div>
    );
  }

  // Default spinner
  return (
    <div
      className={twMerge("flex justify-center items-center py-4", className)}
    >
      <div
        className={twMerge(
          "rounded-full border-neutral-200 border-t-primary-500 animate-spin",
          sizes[size]
        )}
      ></div>
    </div>
  );
}
