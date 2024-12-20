"use client";

import { twMerge } from "tailwind-merge";
import { FaMinus, FaPlus } from "react-icons/fa";



function AddToCartButton({ product }) {
  return (
    <button
      className={twMerge(
        "bg-transparent w-full border border-sky-600 text-black rounded-md py-1.5 hover:bg-sky-600 hover:text-white duration-300 my-2"
      )}
    >
      Add To Cart
    </button>
  );
}

export default AddToCartButton;
