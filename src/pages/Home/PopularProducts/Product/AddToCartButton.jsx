/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";

function AddToCartButton({ product ,className}) {
  return (
    <button
      className={twMerge(
        `bg-transparent w-full border border-sky-600 text-black rounded-md py-1.5 hover:bg-sky-600 hover:text-white duration-300 my-2`,className
      )}
    >
      Add To Cart
    </button>
  );
}

export default AddToCartButton;
