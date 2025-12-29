/* eslint-disable react/prop-types */
import QuantityControl from "./QuantityControl";
import { Link } from "react-router";
import { useFilter } from "../../../../context/FilterContext";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../../../utils/cartSelectors";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import useFavorite from "../../../../hooks/useFavorite";
import Badge from "../../../../components/common/Badge";

export default function ProductCard({ product }) {
  const [existingProduct, setExistingProduct] = useState(null);
  const { setSelectedCategories } = useFilter();
  const { _id, name, category, image, rating, discount, price } = product;

  // Favorite Logic
  const { isFavorite, toggleFavorite } = useFavorite(product);

  const fallbackImage = "https://picsum.photos/200/300";
  const img = image && image.trim() !== "" ? image : fallbackImage;

  const handleImageError = (e) => {
    e.target.src = fallbackImage;
  };

  const handleSetCategory = () => {
    setSelectedCategories([category]);
  };

  const items = useSelector(selectCartItems);

  useEffect(() => {
    const availableProduct = items.find((item) => item._id === product._id);
    if (availableProduct) {
      setExistingProduct(availableProduct);
    }
  }, [items, product]);

  const currentPrice = Number(price || 0) * (existingProduct?.quantity || 1);
  const originalPrice =
    Number(discount || 0) * (existingProduct?.quantity || 1);
  const discountPercentage =
    Number(discount) > Number(price)
      ? Math.round(
          ((Number(discount) - Number(price)) / Number(discount)) * 100
        )
      : 0;

  return (
    <div className="h-full group/card p-2">
      <div className="h-full flex flex-col justify-between bg-white rounded-[2.5rem] border border-neutral-100 shadow-soft hover:shadow-premium hover:-translate-y-3 transition-all duration-700 ease-out overflow-hidden relative">
        {/* Top Section with Light Background */}
        <div className="relative p-6 bg-neutral-50/50 h-72 rounded-t-[2.5rem] overflow-hidden">
          {/* Badge */}
          {discountPercentage > 0 && (
            <div className="absolute top-5 left-5 z-10">
              <Badge
                variant="danger"
                rounded="full"
                className="bg-rose-500 text-white font-bold px-4 py-1.5 border-none shadow-md shadow-rose-200"
              >
                {discountPercentage}% OFF
              </Badge>
            </div>
          )}

          {/* Favorite Icon */}
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite();
            }}
            className="absolute top-5 right-5 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-medium hover:bg-white hover:scale-110 active:scale-95 transition-all duration-300"
            title="Add to Wishlist"
          >
            {isFavorite ? (
              <MdFavorite className="text-rose-500 text-2xl" />
            ) : (
              <MdFavoriteBorder className="text-neutral-400 text-2xl" />
            )}
          </button>

          {/* Product Image */}
          <Link
            onClick={handleSetCategory}
            to={`/product/detail/${_id}`}
            className="flex justify-center items-center h-full w-full"
          >
            <div className="relative group-hover:scale-110 transition-transform duration-1000 ease-in-out">
              <div className="absolute inset-0 bg-primary-100/20 blur-3xl rounded-full scale-75 group-hover/card:scale-110 transition-transform duration-700"></div>
              <img
                src={img}
                alt={name}
                className="relative h-48 w-full object-contain mix-blend-multiply drop-shadow-xl group-hover/card:rotate-2 transition-all duration-700"
                onError={handleImageError}
              />
            </div>
          </Link>
        </div>

        {/* Product Details Section */}
        <div className="px-6 pb-6 pt-5 flex flex-col flex-grow bg-white">
          <div className="mb-3">
            <span
              className="text-[11px] text-primary-600 font-bold uppercase tracking-[0.15em] hover:text-primary-700 cursor-pointer transition-colors block mb-1"
              onClick={handleSetCategory}
            >
              {category}
            </span>
            <Link to={`/product/detail/${_id}`}>
              <h3
                className="text-neutral-900 font-heading font-bold text-xl leading-snug line-clamp-2 group-hover/card:text-primary-600 transition-colors"
                title={name}
              >
                {name}
              </h3>
            </Link>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-amber-400 text-sm">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < Math.round(rating) ? "fill-current" : "text-neutral-200"
                  }
                />
              ))}
            </div>
            <span className="text-sm text-neutral-400 font-bold">
              ({rating})
            </span>
          </div>

          {/* Price Container */}
          <div className="flex flex-col gap-1 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-heading font-bold text-neutral-900">
                ${currentPrice.toFixed(2)}
              </span>
              {originalPrice > currentPrice && (
                <span className="text-base text-neutral-300 line-through font-medium">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-auto pt-2">
            <div className="transform transition-all duration-500 group-hover/card:scale-[1.02]">
              <QuantityControl product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
