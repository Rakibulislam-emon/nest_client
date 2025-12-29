/* eslint-disable react/prop-types */
import {
  FaHeart,
  FaRegHeart,
  FaShieldHalved,
  FaTruckFast,
  FaAward,
} from "react-icons/fa6";
import QuantityControl from "../../Home/PopularProducts/Product/QuantityControl";
import Countdown from "../../../components/shared/Countdown";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../../utils/cartSelectors";
import { useEffect, useState } from "react";
import useFavorite from "../../../hooks/useFavorite";
import Badge from "../../../components/common/Badge";
import { twMerge } from "tailwind-merge";

export default function ProductInfo({ product }) {
  const [existingProduct, setExistingProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("100g");

  const {
    name,
    available,
    description,
    price = 0,
    discount = 0,
    rating,
  } = product;

  const reviewsNumber = Math.floor(Math.random() * 100) + 1;
  const sizeOptions = ["50g", "60g", "100g", "200g", "500g"];
  const items = useSelector(selectCartItems);

  useEffect(() => {
    const availableProduct = items.find((item) => item._id === product._id);
    if (availableProduct) {
      setExistingProduct(availableProduct);
    }
  }, [items, product]);

  const { isFavorite, toggleFavorite } = useFavorite(product);

  return (
    <div className="flex flex-col gap-y-6 animate-fadeIn">
      {/* Availability & Rating */}
      <div className="flex flex-wrap items-center gap-4">
        <Badge
          variant={available === "In Stock" ? "success" : "danger"}
          size="lg"
        >
          {available}
        </Badge>
        <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 rounded-full border border-amber-100">
          <span className="text-amber-500 font-bold">★ {rating}</span>
          <span className="text-neutral-400 text-xs font-semibold">
            ({reviewsNumber} Reviews)
          </span>
        </div>
      </div>

      {/* Title & Brand */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 font-heading leading-tight">
          {name}
        </h1>
        <p className="text-primary-600 font-bold tracking-[0.1em] uppercase text-xs">
          Nest Premium Organic Series
        </p>
      </div>

      {/* Pricing Block */}
      <div className="flex items-baseline gap-4 py-4 border-y border-neutral-100">
        <span className="text-4xl font-black text-neutral-900 font-heading">
          ${(price * (existingProduct?.quantity || 1)).toFixed(2)}
        </span>
        {discount > 0 && (
          <span className="text-xl font-bold text-neutral-400 line-through">
            ${(discount * (existingProduct?.quantity || 1)).toFixed(2)}
          </span>
        )}
        <Badge
          variant="primary"
          className="ml-auto font-black px-4 py-1.5 hidden sm:inline-flex"
        >
          Save Big Today
        </Badge>
      </div>

      {/* Description */}
      <p className="text-neutral-600 leading-relaxed font-medium">
        {description ||
          "A meticulously harvested organic product designed for the health-conscious kitchen. Pure, natural, and bursting with authentic flavor signatures."}
      </p>

      {/* Variant Selector */}
      <div className="space-y-4 py-6 border-t border-neutral-100">
        <div className="flex justify-between items-center">
          <h4 className="text-sm font-black text-neutral-900 uppercase tracking-widest">
            Select Size / Weight
          </h4>
          <span className="text-[10px] font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-md">
            Size Guide
          </span>
        </div>
        <div className="flex flex-wrap gap-3">
          {sizeOptions.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={twMerge(
                "px-6 py-3 rounded-2xl border-2 font-bold transition-all duration-500 animate-spring",
                selectedSize === size
                  ? "border-primary-500 bg-primary-50 text-primary-700 shadow-glow-sm scale-110 z-10"
                  : "border-neutral-100 text-neutral-400 hover:border-primary-200 hover:bg-neutral-50 hover:scale-105"
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Trust Badges & Countdown */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <div className="bg-neutral-900 p-8 md:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden group flex-shrink-0 w-full  lg:w-7/12">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/10 blur-3xl rounded-full" />
          <p className="text-neutral-500 text-[10px] font-black uppercase tracking-widest mb-6 text-center">
            Limited Time Offer
          </p>
          <div className="flex justify-center">
            <Countdown targetDate="2025-12-31T23:59:59" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 flex-1 w-full">
          {[
            {
              icon: <FaTruckFast />,
              text: "Free 24h Delivery",
              sub: "Orders over $50",
            },
            {
              icon: <FaShieldHalved />,
              text: "Secure Payment",
              sub: "100% encrypted",
            },
            {
              icon: <FaAward />,
              text: "Quality Guarantee",
              sub: "Elite certified",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-3 rounded-2xl border border-neutral-100 glass hover:border-primary-200 transition-colors group/trust"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-50 flex items-center justify-center text-primary-600 transition-transform group-hover/trust:scale-110">
                {item.icon}
              </div>
              <div>
                <p className="text-[11px] font-black text-neutral-900 uppercase tracking-tight">
                  {item.text}
                </p>
                <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actions: Quantity & Favorite */}
      <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
        <div className="flex-1 w-full sm:w-auto">
          <QuantityControl className="h-14" product={product} />
        </div>
        <button
          onClick={toggleFavorite}
          className={twMerge(
            "h-14 w-14 sm:w-16 flex items-center justify-center rounded-2xl border-2 transition-all duration-500 shadow-soft group",
            isFavorite
              ? "bg-rose-50 border-rose-200 text-rose-500 shadow-rose-100"
              : "bg-white border-neutral-100 text-neutral-400 hover:border-rose-200 hover:text-rose-500"
          )}
          aria-label="Add to Favorites"
        >
          {isFavorite ? (
            <FaHeart className="text-2xl animate-heartPop" />
          ) : (
            <FaRegHeart className="text-2xl transition-transform group-hover:scale-125" />
          )}
        </button>
      </div>

      {/* Meta Information */}
      <div className="pt-8 px-8 pb-8 rounded-[2rem] bg-neutral-50/50 border border-neutral-100/50 grid grid-cols-2 gap-y-4 mt-4">
        <div className="flex flex-col gap-1">
          <span className="text-[9px] font-black text-neutral-400 uppercase tracking-widest">
            SKU
          </span>
          <span className="text-xs font-bold text-neutral-900">
            PRD-{product._id?.slice(-6).toUpperCase() || "99824"}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[9px] font-black text-neutral-400 uppercase tracking-widest">
            Category
          </span>
          <span className="text-xs font-bold text-neutral-900">
            {product.category || "Fresh Organic"}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[9px] font-black text-neutral-400 uppercase tracking-widest">
            Tags
          </span>
          <span className="text-xs font-bold text-neutral-900">
            Healthy, Organic, Premium
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[9px] font-black text-neutral-400 uppercase tracking-widest">
            Availability
          </span>
          <span className="text-xs font-bold text-neutral-900">
            12 Items in Elite Stock
          </span>
        </div>
      </div>
    </div>
  );
}
