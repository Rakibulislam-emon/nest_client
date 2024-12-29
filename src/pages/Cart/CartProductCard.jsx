import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { decreesQuantity, increaseQuantity, removeFromCart } from "../../redux/cartSlice/cartSlice";
import { useEffect, useState } from "react";
import { selectCartItems } from "../../utils/cartSelectors";

/* eslint-disable react/prop-types */
const CartProductCard = ({ product }) => {
  const [existingProduct, setExistingProduct] = useState(null);
  const dispatch = useDispatch();
  const removeCart = (product) => {
    if (product) {
      dispatch(removeFromCart(product));
      // toast
      toast.error("Product removed from cart!", {
        position: "top-right",
        style: {
          background: "black",
          color: "#fff",
        },
      });
    }
  };


 

  const items = useSelector(selectCartItems);


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
    <div className="flex flex-col lg:flex-row items-start gap-4 w-full">
      {/* Image Section */}
      <div className="w-full h-44 lg:w-auto lg:shrink-0 border">
        <img
          src={product.image}
          className="w-full h-full lg:w-44 object-cover rounded-md"
          alt={product.name}
        />
      </div>

      {/* Details Section */}
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h3>
        <div className="space-y-1">
          <h6 className="text-sm text-gray-800">
            Category: <strong className="ml-2">{product.category}</strong>
          </h6>
          <h6 className="text-sm text-gray-800">
            Expiry Date: <strong className="ml-2">{product.exp}</strong>
          </h6>
          <h6 className="text-sm text-gray-800">
            Available: <strong className="ml-2">{product.available}</strong>
          </h6>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex flex-wrap gap-4">
          <button
            onClick={() => removeCart(product._id)}
            type="button"
            className="font-semibold text-red-500 text-sm flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-current inline"
              viewBox="0 0 24 24"
            >
              <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"></path>
              <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"></path>
            </svg>
            Remove
          </button>
          <button
            type="button"
            className="font-semibold text-pink-500 text-sm flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-current inline"
              viewBox="0 0 64 64"
            >
              <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"></path>
            </svg>
            Move to wish list
          </button>
        </div>
      </div>

      {/* Price and Quantity Section */}
      <div className="mt-4 lg:mt-0 lg:ml-auto text-right  flex md:flex-col gap-x-4">
        <div className="flex items-center justify-end gap-3 ">
          <button
            onClick={decrement}
            type="button"
            className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-2 fill-white"
              viewBox="0 0 124 124"
            >
              <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"></path>
            </svg>
          </button>
          <span className="font-bold text-sm leading-[18px]"> {existingProduct?.quantity || 0}</span>
          <button
            onClick={increment}
            type="button"
            className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-2 fill-white"
              viewBox="0 0 42 42"
            >
              <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"></path>
            </svg>
          </button>
        </div>

        <div className="mt-4">
        <p className="text-sm text-gray-800">
          Price:{" "}
          <strong>
            ${(product.price * (existingProduct?.quantity || 1)).toFixed(2)}
          </strong>
        </p>
        <p className="text-sm text-gray-800">
          Discount:{" "}
          <strong className="text-red-500 line-through text-sm">
            ${(product.discount * (existingProduct?.quantity || 1)).toFixed(2)}
          </strong>
        </p>
        
      </div>
      </div>
    </div>
  );
};

export default CartProductCard;
