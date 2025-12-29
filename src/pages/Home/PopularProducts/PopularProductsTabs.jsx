/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import ProductCard from "./Product/ProductCard"; // Your existing ProductCard component
import CategoryTabs from "../../../components/shared/CategoryTabs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const FilterPopularProducts = ({ productsData }) => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const uniqueCategories = [
      "All",
      ...new Set(productsData?.map((product) => product?.category)),
    ];
    setCategories(uniqueCategories);
  }, [productsData]);

  const handleCategorySelect = (selectedCategory) => {
    if (selectedCategory === "All") {
      setFilteredProducts(productsData);
    } else {
      setFilteredProducts(
        productsData.filter((product) => product.category === selectedCategory)
      );
    }
  };

  const productsToShow = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 12);

  return (
    <div className="container space-y-8 my-16 z-[999]">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 font-heading tracking-tight leading-tight">
          Popular Products
        </h2>
        <p className="text-sm text-neutral-500 mt-2">
          Browse our popular products and find the perfect items for your needs.
        </p>
      </div>
      {/* Section Header */}
      <div className="flex flex-col items-center md:flex-row md:justify-between mb-8">
        {/* Tabs Component - assuming it renders horizontally */}
        <div className="mt-4 md:mt-0 md:overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar overflow-visible">
          <CategoryTabs
            categories={categories}
            setSelectedCategory={handleCategorySelect}
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6">
        {productsToShow?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {/* See More / See Less Button */}
      {filteredProducts.length > 12 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center justify-center gap-2 border-2 border-primary-500 text-primary-600 bg-transparent hover:bg-primary-500 hover:text-white px-8 py-2.5 rounded-full transition-all duration-300 font-semibold shadow-sm hover:shadow-md"
          >
            {showAll ? <FaChevronUp /> : <FaChevronDown />}
            <span className="ml-1">
              {showAll ? "Show Less" : "Load More Products"}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterPopularProducts;
