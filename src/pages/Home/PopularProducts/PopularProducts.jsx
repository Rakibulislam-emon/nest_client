import ProductSkeleton from "./ProductSkeleton";
import { usePopularProducts } from "../../../hooks/usePopularProduct";
import PopularProductsTabs from "./PopularProductsTabs";

export default function PopularProducts() {
  const { data, isError, isLoading, error } = usePopularProducts();

  if (isLoading) {
    return (
      <div className="container my-16">
        <div className="text-center mb-8">
          <div className="h-8 w-64 bg-neutral-200 animate-pulse mx-auto rounded-lg mb-2"></div>
          <div className="h-4 w-96 bg-neutral-100 animate-pulse mx-auto rounded-md"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }
  if (isError) {
    return <div>Error: {error?.message || "Something went wrong"}</div>;
  }

  return (
    <div>
      <PopularProductsTabs productsData={data} />
    </div>
  );
}
