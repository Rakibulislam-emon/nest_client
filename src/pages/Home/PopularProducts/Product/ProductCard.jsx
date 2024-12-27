/* eslint-disable react/prop-types */
import SideBar from "./SideBar";
import QuantityControl from "./QuantityControl";
import { Link } from "react-router";

export default function ProductCard({ product }) {
  const {
    _id,
    name,
    category,
    image,
    rating,
    price,
    discount,
    exp,
  } = product;

  const fallbackImage = "https://picsum.photos/200/300";
  const img = image && image.trim() !== "" ? image : fallbackImage;

  const handleImageError = (e) => {
    e.target.src = fallbackImage;
  };

  return (
    <div className="group  rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ">
      {/* Product image */}
      <div className="p-4 overflow-hidden hover:shadow-xl transition-all duration-200 relative">
        <Link to={`/product/detail/${_id}`} className="flex justify-center">
          <img
            src={img}
            alt={name}
            className="w-full h-40 object-cover rounded-lg"
            onError={handleImageError}
          />
        </Link>
        <div className="absolute top-2 left-2 bg-red-500 text-white w-12 h-12 flex flex-col items-center justify-center rounded-full text-xs font-bold border-2 border-white shadow-md">
          <span className="text-base leading-tight">{discount}%</span>
          <span className="text-[10px] font-medium uppercase tracking-wide">Off</span>
        </div>
        <SideBar />
      </div>

      {/* Product details */}
      <div className="p-2 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <span className="text-sm text-gray-600">{category}</span>
        <div className="flex gap-x-4 items-center mt-2">
          <span className="text-lg text-gray-800">${price}</span>
          <span className="text-red-500 line-through text-sm">${discount}</span>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-600 md:hidden block">({rating} ratings)</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-600 hidden md:block">({rating} ratings)</p>
        </div>
        <div className="text-sm text-gray-500 hidden md:block">Expiry Date: {exp}</div>
      </div>
      <QuantityControl className={"opacity-0"} />
    </div>
  );
}