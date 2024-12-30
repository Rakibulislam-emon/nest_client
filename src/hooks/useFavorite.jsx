// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addToFavorite } from "../redux/actions/cartActions"; // Update this import based on your project
// import { toast } from "react-toastify";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite } from "../redux/cartSlice/cartSlice";
import toast from "react-hot-toast";

const useFavorite = (product) => {
  const favorite = useSelector((state) => state.cart.favorite); // Ensure this returns an array
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Array.isArray(favorite)) {
      const productInFavorite = favorite.some((item) => item._id === product._id);
      setIsFavorite(productInFavorite);
    } else {
      console.error("favorite is not an array", favorite);
    }
  }, [favorite, product]);

  const toggleFavorite = () => {
    dispatch(addToFavorite(product)); // Dispatch the product to add/remove
    if (isFavorite) {
      toast.success("Removed from favorites");
    } else {
      toast.success("Added to favorites");
    }
    setIsFavorite(!isFavorite); // Toggle the state
  };

  return { isFavorite, toggleFavorite };
};

export default useFavorite;
