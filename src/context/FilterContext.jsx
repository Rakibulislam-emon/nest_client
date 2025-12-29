/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router"; // Import useNavigate and useLocation
import { useQuery } from "@tanstack/react-query"; // Import useQuery from TanStack Query
import useAxios from "../hooks/useAxios";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const axios = useAxios();

  // State Management and Filter Logic
  const [selectedCategories, setSelectedCategories] = useState([]); // Array for multiple categories
  const [minPrice, setMinPrice] = useState(1); // Default minPrice
  const [maxPrice, setMaxPrice] = useState(50); // Default maxPrice
  const [rating, setRating] = useState(3); // Default rating
  const [availability, setAvailability] = useState(""); // Optional filter for availability
  const [minDiscount, setMinDiscount] = useState(1); // Default discount
  const [minDate, setMinDate] = useState(""); // Optional filter for date
  const [sortField, setSortField] = useState(""); // State for sorting field
  const [sortOrder, setSortOrder] = useState("asc"); // State for sorting order
  const [page, setPage] = useState(1); // State for current page
  const [limit, setLimit] = useState(12); // State for items per page
  // state for search
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Debounced filters for data fetching (to prevent reload storm during drags)
  const [debouncedFilters, setDebouncedFilters] = useState({
    selectedCategories,
    minPrice,
    maxPrice,
    rating,
    availability,
    minDiscount,
    minDate,
    sortField,
    sortOrder,
    page,
    limit,
    searchQuery,
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedFilters({
        selectedCategories,
        minPrice,
        maxPrice,
        rating,
        availability,
        minDiscount,
        minDate,
        sortField,
        sortOrder,
        page,
        limit,
        searchQuery,
      });
    }, 400); // 400ms debounce
    return () => clearTimeout(handler);
  }, [
    selectedCategories,
    minPrice,
    maxPrice,
    rating,
    availability,
    minDiscount,
    minDate,
    sortField,
    sortOrder,
    page,
    limit,
    searchQuery,
  ]);

  // API Integration and Fetching Filtered Data using TanStack Query
  const fetchFilteredProducts = async () => {
    const params = {
      ...(selectedCategories.length > 0 && {
        category: selectedCategories.join(","),
      }), // Support multiple categories as comma-separated
      ...(minPrice !== 1 && { minPrice }), // Only add if minPrice is different from default
      ...(maxPrice !== 50 && { maxPrice }), // Only add if maxPrice is different from default
      ...(rating !== 3 && { rating }), // Only add if rating is different from default
      ...(availability && { availability }), // Only add if availability is selected
      ...(minDiscount !== 1 && { minDiscount }), // Only add if minDiscount is different from default
      ...(minDate && { minDate }), // Only add if minDate is set
      ...(sortField && { sortField }), // Only add if sortField is set
      ...(debouncedFilters.sortOrder && {
        sortOrder: debouncedFilters.sortOrder,
      }), // Only add if sortOrder is set
      page: debouncedFilters.page,
      limit: debouncedFilters.limit,
      searchQuery: debouncedFilters.searchQuery, // Add search query if provided
    };

    const response = await axios.get("/api/products", {
      params,
    });
    return response.data;
  };

  // for refetching data when input change

  // Using useQuery to fetch data based on filter inputs
  const {
    data: {
      products: filteredProducts = [],
      totalProducts,
      currentPage,
      totalPages,
    } = {},
    isLoading: loading,
    isError: error,
  } = useQuery({
    queryKey: [
      "filteredProducts",
      debouncedFilters.selectedCategories,
      debouncedFilters.minPrice,
      debouncedFilters.maxPrice,
      debouncedFilters.rating,
      debouncedFilters.availability,
      debouncedFilters.minDiscount,
      debouncedFilters.minDate,
      debouncedFilters.sortField,
      debouncedFilters.sortOrder,
      debouncedFilters.page,
      debouncedFilters.limit,
      debouncedFilters.searchQuery, // Add search query if provided
    ],
    queryFn: fetchFilteredProducts,
    enabled: true, // Set it to true to always fetch when there are active filters
  });

  // URL Management and Navigation
  const navigate = useNavigate();
  const location = useLocation();

  // Update the URL with query params when filters change (Debounced to avoid mobile refresh bug)
  useEffect(() => {
    const handler = setTimeout(() => {
      if (location.pathname === "/shop") {
        const queryParams = new URLSearchParams();

        if (selectedCategories.length > 0)
          queryParams.append("category", selectedCategories.join(","));
        if (minPrice !== 1) queryParams.append("minPrice", minPrice);
        if (maxPrice !== 50) queryParams.append("maxPrice", maxPrice);
        if (rating !== 3) queryParams.append("rating", rating);
        if (availability)
          queryParams.append("availability", encodeURIComponent(availability));
        if (minDiscount !== 1) queryParams.append("minDiscount", minDiscount);
        if (minDate) queryParams.append("minDate", minDate);
        if (sortField) queryParams.append("sortField", sortField);
        if (sortOrder) queryParams.append("sortOrder", sortOrder);
        queryParams.append("page", page);
        queryParams.append("limit", limit);

        const newSearch = `?${queryParams.toString()}`;
        if (location.search !== newSearch) {
          navigate(newSearch, { replace: true });
        }
      }
    }, 500); // 500ms debounce

    return () => clearTimeout(handler);
  }, [
    selectedCategories,
    minPrice,
    maxPrice,
    rating,
    availability,
    minDiscount,
    minDate,
    sortField,
    sortOrder,
    page,
    limit,
    navigate,
    location.pathname,
    location.search,
  ]);

  return (
    <FilterContext.Provider
      value={{
        selectedCategories,
        setSelectedCategories,
        toggleCategory: (category) => {
          setSelectedCategories((prev) =>
            prev.includes(category)
              ? prev.filter((c) => c !== category)
              : [...prev, category]
          );
        },
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        rating,
        setRating,
        availability,
        setAvailability,
        minDiscount,
        setMinDiscount,
        minDate,
        setMinDate,
        sortField,
        setSortField,
        sortOrder,
        setSortOrder,
        page,
        setPage,
        limit,
        setLimit,
        filteredProducts,
        loading,
        error,
        totalProducts,
        currentPage,
        totalPages,
        setSearchQuery,
        clearFilters: () => {
          setSelectedCategories([]);
          setMinPrice(1);
          setMaxPrice(50);
          setRating(3);
          setAvailability("");
          setMinDiscount(1);
          setMinDate("");
          setSortField("");
          setSortOrder("asc");
          setPage(1);
          setSearchQuery("");
        },
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFilter = () => {
  return useContext(FilterContext);
};
