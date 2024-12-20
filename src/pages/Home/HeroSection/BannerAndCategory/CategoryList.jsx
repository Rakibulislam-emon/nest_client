import React from "react";
import StyledButton from "../../Shared/StyledButton";

export default function CategoryList() {
  const categories = [
    { name: "Fruits", icon: "🍎", quantity: 120 },
    { name: "Vegetables", icon: "🥦", quantity: 80 },
    { name: "Dairy Products", icon: "🧀", quantity: 50 },
    { name: "Snacks", icon: "🍪", quantity: 200 },
    { name: "Snacks", icon: "🍪", quantity: 200 },
    { name: "Snacks", icon: "🍪", quantity: 200 },
  ];

  return (
    <div className="p-6 bg-green-50 rounded-lg shadow-md">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-green-800 text-center">
        Shop by Category
      </h2>
      <ul className="space-y-4">
        {categories.map((category, index) => (
          <li
            key={index}
            className="flex  items-center justify-between lg:max-w-xs  border-gray  bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:bg-green-100"
          >
            <StyledButton>
              {/* Name */}
              <div className="text-md font-semibold text-gray-700">
                {category.icon}
                {category.name}
              </div>

              {/* Quantity */}
              <div className="text-md  font-medium text-gray-500">
                {category.quantity} items
              </div>
            </StyledButton>
          </li>
        ))}
      </ul>
    </div>
  );
}
