/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

/**
 * Reusable Modal/Dialog component with backdrop blur and animations
 */
export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  className = "",
  size = "md", // sm, md, lg, xl
}) {
  const modalRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Close on backdrop click
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const sizes = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    full: "max-w-full m-4",
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className={twMerge(
          "bg-white rounded-2xl shadow-premium w-full mx-4 overflow-hidden animate-scale-up relative",
          sizes[size],
          className
        )}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-5 border-b border-neutral-100 bg-neutral-50/50">
          <h3 className="text-xl font-bold text-neutral-800">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors duration-fast"
          >
            <IoClose className="text-2xl" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>,
    document.body
  );
}
