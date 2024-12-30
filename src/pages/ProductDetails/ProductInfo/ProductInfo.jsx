/* eslint-disable react/prop-types */

import { FaHeart, FaRegHeart } from "react-icons/fa6";
// import AddToCartButton from "../../Home/PopularProducts/Product/AddToCartButton";
import QuantityControl from "../../Home/PopularProducts/Product/QuantityControl";
import Countdown from "../../../components/shared/Countdown";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../../utils/cartSelectors";
import { useEffect, useState } from "react";
import useFavorite from "../../../hooks/useFavorite";

export default function ProductInfo({ product }) {
  const [existingProduct, setExistingProduct] = useState(null);
  
  const {
    name,
    available,
    description,
    // price = 0, // Default to 0 if price is undefined
    // discount = 0, // Default to 0 if discount is undefined
    rating,
  } = product;

  // Random reviews number
  const reviewsNumber = Math.floor(Math.random() * 100) + 1;

  // // Calculate discount amount
  // const discountAmount = (price * discount) / 100;

  // // Calculate discounted price
  // const discountedPrice = price - discountAmount;

  const sizeOptions = ["50g", "60g", "100g", "200g", "1000g"];

  
  const items = useSelector(selectCartItems);


  // Set the existing product from the cart items
  useEffect(() => {
    const availableProduct = items.find((item) => item._id === product._id);
    if (availableProduct) {
      setExistingProduct(availableProduct);
    }
  }, [items, product]);
  const { isFavorite, toggleFavorite } = useFavorite(product);

  return (
    <div className="container mx-auto py-8">
      {/* Availability and Ratings */}
      <div className="flex flex-col gap-y-4 mb-4">
        <div className="bg-[#fde4ec] max-w-24 text-pink-600 px-4 py-2 rounded-md">
          {available}
        </div>
        <div className="text-gray-500">
          Rating: {rating} ({reviewsNumber} reviews)
        </div>
      </div>

      {/* Product Title */}
      <h1 className="text-3xl font-bold mb-2">
        {name}
        <br />
        Organic Quinoa, Brown
      </h1>
      <div className="flex gap-x-4 my-4 items-center mt-2">
        <strong className="text-2xl text-gray-800">
            ${(product.price * (existingProduct?.quantity || 1)).toFixed(2)}
          </strong>
          <strong className="text-red-500 line-through text-sm">
            ${(product.discount * (existingProduct?.quantity || 1)).toFixed(2)}
          </strong>
        </div>
      {/* Description */}
      <p className="text-gray-600 mb-4">
        {description} Seamlessly fashion cooperative platforms whereas
        plug-and-play imperatives. Compellingly innovate proactive outsourcing
        rather than.
      </p>
      <Countdown targetDate="2025-12-31T23:59:59"/>

      {/* Size / Weight Options */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4">
          <p className="text-gray-600">Size / Weight:</p>
          <div className="flex space-x-2 flex-wrap gap-y-4">
            {sizeOptions.map((size, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-md border border-gray-300"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quantity and Favorite */}
      {/* Quantity and Favorite */}
<div className="mb-4 gap-x-2 md:gap-x-4 md:flex md:items-center md:justify-between w-full flex">
  {/* Quantity Label */}
  <p className="text-gray-600 mt-4 md:mt-0">Quantity:</p>

  {/* Quantity Control */}
  <QuantityControl className="w-full" product={product} />

  {/* Favorite Button */}
  <button
    className="p-2 flex items-center justify-center rounded-md shadow-md transition duration-200 hover:bg-sky-600 hover:text-white text-sky-600 border border-sky-600 h-8"
    onClick={toggleFavorite} // Replace with your toggle function
  >
    {isFavorite ? (
      <FaHeart size={20} className="text-pink-500" /> // Filled heart for favorite
    ) : (
      <FaRegHeart size={20} /> // Outline heart for not favorite
    )}
  </button>
</div>

    </div>
  );
}
