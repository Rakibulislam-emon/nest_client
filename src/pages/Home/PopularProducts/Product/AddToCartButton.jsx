/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { twMerge } from "tailwind-merge";
import { addToCart } from "../../../../redux/cartSlice/cartSlice";
import toast from "react-hot-toast";

function AddToCartButton({ product, className }) {
  // selector for get data from cart
  const dispatch = useDispatch();
  const handleClick = () => {
    if (product) {
      dispatch(addToCart(product));
      // toast
      toast.success("Product added to cart!", {
        position: "top-right",
        style: {
          background: "black",
          color: "#fff",
      }});
    }
  };
  return (
    <button
      onClick={handleClick}
      className={twMerge(
        `bg-transparent w-full border border-sky-600 text-black rounded-md py-1.5 hover:bg-sky-600 hover:text-white duration-300 my-2`,
        className
      )}
    >
      Add To Cart
    </button>
  );
}

export default AddToCartButton;
