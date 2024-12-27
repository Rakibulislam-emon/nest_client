/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router"; // Import useNavigate
import { useQuery } from "@tanstack/react-query"; // Import useQuery from TanStack Query
import useAxios from "../hooks/useAxios";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const axios = useAxios();

  // State Management and Filter Logic
  const [selectedCategory, setSelectedCategory] = useState(""); // Initial state for category
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
 



  // API Integration and Fetching Filtered Data using TanStack Query
  const fetchFilteredProducts = async () => {
    const params = {
      ...(selectedCategory && { category: selectedCategory }), // Only add if not empty
      ...(minPrice !== 1 && { minPrice }), // Only add if minPrice is different from default
      ...(maxPrice !== 50 && { maxPrice }), // Only add if maxPrice is different from default
      ...(rating !== 3 && { rating }), // Only add if rating is different from default
      ...(availability && { availability }), // Only add if availability is selected
      ...(minDiscount !== 1 && { minDiscount }), // Only add if minDiscount is different from default
      ...(minDate && { minDate }), // Only add if minDate is set
      ...(sortField && { sortField }), // Only add if sortField is set
      ...(sortOrder && { sortOrder }), // Only add if sortOrder is set
      page,
      limit,
      searchQuery, // Add search query if provided
    };

    const response = await axios.get("/api/products", { params });
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
      selectedCategory,
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
      searchQuery, // Add search query if provided
    ],
    queryFn: fetchFilteredProducts,
    enabled: true, // Set it to true to always fetch when there are active filters
  });








  // URL Management and Navigation
  const navigate = useNavigate();

  // Update the URL with query params when filters change
  useEffect(() => {
    if (location.pathname === "/shop") {
      
      const queryParams = new URLSearchParams();
  
      // Only add query parameters if the value exists and differs from the default
      if (selectedCategory)
        queryParams.append("category", encodeURIComponent(selectedCategory));
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
  
      // Update the URL without reloading the page
      navigate(`?${queryParams.toString()}`, { replace: true });
    }
  }, [
    selectedCategory,
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
  ]);






  
  return (
    <FilterContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
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
        setSearchQuery
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
