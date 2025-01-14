import { Link } from "react-router";
import Countdown from "../../../components/shared/Countdown";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice/cartSlice";
import toast from "react-hot-toast";
import { useState } from "react";

/* eslint-disable react/prop-types */
export default function DealsCard({ deal }) {
  const [success ,setSuccess] = useState(false);
  const { image, name, price, rating, discount, available } = deal;

  const dispatch = useDispatch();
  const handleClick = () => {
    if (deal) {
      dispatch(addToCart(deal));
      // toast
      toast.success("Product added to cart!", {
        position: "top-right",
        style: {
          background: "black",
          color: "#fff",
        },
      });
      setSuccess(true);
    }
  };
  return (
    <div className=" py-20 ">
      <div className=" mb-20  w-full">
        <div className="relative  rounded-3xl  max-w-md max-h-[400px] z-1">
          {/* Image */}
          <Link to={`/product/detail/${deal._id}`}>
            <img
              src={image}
              alt="Deal Image"
              className="w-full  h-[360px] rounded-lg object-cover mix-blend-multiply"
            />
          </Link>
          <div className=" absolute top-40 left-10 ">
            <Countdown targetDate="2025-4-31T23:59:59" />
          </div>

          {/* Card Content */}
          <div className="absolute  bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2/4 p-4 bg-white rounded-lg shadow-md  w-[calc(100%-70px)]">
            <h1 className="text-lg font-semibold mb-2">{name}</h1>

            <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
              <span>Rating:{rating} ⭐⭐⭐⭐</span>
              <span>{available}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg">Price: ${price}</span>
              <span className="text-red-500 line-through text-sm">
                Discount price: ${discount}
              </span>
            </div>

          {
            success? (
              <div className="flex border p-2  items-center justify-center mt-4 text-xl text-white bg-green rounded-lg">
                Product added to cart!
              </div>
            ) : (
              <button
              onClick={handleClick}
              className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Add to Cart
            </button>
            )
          }
          </div>
        </div>
      </div>
    </div>
  );
}
