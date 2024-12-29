/* eslint-disable react/prop-types */

import { FaMinus, FaPlus } from "react-icons/fa6";
import AddToCartButton from "./AddToCartButton";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { selectCartItems } from "../../../../utils/cartSelectors";
import { useDispatch, useSelector } from "react-redux";
import {
  decreesQuantity,
  increaseQuantity,
} from "../../../../redux/cartSlice/cartSlice";
import toast from "react-hot-toast";

export default function QuantityControl({ className, product }) {
  const [existingProduct, setExistingProduct] = useState(null);

  const items = useSelector(selectCartItems);

  const dispatch = useDispatch();

  // Set the existing product from the cart items
  useEffect(() => {
    const availableProduct = items.find((item) => item._id === product._id);
    if (availableProduct) {
      setExistingProduct(availableProduct);
    }
  }, [items, product]);

  // Increment product quantity
  const increment = () => {
    if (existingProduct) {
      dispatch(increaseQuantity(product._id));
      // toast
        toast.success("Product added to cart!", {
          position: "top-right",
          style: {
            background: 'black',
            color: '#fff',
          },
        });
    }
  };

  // Decrement product quantity
  const decrement = () => {
    if (existingProduct && existingProduct.quantity > 1) {
      dispatch(decreesQuantity(product._id));
      // toast
        toast.error("Product removed from cart!", {
          position: "top-right",
          style: {
            background: 'black',
            color: '#fff',
          }
        });
    }
  };

  return (
    <div
      className={twMerge(
        `p-2 gap-x-6 md:flex justify-between items-center group-hover:opacity-100 transition-opacity duration-300`,
        className
      )}
    >
      {existingProduct ? (
        <div className="flex border-dashed border items-center space-x-2 p-1 rounded-lg w-full">
          <button
            onClick={decrement}
            className="p-1 rounded-full w-full bg-gray-200 hover:bg-gray-300 flex justify-center"
          >
            <FaMinus />
          </button>
          <span className="text-lg">{existingProduct.quantity}</span>
          <button
            onClick={increment}
            className="p-1 rounded-full w-full flex justify-center bg-gray-200 hover:bg-gray-300"
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <div className="flex-grow">
          <AddToCartButton className={"bg-green"} product={product} />
        </div>
      )}
    </div>
  );
}
