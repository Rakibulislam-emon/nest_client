
import { FaMinus, FaPlus } from "react-icons/fa6";
import AddToCartButton from "./AddToCartButton";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
export default function QuantityControl({ className }) {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <div
      className={twMerge(
        `p-2 gap-x-6 md:flex  justify-between items-center  group-hover:opacity-100 transition-opacity duration-300`,
        className
      )}
    >
      {/* Quantity controls */}
      <div className="flex border items-center space-x-2   p-1 rounded-lg">
        <button
          onClick={decrement}
          className="p-1 rounded-full w-full bg-gray-200 hover:bg-gray-300  flex justify-center"
        >
          <FaMinus />
        </button>
        <span className="text-lg">{quantity}</span>
        <button
          onClick={increment}
          className="p-1 rounded-full w-full flex justify-center bg-gray-200 hover:bg-gray-300 "
        >
          <FaPlus />
        </button>
      </div>

      {/* Add to Cart */}
      <AddToCartButton className={"bg-green"}/>
    </div>
  );
}
