/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";

/**
 * Reusable Input component with label and error handling
 */
export default function Input({
  label,
  error,
  className = "",
  type = "text",
  id,
  ...props
}) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-neutral-700 mb-1.5 ml-1"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={twMerge(
          "w-full px-4 py-2.5 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all duration-200 placeholder:text-neutral-400 text-neutral-800 text-sm",
          error ? "border-red-500 focus:ring-red-200 focus:border-red-500" : "",
          className
        )}
        {...props}
      />
      {error && <p className="mt-1.5 text-xs text-red-500 ml-1">{error}</p>}
    </div>
  );
}
