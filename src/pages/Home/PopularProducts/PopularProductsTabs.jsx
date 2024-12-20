/* eslint-disable react/prop-types */

import  { useState, useEffect } from "react";
import ProductCard from "./Product/ProductCard"; // Your existing ProductCard component
import CategoryTabs from "../../../components/shared/CategoryTabs";

const FilterPopularProducts = ({ productsData }) => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch product categories dynamically from the API or productsData
    const uniqueCategories = [
      "All",
      ...new Set(productsData?.map((product) => product?.category)),
    ];
    setCategories(uniqueCategories);
  }, [productsData]); // Re-run this when productsData changes

  const handleCategorySelect = (selectedCategory) => {
    if (selectedCategory === "All") {
      setFilteredProducts(productsData); // Show all products
    } else {
      setFilteredProducts(
        productsData.filter((product) => product.category === selectedCategory)
      ); // Show filtered products based on category
    }
  };

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
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts?.map((product) => {
          return (
            <ProductCard
              key={product._id}
              product={product} // Passing the full product object to ProductCard
            />
          );
        })}
      </div>
    </div>
  );
};

export default FilterPopularProducts;
