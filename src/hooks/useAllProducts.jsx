import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios"; // Import the custom useAxios hook

// Custom hook to fetch the featured category data
export const useAllProducts = () => {
  const axios = useAxios(); // Get the Axios instance

  // Use React Query's useQuery hook to fetch data
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["all-products"], // Unique query key
    queryFn: async () => {
      const response = await axios.get("/api/products"); // Fetch data using Axios
      return response.data; // Axios automatically parses JSON
    },
    onError: (error) => {
      console.error("Error fetching featured popular products data:", error);
    },
  });

  // Return all query values together
  return { data, isLoading, isError, error };
};
