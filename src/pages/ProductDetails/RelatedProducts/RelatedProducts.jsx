import { useFilter } from "../../../context/FilterContext";
import ProductCard from "../../Home/PopularProducts/Product/ProductCard";

export default function RelatedProducts() {
  const { filteredProducts } = useFilter();

  return (
    <div className="mt-8">
        <h2 className="text-2xl font-semibold">Related Products</h2>
        <div className="grid my-8  grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
    </div>
  );
}
