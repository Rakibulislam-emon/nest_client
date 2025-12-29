import { useSelector } from "react-redux";
import { Link } from "react-router";
import { HiArrowRight } from "react-icons/hi2";
import ProductCard from "../Home/PopularProducts/Product/ProductCard";
import EliteEmptyState from "../../components/shared/EliteEmptyState";
import { selectFavorite } from "../../utils/cartSelectors";

const Wishlist = () => {
  const favorites = useSelector(selectFavorite);

  if (!favorites || favorites.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 md:py-20 animate-fade-in">
        <EliteEmptyState
          title="Your Wishlist is Empty"
          message="Whatever you're dreaming of, keep it here. Browse our collection and find something special."
          actionText="Start Exploring"
          actionLink="/shop"
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4 mb-10 border-b border-neutral-100 pb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-black font-heading text-neutral-900 tracking-tight mb-2">
            Your Curation
          </h1>
          <p className="text-neutral-500 font-medium">
            {favorites.length} {favorites.length === 1 ? "item" : "items"} saved
            for later
          </p>
        </div>
        <Link to="/shop">
          <button className="hidden md:flex items-center gap-2 text-primary-600 font-bold uppercase tracking-widest text-xs hover:text-primary-700 transition-colors group">
            Continue Shopping
            <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {favorites.map((product) => (
          <div key={product._id} className="h-full">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
