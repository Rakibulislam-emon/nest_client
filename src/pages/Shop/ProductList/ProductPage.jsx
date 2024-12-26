import { useState } from "react";
import Loader from "../../../components/ui/Loader";
import { useFilter } from "../../../context/FilterContext";
import { useAllProducts } from "../../../hooks/useAllProducts";
import ProductCard from "../../Home/PopularProducts/Product/ProductCard";

export default function ProductPage() {
  const [columns, setColumns] = useState(4); // Default to 4 columns
  const { data: allProducts } = useAllProducts(); // Fetch all products initially
  const { filteredProducts, loading, setSortField, setSortOrder } = useFilter(); // Get filtered products and sorting functions from context

  if (loading) {
    // Render loading state
    return <Loader className={"h-screen flex justify-center items-center"} />;
  }

  const productsToDisplay =
    filteredProducts.length > 0 ? filteredProducts : allProducts;

  const gridBtn = (numColumns) => {
    setColumns(numColumns); // Update the number of columns
  };

  const handleSortChange = (e) => {
    const [field, order] = e.target.value.split("-");
    setSortField(field);
    setSortOrder(order);
  };

  return (
    <div className="container mx-auto p-6 ">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Our Products
        </h1>
        <p className="text-center text-gray-600">
          Discover our wide range of products and choose the best for you.
        </p>
      </header>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="md:flex gap-x-4 hidden">
          <button
            onClick={() => gridBtn(2)} // Set to 2 columns
            className="bg-blue-500 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-600"
          >
            2 Columns
          </button>
          <button
            onClick={() => gridBtn(3)} // Set to 3 columns
            className="bg-blue-500 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-600"
          >
            3 Columns
          </button>
          <button
            onClick={() => gridBtn(4)} // Set to 4 columns
            className="bg-blue-500 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-600"
          >
            4 Columns
          </button>
        </div>
        <div className="flex items-center">
          <label htmlFor="sort" className="mr-2 text-gray-700">
            Sort by:
          </label>
          <select
            id="sort"
            onChange={handleSortChange}
            className="bg-white border border-gray-300 rounded-lg px-4 py-2"
          >
            <option value="">None</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
            <option value="rating-asc">Rating: Low to High</option>
            <option value="rating-desc">Rating: High to Low</option>
          </select>
        </div>
        <div>
          <h1 className="text-xl mt-8 font-bold text-gray-700">
            {productsToDisplay.length} Products
          </h1>
        </div>
      </div>

      {/* Products Grid */}
      <div
        className={`grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-${columns} xl:grid-cols-${columns} gap-6 bg-gray-50 p-6 `}
      >
        {productsToDisplay.map((product) => (
          <div
            className=" hover:scale-105"
            key={product._id}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
