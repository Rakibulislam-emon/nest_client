/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { IoSearchSharp, IoClose } from "react-icons/io5";
import { useFilter } from "../../../../context/FilterContext";
import useAxios from "../../../../hooks/useAxios";
import { Link } from "react-router";
import { twMerge } from "tailwind-merge";
function SearchInput({className}) {
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
    <div className= {twMerge(" flex-1 md:inline-flex h-10 relative",className)} ref={dropdownRef}>
      <input
        type="text"
        placeholder="Search Products here..."
        className="w-full h-full border-2 border-green px-4 outline-none rounded-l-lg"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && (
        <IoClose
          onClick={() => setSearch("")}
          className="text-xl absolute top-2.5 right-12 text-gray-500 hover:text-red-500 cursor-pointer duration-200"
        />
      )}
      <span className="w-10 h-10 inline-flex items-center justify-center absolute top-0 right-0 hover:bg-green duration-200 cursor-pointer">
        <IoSearchSharp className="text-3xl" />
      </span>
      {Array.isArray(suggestions) && suggestions.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white border border-gray-200 z-10 max-h-60 overflow-y-auto rounded-lg shadow-lg">
          {isLoading ? (
            <li className="p-2 text-gray-500">Loading...</li>
          ) : (
            suggestions.map((product) => (
              <li
                key={product._id}
                className="p-2 hover:bg-green-100 border cursor-pointer flex items-center"
                onClick={() => setSuggestions([])} // Close the dropdown
              >
                <Link to={`/product/detail/${product._id}`} className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-10 h-10 object-cover mr-4 rounded-md border border-gray-300"
                  />
                  <span className="text-gray-800 font-medium">{product.name}</span>
                </Link>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

export default SearchInput;
