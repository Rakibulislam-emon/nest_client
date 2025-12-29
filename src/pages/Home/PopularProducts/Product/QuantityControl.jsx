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

  useEffect(() => {
    const availableProduct = items.find((item) => item._id === product._id);
    if (availableProduct) {
      setExistingProduct(availableProduct);
    }
  }, [items, product]);

  const toastStyle = {
    background: "black",
    color: "#fff",
  };

  const increment = () => {
    if (existingProduct) {
      dispatch(increaseQuantity(product._id));
      toast.success("Quantity updated!", {
        position: "top-right",
        style: toastStyle,
      });
    }
  };

  const decrement = () => {
    if (existingProduct && existingProduct.quantity > 1) {
      dispatch(decreesQuantity(product._id));
      toast.error("Quantity decreased!", {
        position: "top-right",
        style: toastStyle,
      });
    }
  };

  return (
    <div className={twMerge(`w-full`, className)}>
      {existingProduct ? (
        <div className="flex items-center justify-between bg-neutral-100 rounded-lg p-1 shadow-inner">
          <button
            onClick={decrement}
            className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-neutral-600 shadow-sm hover:bg-rose-50 hover:text-rose-500 transition-colors"
          >
            <FaMinus size={10} />
          </button>

          <span className="font-bold text-neutral-800 text-sm">
            {existingProduct.quantity} in Cart
          </span>

          <button
            onClick={increment}
            className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-neutral-600 shadow-sm hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
          >
            <FaPlus size={10} />
          </button>
        </div>
      ) : (
        <AddToCartButton product={product} />
      )}
    </div>
  );
}
