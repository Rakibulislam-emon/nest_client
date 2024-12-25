/* eslint-disable react/prop-types */
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";

const CategoryFilter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Categories ({categories.length})</h2>
        <button onClick={toggleExpand}>
          {isExpanded ? (
            <FaAngleUp className="text-xl text-gray-800" />
          ) : (
            <FaAngleDown className="text-xl text-gray-800" />
          )}
        </button>
      </div>
      {isExpanded && (
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category} className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
                className="w-5 h-5 rounded border-gray-300 text-blue-500 focus:ring-blue-500 transition-all duration-200 cursor-pointer"
              />
              <label
                htmlFor={category}
                className="text-gray-700 text-sm font-medium"
              >
                {category}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryFilter;
