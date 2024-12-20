import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { forwardRef } from "react";

const FeaturedNavigationButtons = forwardRef(({ prevRef, nextRef, toggleViewAll }, ref) => {
  return (
  <div className=" flex justify-end mt-4 ">
      <div className="flex gap-x-2 items-center ">
        <button
          onClick={toggleViewAll}
          className="border mr-2 px-4 py-2 text-white bg-[#6bb252] hover:bg-[#ffc107] rounded-lg font-semibold"
        >
          View All
        </button>
        <button
          ref={prevRef}
          className="text-gray-500 hover:text-black bg-[#eaeaea] hover:bg-[#6bb252] rounded-lg"
        >
          <FaAngleLeft size={40} />
        </button>
        <button
          ref={nextRef}
          className="text-gray-500 hover:text-black bg-[#eaeaea] hover:bg-[#6bb252] rounded-lg"
        >
          <FaAngleRight size={40} />
        </button>
      </div>
  </div>
  );
});

// Add a display name for debugging purposes
FeaturedNavigationButtons.displayName = "FeaturedNavigationButtons";

export default FeaturedNavigationButtons;
