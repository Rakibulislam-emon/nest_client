import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Fetch related images from Unsplash based on product name

const fetchRelatedImages = async (productName) => {
  // Make the API request with one 'query' parameter
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?query=${productName}&per_page=3&client_id=DKpIHA_i_ANVQZFMMWMo92h5iyb0esJwIzXfpobmIms`
  );

  return response.data.results;
};

// Custom hook for both product details and related images
export default function useProductDetails(initialData) {
  // Use TanStack Query's `useQuery` to manage product details
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["productDetails"], // Unique key for this query
    queryFn: () => Promise.resolve(initialData), // No need to fetch, just resolve the initial data
    initialData, // Use the initial data passed to the hook
    enabled: !!initialData, // Only run the query if there is initial data
  });
  const {
    data: relatedImages,
    isLoading: imagesLoading,
    isError: imagesError,
  } = useQuery({
    queryKey: ["relatedImages", initialData?.name], // Query key based on product name
    queryFn: () => fetchRelatedImages(initialData?.name), // Function to fetch related images
    enabled: !!initialData?.name, // Only run the query if `initialData?.name` is valid
  });

  return {
    data, // Product data
    isLoading, // Product loading state
    isError, // Product error state
    error, // Product error message
    relatedImages, // Related images data from Unsplash
    imagesLoading, // Related images loading state
    imagesError, // Related images error state
  };
}
