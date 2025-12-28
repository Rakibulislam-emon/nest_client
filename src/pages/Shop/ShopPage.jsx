import { useEffect } from "react";
import ScrollToTopButton from "../../components/shared/ScrollToTopButton";
import Loader from "../../components/ui/Loader";
import { useAllProducts } from "../../hooks/useAllProducts";
import FilterShopPage from "./FilterSection/FilterShopPage";
import ProductPage from "./ProductList/ProductPage";
import ShopCarousels from "./ShopCarousels/ShopCarousels";

export default function ShopPage() {
  useEffect(() => {
    // Scroll to top when the page is loaded
    window.scrollTo(0, 200);
  }, []);
  const { isLoading, isError, error } = useAllProducts(); // Fetch all products initially
  if (isLoading) {
    return <Loader className={"h-screen flex justify-center items-center"} />;
  }
  if (isError) {
    return <div>Error: {error?.message || "Something went wrong"}</div>;
  }

  return (
    <>
      {/* slider */}
      <ShopCarousels />

      <main className="container mx-auto px-4 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div className="md:flex gap-x-12 items-start">
          <aside className="hidden md:block w-72 lg:w-80 flex-shrink-0">
            <FilterShopPage />
          </aside>

          <div className="flex-1 min-w-0">
            <ProductPage />
          </div>
        </div>
      </main>
      <ScrollToTopButton />
    </>
  );
}
