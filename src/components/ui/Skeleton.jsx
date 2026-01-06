/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";

/**
 * A reusable Skeleton component for loading states.
 * Uses Tailwind's animate-pulse for the shimmer effect.
 */
const Skeleton = ({ className, circle = false, rounded = "md" }) => {
  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full",
  };

  return (
    <div
      className={twMerge(
        "animate-pulse bg-neutral-200 dark:bg-neutral-700",
        circle ? "rounded-full" : roundedClasses[rounded] || roundedClasses.md,
        className
      )}
    />
  );
};

export default Skeleton;
