import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  decreesQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/cartSlice/cartSlice";
import { useEffect, useState } from "react";
import { selectCartItems } from "../../utils/cartSelectors";
import { Link } from "react-router";
import useFavorite from "../../hooks/useFavorite";
import Badge from "../../components/common/Badge";
import { FaTrash, FaHeart, FaRegHeart, FaPlus, FaMinus } from "react-icons/fa6";

/* eslint-disable react/prop-types */
const CartProductCard = ({ product }) => {
  const { isFavorite, toggleFavorite } = useFavorite(product);
  const [existingProduct, setExistingProduct] = useState(null);
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);

  useEffect(() => {
    const availableProduct = items.find((item) => item._id === product._id);
    if (availableProduct) {
      setExistingProduct(availableProduct);
    }
  }, [items, product]);

  const removeCart = (id) => {
    dispatch(removeFromCart(id));
    toast.error("Removed from cart", {
      position: "top-right",
      style: { background: "black", color: "#fff" },
    });
  };

  const increment = () => {
    if (existingProduct) dispatch(increaseQuantity(product._id));
  };

  const decrement = () => {
    if (existingProduct && existingProduct.quantity > 1) {
      dispatch(decreesQuantity(product._id));
    }
  };

  const currentPrice =
    Number(product.price || 0) * (existingProduct?.quantity || 1);
  const originalPrice =
    Number(product.discount || 0) * (existingProduct?.quantity || 1);

  return (
    <div className="group/item flex flex-col md:flex-row items-center gap-6 py-8 first:pt-0 last:pb-0 border-b last:border-0 border-neutral-100 transition-all duration-300">
      {/* Product Image */}
      <Link to={`/product/detail/${product._id}`} className="shrink-0">
        <div className="w-32 h-32 md:w-40 md:h-40 bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-100 flex items-center justify-center group-hover/item:shadow-md transition-shadow duration-500">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-4 mix-blend-multiply group-hover/item:scale-110 transition-transform duration-700"
          />
        </div>
      </Link>

      {/* Details Section */}
      <div className="flex-1 min-w-0 space-y-4 text-center md:text-left">
        <div>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
            <Badge variant="primary" size="sm">
              {product.category}
            </Badge>
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
              Exp: {product.exp}
            </span>
          </div>
          <Link to={`/product/detail/${product._id}`}>
            <h3 className="text-xl font-bold text-neutral-900 font-heading hover:text-primary-600 transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <button
            onClick={() => removeCart(product._id)}
            className="flex items-center gap-2 text-xs font-bold text-rose-500 hover:text-rose-600 transition-colors py-1 group/btn"
          >
            <FaTrash className="group-hover/btn:animate-shake" /> Remove
          </button>
          <button
            onClick={toggleFavorite}
            className={`flex items-center gap-2 text-xs font-bold transition-colors py-1 ${
              isFavorite
                ? "text-primary-600"
                : "text-neutral-400 hover:text-primary-500"
            }`}
          >
            {isFavorite ? <FaHeart /> : <FaRegHeart />}
            {isFavorite ? "Saved" : "Save for later"}
          </button>
        </div>
      </div>

      {/* Quantity & Pricing Container */}
      <div className="flex flex-col items-center md:items-end gap-4 shrink-0">
        {/* Modern Quantity Selector */}
        <div className="flex items-center bg-neutral-100 rounded-xl p-1 border border-neutral-200 shadow-inner">
          <button
            onClick={decrement}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-neutral-500 hover:text-rose-500 hover:shadow-sm transition-all"
          >
            <FaMinus size={10} />
          </button>
          <span className="w-12 text-center font-black text-neutral-900 text-sm">
            {existingProduct?.quantity || 0}
          </span>
          <button
            onClick={increment}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-neutral-500 hover:text-primary-600 hover:shadow-sm transition-all"
          >
            <FaPlus size={10} />
          </button>
        </div>

        {/* Pricing Block */}
        <div className="text-center md:text-right">
          <div className="text-2xl font-black text-neutral-900 font-heading">
            ${currentPrice.toFixed(2)}
          </div>
          {originalPrice > currentPrice && (
            <div className="text-sm font-bold text-neutral-300 line-through">
              ${originalPrice.toFixed(2)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
