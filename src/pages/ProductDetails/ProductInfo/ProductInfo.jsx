/* eslint-disable react/prop-types */

import { FaRegHeart } from "react-icons/fa6";
import AddToCartButton from "../../Home/PopularProducts/Product/AddToCartButton";

export default function ProductInfo({ data }) {
  const {
    available,
    name,
    description,
    price,
    discount,
    category,
    rating,
    date,
    exp,
    productNumber,
    _id,
  } = data;

  // random reviews number
  const reviewsNumber = Math.floor(Math.random() * 100) + 1;
  const discountAmount = (price * discount) / 100;
  const sizeOptions = ['50g', '60g', '100g','200g','1000g'];

  return (
    <div className="container mx-auto  py-8  ">
      <div className="flex flex-col gap-y-4  mb-4">
        <div className="bg-[#fde4ec]  max-w-24 text-pink-600 px-4 py-2 rounded-md">
          {available}
        </div>
        <div className="text-gray-500">
          rating {rating} ({reviewsNumber} reviews)
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-2">
        Seeds of Change
        <br />
        Organic Quinoa, Brown
      </h1>
      <div className="flex items-center mb-4">
        <span className="text-4xl font-bold text-green-500">${price}</span>
        <span className="text-gray-500 line-through ml-2">${discount}</span>
        <span className="text-gray-500 ml-2">26% Off</span>
      </div>
      <p className="text-gray-600 mb-4">
        {description} Seamlessly fashion cooperative platforms whereas
        plug-and-play imperatives. Compellingly innovate proactive outsourcing
        rather than.
      </p>
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
    <div className="mb-4 gap-x-2  md:gap-x-4 flex items-center justify-between  w-full">
        <p className="text-gray-600  ">Quantity:</p>
        <input
          type="number"
          className="border border-gray-300 rounded-md px-2 py-2 w-16"
         
        />
        <AddToCartButton className={"bg-green   px-2"}>Add to Cart</AddToCartButton>

        <button className="p-2 hover:bg-sky-600 hover:text-white shadow-lg duration-200 hover:rounded-lg mr-2">
          <FaRegHeart size={20} />
        </button>
      </div>
    </div>
  );
}
