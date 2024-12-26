import Loader from "../../../components/ui/Loader";
import { useFilter } from "../../../context/FilterContext";
import { useAllProducts } from "../../../hooks/useAllProducts";
import ProductCard from "../../Home/PopularProducts/Product/ProductCard";

export default function ProductPage() {
  const { data: allProducts } = useAllProducts(); // Fetch all products initially
  const { filteredProducts,loading } = useFilter(); // Get filtered products from context
  if (loading) {
    // Render loading state
    return <Loader className={'h-screen flex justify-center items-center'}/>;
  }
  const productsToDisplay = filteredProducts.length > 0 ? filteredProducts : allProducts;

  return (
    <div>
      <h1>{productsToDisplay.length} Products</h1>
      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {productsToDisplay.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
