/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { twMerge } from "tailwind-merge";
import { addToCart } from "../../../../redux/cartSlice/cartSlice";

function AddToCartButton({ product ,className}) {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(addToCart(product))
  };
  return (
    <button
      onClick={handleClick}
      className={twMerge(
        `bg-transparent w-full border border-sky-600 text-black rounded-md py-1.5 hover:bg-sky-600 hover:text-white duration-300 my-2`,className
      )}
    >
      Add To Cart
    </button>
  );
}

export default AddToCartButton;
