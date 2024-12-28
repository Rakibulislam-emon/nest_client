import { useFilter } from "../../../context/FilterContext";
import ProductCard from "../../Home/PopularProducts/Product/ProductCard";

export default function RelatedProducts() {
  const { filteredProducts } = useFilter();

  return (
    <div className="mt-8">
        <h2 className="text-2xl font-semibold">Related Products</h2>
        {filteredProducts.length > 0 ? (
          <div className="grid my-8 grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <p className="my-8 text-center text-gray-500">No related products found.</p>
        )}
    </div>
  );
}
