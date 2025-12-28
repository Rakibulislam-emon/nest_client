/* eslint-disable react/prop-types */
import { HiChevronDown, HiChevronUp, HiCheck } from "react-icons/hi2";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const CategoryFilter = ({
  categories,
  selectedCategories = [],
  toggleCategory,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="group/section">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-[0.15em] font-sans">
          Categories{" "}
          <span className="text-neutral-300 ml-1">
            ({categories?.length || 0})
          </span>
        </h3>
        <button
          onClick={toggleExpand}
          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-neutral-100 text-neutral-400 hover:text-neutral-900 transition-all duration-300"
        >
          {isExpanded ? <HiChevronUp size={18} /> : <HiChevronDown size={18} />}
        </button>
      </div>

      {isExpanded && (
        <ul className="grid gap-2.5">
          {categories?.map((category) => {
            const isSelected = selectedCategories.includes(category);
            return (
              <li key={category}>
                <button
                  onClick={() => toggleCategory(category)}
                  className={twMerge(
                    "w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group/item text-left",
                    isSelected
                      ? "bg-primary-50 active:scale-[0.98]"
                      : "hover:bg-neutral-50 active:scale-[0.98]"
                  )}
                >
                  {/* Custom Checkbox */}
                  <div
                    className={twMerge(
                      "w-5 h-5 flex-shrink-0 rounded-md border-2 flex items-center justify-center transition-all duration-300",
                      isSelected
                        ? "bg-primary-600 border-primary-600 shadow-glow"
                        : "border-neutral-200 bg-white group-hover/item:border-primary-400"
                    )}
                  >
                    {isSelected && <HiCheck className="text-white" size={12} />}
                  </div>

                  <span
                    className={twMerge(
                      "text-sm font-semibold transition-colors leading-none",
                      isSelected
                        ? "text-primary-700"
                        : "text-neutral-600 group-hover/item:text-neutral-900"
                    )}
                  >
                    {category}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CategoryFilter;
