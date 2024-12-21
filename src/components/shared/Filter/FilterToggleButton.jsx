import { useState, useRef, useEffect } from "react";
import Filter from "./Filter";
import { BiFilterAlt } from "react-icons/bi";
import img from "../../../assets/bg.avif";
function FilterToggleButton() {
  const [isOpen, setIsOpen] = useState(false);
  const filterRef = useRef(null);

  const toggleFilter = () => {
    setIsOpen((prev) => !prev);
  };

  // Close filter when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen && // Only handle if the filter is open
        filterRef.current &&
        !filterRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="">
      {/* Toggle button */}
      <div className="flex justify-end lg:fixed left-0 top-[50vh]">
        <div
          onClick={toggleFilter}
          className="bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 text-white rounded-full shadow-lg cursor-pointer flex items-center justify-center gap-x-2 w-36 lg:w-24 py-2 px-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
        >
          <span className="text-sm font-semibold">Open Filter</span>
          <BiFilterAlt className="text-xl "  />
        </div>
      </div>

      {/* Filter content */}
      {isOpen && (
        <div
          ref={filterRef}
          className="fixed top-0  lg:left-0 right-0 h-full   lg:w-80 w-64 bg-white shadow-lg z-[110] transform transition-transform duration-300 ease-in-out overflow-y-auto"
        >
          <Filter setIsOpen={setIsOpen} />
          <div
            className="h-1/4 "
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default FilterToggleButton;
