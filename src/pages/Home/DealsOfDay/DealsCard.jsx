import { Link } from "react-router";
import Countdown from "../../../components/shared/Countdown";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice/cartSlice";
import toast from "react-hot-toast";
import { useState } from "react";
import Card from "../../../components/common/Card";
import Button from "../../../components/common/Button";
import { FaCartPlus, FaCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

/* eslint-disable react/prop-types */
export default function DealsCard({ deal }) {
  const [success, setSuccess] = useState(false);
  const { image, name, price, rating, discount, available } = deal;

  const dispatch = useDispatch();
  const handleClick = () => {
    if (deal) {
      dispatch(addToCart(deal));
      toast.success("Product added to cart!", {
        position: "top-right",
        style: {
          background: "#1f2937",
          color: "#fff",
        },
      });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    }
  };

  return (
    <div className="py-8 px-2 h-full">
      <Card className="h-full flex flex-col relative overflow-visible shadow-medium hover:shadow-premium transition-all duration-300 border-none bg-gradient-to-br from-white to-neutral-50">
        {/* Banner Image Area */}
        <div className="relative h-64 overflow-hidden rounded-t-2xl group">
          <Link
            to={`/product/detail/${deal._id}`}
            className="block h-full w-full"
          >
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-t-2xl transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
          </Link>

          {/* Countdown Overlay */}
          <div className="absolute bottom-4 inset-x-4 flex justify-center">
            <Countdown />
          </div>
        </div>

        {/* Content Area */}
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <Link to={`/product/detail/${deal._id}`} className="flex-1 mr-2">
              <h3
                className="text-lg font-heading font-bold text-neutral-900 line-clamp-2 hover:text-primary-600 transition-colors leading-tight"
                title={name}
              >
                {name}
              </h3>
            </Link>
            <div className="flex bg-secondary-100/50 text-secondary-700 px-2 py-0.5 rounded-md text-xs font-bold items-center gap-1 backdrop-blur-sm shrink-0">
              {rating} <FaStar size={10} className="text-secondary-500" />
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="bg-primary-50 text-primary-700 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide border border-primary-100">
              In Stock: {available}
            </span>
          </div>

          <div className="mt-auto pt-4 border-t border-dashed border-neutral-100">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-[10px] font-bold text-neutral-400 mb-0.5 uppercase tracking-wider">
                  Price
                </p>
                <p className="text-2xl font-heading font-bold text-neutral-900 leading-none">
                  ${price}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold text-neutral-400 mb-0.5 uppercase tracking-wider">
                  Was
                </p>
                <p className="text-sm text-rose-500 line-through font-medium">
                  ${discount}
                </p>
              </div>
            </div>

            <Button
              onClick={handleClick}
              variant={success ? "success" : "primary"}
              size="md"
              className="w-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all py-2.5 text-xs uppercase font-bold tracking-wider"
              leftIcon={
                success ? <FaCheck size={12} /> : <FaCartPlus size={12} />
              }
            >
              {success ? "Added" : "Add to Cart"}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
