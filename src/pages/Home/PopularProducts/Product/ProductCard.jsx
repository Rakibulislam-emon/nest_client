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
  const { setSelectedCategory } = useFilter();
  const { _id, name, category, image, rating, discount, exp, price } = product;

  // Favorite Logic
  const { isFavorite, toggleFavorite } = useFavorite(product);

  const fallbackImage = "https://picsum.photos/200/300";
  const img = image && image.trim() !== "" ? image : fallbackImage;

  const handleImageError = (e) => {
    e.target.src = fallbackImage;
  };

  const handleSetCategory = () => {
    setSelectedCategory(category);
  };

  const items = useSelector(selectCartItems);

  useEffect(() => {
    const availableProduct = items.find((item) => item._id === product._id);
    if (availableProduct) {
      setExistingProduct(availableProduct);
    }
  }, [items, product]);

  const currentPrice = price * (existingProduct?.quantity || 1);
  const originalPrice = discount * (existingProduct?.quantity || 1);
  const discountPercentage =
    discount > price ? Math.round(((discount - price) / discount) * 100) : 0;

  return (
    <div className="h-full p-2">
      <div className="group h-full flex flex-col justify-between bg-white rounded-[2rem] border-2 border-emerald-500 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
        {/* Top Section with Light Background */}
        <div className="relative p-6 bg-neutral-50 h-64 rounded-t-[2rem]">
          {/* Badge */}
          {discountPercentage > 0 && (
            <div className="absolute top-4 left-4 z-10">
              <Badge
                variant="danger"
                rounded="full"
                className="bg-rose-100 text-rose-500 font-bold px-3 py-1 border-none shadow-sm"
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
            className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-md hover:scale-110 transition-transform duration-200"
            title="Add to Wishlist"
          >
            {isFavorite ? (
              <MdFavorite className="text-rose-500 text-xl" />
            ) : (
              <MdFavoriteBorder className="text-neutral-400 text-xl" />
            )}
          </button>

          {/* Product Image */}
          <Link
            onClick={handleSetCategory}
            to={`/product/detail/${_id}`}
            className="flex justify-center items-center h-full w-full"
          >
            <img
              src={img}
              alt={name}
              className="h-44 object-contain mix-blend-multiply drop-shadow-md group-hover:scale-110 transition-transform duration-500 ease-in-out"
              onError={handleImageError}
            />
          </Link>
        </div>

        {/* Product Details Section */}
        <div className="px-5 pb-5 pt-4 flex flex-col flex-grow bg-white">
          <div className="mb-2">
            <span
              className="text-xs text-neutral-500 font-bold uppercase tracking-wider hover:text-primary-600 cursor-pointer transition-colors"
              onClick={handleSetCategory}
            >
              {category}
            </span>
            <Link to={`/product/detail/${_id}`}>
              <h3
                className="text-neutral-900 font-heading font-bold text-xl leading-tight mt-1 mb-2 line-clamp-2 group-hover:text-primary-700 transition-colors"
                title={name}
              >
                {name}
              </h3>
            </Link>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-secondary-400 text-sm">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < Math.round(rating)
                      ? "text-secondary-400"
                      : "text-neutral-200"
                  }
                />
              ))}
            </div>
            <span className="text-sm text-neutral-500 font-medium">
              ({rating})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-5">
            <span className="text-3xl font-heading font-bold text-primary-600">
              ${currentPrice.toFixed(2)}
            </span>
            {originalPrice > currentPrice && (
              <span className="text-base text-neutral-400 line-through font-medium">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Action Button - Always visible, customized */}
          <div className="mt-auto">
            <QuantityControl product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
