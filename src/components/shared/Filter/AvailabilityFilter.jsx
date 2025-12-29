/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";

const AvailabilityFilter = ({ availability, setAvailability }) => {
  return (
    <div className="group/section">
      <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-[0.15em] font-sans mb-6">
        Availability
      </h3>

      <ul className="grid gap-2.5">
        {[
          { label: "In Stock", value: "In Stock", color: "primary" },
          { label: "Out of Stock", value: "Out of Stock", color: "danger" },
        ].map((option) => {
          const isSelected = availability === option.value;
          return (
            <li key={option.value}>
              <button
                onClick={() => setAvailability(isSelected ? "" : option.value)}
                className={twMerge(
                  "w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group/item text-left",
                  isSelected
                    ? "bg-neutral-50 active:scale-[0.98]"
                    : "hover:bg-neutral-50 active:scale-[0.98]"
                )}
              >
                {/* Custom Radio */}
                <div
                  className={twMerge(
                    "w-5 h-5 flex-shrink-0 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                    isSelected
                      ? option.color === "primary"
                        ? "bg-primary-600 border-primary-600 shadow-glow"
                        : "bg-red-500 border-red-500 shadow-glow-red"
                      : "border-neutral-200 bg-white group-hover/item:border-primary-400"
                  )}
                >
                  {isSelected && (
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  )}
                </div>

                <span
                  className={twMerge(
                    "text-sm font-semibold transition-colors leading-none",
                    isSelected
                      ? "text-neutral-900"
                      : "text-neutral-600 group-hover/item:text-neutral-900"
                  )}
                >
                  {option.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AvailabilityFilter;
