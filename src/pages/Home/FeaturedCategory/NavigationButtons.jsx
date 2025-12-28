import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { forwardRef } from "react";

// eslint-disable-next-line react/prop-types
const FeaturedNavigationButtons = forwardRef(
  ({ prevRef, nextRef, toggleViewAll }, ref) => {
    return (
      <div className="flex gap-4 mt-4 md:mt-0">
        <button
          onClick={toggleViewAll}
          className="px-5 py-2 text-sm font-semibold text-neutral-700 bg-white border border-neutral-200 hover:border-primary-500 hover:text-primary-600 rounded-lg shadow-sm transition-all duration-200"
        >
          View All
        </button>
        <div className="flex gap-2">
          <button
            ref={prevRef}
            className="p-2 text-neutral-500 bg-neutral-100 hover:bg-primary-500 hover:text-white rounded-full transition-all duration-300 disabled:opacity-50"
            aria-label="Previous"
          >
            <FaAngleLeft size={20} />
          </button>
          <button
            ref={nextRef}
            className="p-2 text-neutral-500 bg-neutral-100 hover:bg-primary-500 hover:text-white rounded-full transition-all duration-300 disabled:opacity-50"
            aria-label="Next"
          >
            <FaAngleRight size={20} />
          </button>
        </div>
      </div>
    );
  }
);

// Add a display name for debugging purposes
FeaturedNavigationButtons.displayName = "FeaturedNavigationButtons";

export default FeaturedNavigationButtons;
