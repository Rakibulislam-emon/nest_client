/* eslint-disable react/prop-types */

import { FaRegHeart } from "react-icons/fa6";
// import AddToCartButton from "../../Home/PopularProducts/Product/AddToCartButton";
import QuantityControl from "../../Home/PopularProducts/Product/QuantityControl";
import Countdown from "../../../components/shared/Countdown";

export default function ProductInfo({ product }) {
  const {
    name,
    available,
    description,
    price = 0, // Default to 0 if price is undefined
    discount = 0, // Default to 0 if discount is undefined
    rating,
  } = product;

  // Random reviews number
  const reviewsNumber = Math.floor(Math.random() * 100) + 1;

  // Calculate discount amount
  const discountAmount = (price * discount) / 100;

  // Calculate discounted price
  const discountedPrice = price - discountAmount;

  const sizeOptions = ["50g", "60g", "100g", "200g", "1000g"];

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

      {/* Price and Discounts */}
      <div className="flex items-center mb-4">
        <span className="text-4xl font-bold text-green-500">
          ${discount > 0 ? discountedPrice.toFixed(2) : price.toFixed(2)}
        </span>
        {discount > 0 && (
          <>
            <span className="text-gray-500 line-through ml-2">
              ${price.toFixed(2)}
            </span>
            <span className="text-gray-500 ml-2">
              ${discountAmount.toFixed(2)} Off
            </span>
          </>
        )}
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
      <div className="mb-4 gap-x-2 md:gap-x-4 md:flex md:items-center md:justify-between w-full flex">
        <p className="text-gray-600 mt-4 md:mt-0">Quantity:</p>
        <QuantityControl className="w-full" product={product}/>
        <button className="p-2 hover:bg-sky-600 hover:text-white shadow-lg duration-200 hover:rounded-lg mr-2 h-8 flex">
          <FaRegHeart size={20} />
        </button>
      </div>
    </div>
  );
}
