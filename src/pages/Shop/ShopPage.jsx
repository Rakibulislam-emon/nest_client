import Loader from "../../components/ui/Loader";
import { FilterProvider } from "../../context/FilterContext";
import { useAllProducts } from "../../hooks/useAllProducts";
import FilterShopPage from "./FilterSection/FilterShopPage";
import ProductPage from "./ProductList/ProductPage";
import ShopCarousels from "./ShopCarousels/ShopCarousels";

export default function ShopPage() {
  const { isLoading, isError, error } = useAllProducts(); // Fetch all products initially
  if (isLoading) {
    return <Loader className={"h-screen flex justify-center items-center"} />;
  }
  if (isError) {
    return <div>Error: {error?.message || "Something went wrong"}</div>;
  }

  return (
    <FilterProvider>
      {/* slider */}
      <ShopCarousels />
      <div className="md:flex gap-x-10">
        <FilterShopPage />
        <ProductPage />
      </div>
    </FilterProvider>
  );
}
