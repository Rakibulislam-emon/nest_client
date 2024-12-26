/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import ProductCard from "./Product/ProductCard"; // Your existing ProductCard component
import CategoryTabs from "../../../components/shared/CategoryTabs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const FilterPopularProducts = ({ productsData }) => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState(false); // State to toggle between showing all products or a limited number

  useEffect(() => {
    // Fetch product categories dynamically from the API or productsData
    const uniqueCategories = [
      "All",
      ...new Set(productsData?.map((product) => product?.category)),
    ];
    setCategories(uniqueCategories);
  }, [productsData]);

  const handleCategorySelect = (selectedCategory) => {
    if (selectedCategory === "All") {
      setFilteredProducts(productsData); // Show all products
    } else {
      setFilteredProducts(
        productsData.filter((product) => product.category === selectedCategory)
      ); // Show filtered products based on category
    }
  };

  const productsToShow = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 12); // Show first 6 products initially

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex justify-between">
        <h2 className="md:text-4xl text-2xl font-bold lg:text-start text-center py-4">
          Popular Products
        </h2>
      </div>

      {/* Tabs Component */}
      <CategoryTabs
        categories={categories}
        setSelectedCategory={handleCategorySelect}
      />

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6">
        {productsToShow?.map((product) => {
          return (
            <ProductCard
              key={product._id}
              product={product} // Passing the full product object to ProductCard
            />
          );
        })}
      </div>

      {/* See More / See Less Button */}
        <div className="flex justify-center  ">
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex   items-center justify-center gap-2 border border-purple-600 text-purple-600 bg-white hover:bg-purple-600 hover:text-white px-4 py-2 rounded transition duration-200"
        >
          {showAll ? <FaChevronUp /> : <FaChevronDown />}{" "}
          {/* Change icon based on state */}
          <span className="ml-2">{showAll ? "See Less" : "See More"}</span>{" "}
          {/* Adjusted span */}
        </button>
      </div>
    </div>
  );
};

export default FilterPopularProducts;
