import { useFilter } from "../../../context/FilterContext";
import ProductCard from "../../Home/PopularProducts/Product/ProductCard";

export default function RelatedProducts() {
  const { filteredProducts } = useFilter();

  return (
    <div className="space-y-10">
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 font-heading tracking-tight leading-tight">
        Related Products
      </h2>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p className="my-8 text-center text-gray-500">
          No related products found.
        </p>
      )}
    </div>
  );
}
