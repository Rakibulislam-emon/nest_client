import FilterShopPage from "./FilterSection/FilterShopPage";
import ProductPage from "./ProductList/ProductPage";
import ShopCarousels from "./ShopCarousels/ShopCarousels";

export default function ShopPage() {
  return (
    <div>
        {/* slider */}
        <ShopCarousels/>
        <div className="flex gap-x-10">
          <FilterShopPage/>
          <ProductPage/>
        </div>
    </div>
  )
}
