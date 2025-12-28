/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";
import { CgSpinner } from "react-icons/cg";

/**
 * Primary UI Button component
 * @param {string} variant - primary, secondary, outline, ghost, danger
 * @param {string} size - sm, md, lg
 * @param {boolean} isLoading - shows loading spinner
 * @param {ReactNode} leftIcon - icon validation
 * @param {ReactNode} rightIcon - icon validation
 */
export default function Button({
  children,
  className = "",
  variant = "primary", // primary, secondary, outline, ghost, danger
  size = "md", // sm, md, lg
  isLoading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  type = "button",
  onClick,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-primary text-white hover:shadow-lg hover:-translate-y-0.5 shadow-primary-500/30 border border-transparent focus:ring-primary-500",
    secondary:
      "bg-secondary-500 text-white hover:bg-secondary-600 hover:shadow-lg hover:-translate-y-0.5 shadow-secondary-500/30 border border-transparent focus:ring-secondary-500",
    outline:
      "bg-transparent border-2 border-neutral-200 text-neutral-700 hover:border-primary-500 hover:text-primary-600 focus:ring-primary-500",
    ghost:
      "bg-transparent text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 focus:ring-neutral-500",
    danger:
      "bg-red-500 text-white hover:bg-red-600 hover:shadow-lg shadow-red-500/30 focus:ring-red-500",
    premium:
      "bg-gradient-to-r from-neutral-900 to-neutral-800 text-white hover:shadow-xl hover:-translate-y-0.5 shadow-neutral-900/20 border border-neutral-700",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  return (
    <button
      type={type}
      className={twMerge(baseStyles, variants[variant], sizes[size], className)}
      disabled={isLoading || disabled}
      onClick={onClick}
      {...props}
    >
      {isLoading && (
        <CgSpinner className="animate-spin mr-2 text-current text-lg" />
      )}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
}
