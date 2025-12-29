/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { IoSearchSharp, IoClose } from "react-icons/io5";
import { useFilter } from "../../../../context/FilterContext";
import useAxios from "../../../../hooks/useAxios";
import { Link } from "react-router";
import { twMerge } from "tailwind-merge";
function SearchInput({ className }) {
  const axios = useAxios();
  const { setSearchQuery } = useFilter();
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dropdownRef = useRef(null);

  // Update search query in context
  useEffect(() => {
    setSearchQuery(search);
  }, [search, setSearchQuery]);

  // Fetch suggestions based on search input
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!search) {
        setSuggestions([]);
        return;
      }

      try {
        setIsLoading(true);
        const response = await axios.get(`/api/products`, {
          params: { searchQuery: search },
        });
        setSuggestions(response.data.products || []);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSuggestions();
  }, [axios, search]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={twMerge(
        " flex-1 md:inline-flex h-10 relative group",
        className
      )}
      ref={dropdownRef}
    >
      <input
        type="text"
        placeholder="Search Products here..."
        className="w-full h-full border border-neutral-300 focus:border-primary-500 px-4 outline-none rounded-l-lg transition-colors duration-fast text-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && (
        <IoClose
          onClick={() => setSearch("")}
          className="text-xl absolute top-2.5 right-12 text-neutral-400 hover:text-red-500 cursor-pointer duration-fast transition-colors"
        />
      )}
      <button
        aria-label="Submit Search"
        className="w-10 h-10 inline-flex items-center justify-center absolute top-0 right-0 bg-primary-500 text-white rounded-r-lg hover:bg-primary-600 transition-colors duration-fast cursor-pointer shadow-sm group-hover:shadow-glow-sm"
      >
        <IoSearchSharp className="text-xl" />
      </button>
      {Array.isArray(suggestions) && search && (
        <ul className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border border-neutral-100 z-[100] max-h-80 overflow-y-auto rounded-2xl shadow-premium mt-3 animate-slide-down border-white/40">
          {isLoading ? (
            <li className="p-8 text-neutral-500 text-sm text-center">
              <div className="w-6 h-6 border-2 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
              <span>Searching the Elite Market...</span>
            </li>
          ) : suggestions.length > 0 ? (
            suggestions.map((product) => (
              <li
                key={product._id}
                className="p-3 hover:bg-primary-50/50 border-b border-neutral-50 last:border-0 cursor-pointer transition-colors duration-fast group"
                onClick={() => setSuggestions([])}
              >
                <Link
                  to={`/product/detail/${product._id}`}
                  className="flex items-center"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover mr-4 rounded-xl border border-neutral-200 group-hover:scale-105 transition-transform"
                  />
                  <div className="flex flex-col">
                    <span className="text-neutral-800 font-bold text-sm line-clamp-1 group-hover:text-primary-600 transition-colors">
                      {product.name}
                    </span>
                    <span className="text-primary-600 text-xs font-bold mt-0.5">
                      ${product.price}
                    </span>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <li className="p-10 text-center">
              <div className="text-4xl mb-3 opacity-50">🔍</div>
              <p className="text-neutral-900 font-bold mb-1">
                No products found
              </p>
              <p className="text-neutral-500 text-xs">
                Try different keywords for better results
              </p>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export default SearchInput;
