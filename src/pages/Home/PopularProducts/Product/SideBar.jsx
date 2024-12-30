/* eslint-disable react/prop-types */
import { FiShoppingCart } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useDispatch,  } from "react-redux";
import toast from "react-hot-toast";
import {
  addToCart,
  
} from "../../../../redux/cartSlice/cartSlice";
import { Link } from "react-router";
import useFavorite from "../../../../hooks/useFavorite";

function SideBar({ product }) {
  const dispatch = useDispatch();

  const { isFavorite, toggleFavorite } = useFavorite(product);

  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Product added to cart!", {
      position: "top-right",
      style: {
        background: "black",
        color: "#fff",
      },
    });
  };

  return (
    <div className="absolute right-2 bottom-0 border flex flex-col text-2xl border-borderColor bg-white rounded-md overflow-hidden transform translate-x-20 group-hover:translate-x-0 duration-300 z-40">
      <button
        onClick={addCart}
        className="p-2 hover:bg-sky-600 hover:text-white duration-200"
      >
        <FiShoppingCart />
      </button>
      <Link to={`/product/detail/${product._id}`}>
        <button className="p-2 hover:bg-sky-600 hover:text-white border-y border-y-borderColor duration-200">
          <LuEye />
        </button>
      </Link>

      <button
        onClick={toggleFavorite} // Toggle favorite on click
        className="p-2 hover:bg-sky-600 hover:text-white duration-200"
      >
        {isFavorite ? (
          <MdFavorite className="text-red-500" />
        ) : (
          <MdFavoriteBorder />
        )}
      </button>
    </div>
  );
}

export default SideBar;
