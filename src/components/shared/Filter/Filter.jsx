/* eslint-disable react/prop-types */
import { FaFilterCircleDollar } from "react-icons/fa6";

export default function Filter({
  selectedCategory,
  minPrice,
  maxPrice,
  specialOffer,
  setSortOrder,
  setIsOpen,
}) {
  return (
    <div className="p-4   rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-4 text-black">
        Grocery Price Filter
      </h2>

      {/* Category Filter */}
      <div className="mb-4">
        <h3 className="font-semibold text-black flex items-center">
          Categories{" "}
          <span className="ml-2" role="img" aria-label="category">
            📦
          </span>
        </h3>
        <hr className="my-2 border-purple-600" />
        <select
          className="mt-1 block w-full p-2 border border-green-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue={selectedCategory}
        >
          <option value="">All</option>
          <option value="Fruits & Vegetables">🍏 Fruits & Vegetables</option>
          <option value="Bakery & Dairy">🍞 Bakery & Dairy</option>
          <option value="Meats & Seafood">🍖 Meats & Seafood</option>
          <option value="Beverages">🥤 Beverages</option>
          <option value="Household Needs">🏠 Household Needs</option>
          <option value="Baby & Pregnancy">👶 Baby & Pregnancy</option>
          <option value="Pet Supplies">🐾 Pet Supplies</option>
          <option value="Snacks & Confectionery">
            🍬 Snacks & Confectionery
          </option>
          <option value="Frozen Foods">❄️ Frozen Foods</option>
          <option value="Healthcare">💊 Healthcare</option>
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <h3 className="font-semibold text-black flex items-center">
          Price Range{" "}
          <span className="ml-2" role="img" aria-label="money">
            💰
          </span>
        </h3>
        <hr className="my-2 border-purple-600" />
        <div className="flex items-center justify-between space-x-2 mb-4">
          <input
            type="number"
            placeholder="Min Price"
            defaultValue={minPrice}
            className="mt-1 w-1/2 p-2 border border-green-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Max Price"
            defaultValue={maxPrice}
            className="mt-1 w-1/2 p-2 border border-purple-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Price Range Display */}
        <div className="text-black text-center">
          Price: ${minPrice} — ${maxPrice}
        </div>

        {/* Price Slider */}
        <input
          type="range"
          min="0"
          max="100"
          value={maxPrice}
          step="1"
          className="w-full mt-2 accent-purple-600"
          disabled // Static, no interaction
        />
        <div className="flex justify-between text-black">
          <span>${minPrice}</span>
          <span>${maxPrice}</span>
        </div>
      </div>

      {/* Weight Filter */}
      <div className="mb-4">
        <h3 className="font-semibold text-black flex items-center">
          Weight{" "}
          <span className="ml-2" role="img" aria-label="scale">
            ⚖️
          </span>
        </h3>
        <hr className="my-2 border-purple-600" />
        <div className="flex items-center justify-between space-x-2">
          <input
            type="number"
            placeholder="Min Weight (kg)"
            defaultValue="0"
            className="mt-1 w-1/2 p-2 border border-green-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Max Weight (kg)"
            defaultValue="10"
            className="mt-1 w-1/2 p-2 border border-purple-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Expiry Date Filter */}
      <div className="mb-4">
        <h3 className="font-semibold text-black flex items-center">
          Expiry Date{" "}
          <span className="ml-2" role="img" aria-label="calendar">
            📅
          </span>
        </h3>
        <hr className="my-2 border-purple-600" />
        <input
          type="date"
          className="mt-1 w-full p-2 border border-green-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Sort Order Filter */}
      <div className="mb-4">
        <h3 className="font-semibold text-black flex items-center">
          Sort By Price
          <span className="ml-2" role="img" aria-label="sort">
            🔄
          </span>
        </h3>
        <hr className="my-2 border-purple-600" />
        <select
          className="mt-1 block w-full p-2 border border-green-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue="default"
        >
          <option value="default">Default</option>
          <option value="highToLow">Price: High to Low</option>
          <option value="lowToHigh">Price: Low to High</option>
        </select>
      </div>

      {/* Special Offers */}
      <div className="mb-4 mt-4">
        <h3 className="font-semibold text-black flex items-center">
          Special Offers{" "}
          <span className="ml-2" role="img" aria-label="tag">
            🏷️
          </span>
        </h3>
        <hr className="my-2 border-purple-600" />
        <select
          defaultValue={specialOffer}
          className="mt-1 block w-full p-2 border border-green-600 rounded"
        >
          <option value="">All Offers</option>
          <option value="Only for this Week">🔥 Only for this Week</option>
          <option value="New Arrival">🆕 New Arrival</option>
          <option value="Best Seller">🏆 Best Seller</option>
          <option value="Trending Product">📈 Trending Product</option>
        </select>
      </div>

      {/* Filter Button */}
      <button
        onClick={() => {
          if (window.innerWidth < 1024) {
            // `lg` breakpoint is 1024px in Tailwind
            setIsOpen(false);
          }
        }}
        className="w-full flex items-center justify-center border border-green-600 text-green-600 py-2 rounded-full hover:bg-green-700 hover:text-green transition-all"
      >
        <FaFilterCircleDollar className="text-base mr-2" />
        Filter
      </button>
    </div>
  );
}
