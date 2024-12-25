
import { useAllProducts } from '../../../hooks/useAllProducts';
import ProductCard from '../../Home/PopularProducts/Product/ProductCard';

export default function ProductPage() {
    const {data} = useAllProducts()
  return (
    <div>
           {/* Products Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {data?.map((product) => {
                  return (
                    <ProductCard
                      key={product._id}
                      product={product} // Passing the full product object to ProductCard
                    />
                  );
                })}
              </div>
    </div>
  )
}
