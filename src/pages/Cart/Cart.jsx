import { useSelector } from "react-redux";
import CartProductCard from "./CartProductCard";
import OrderSummary from "./OrderSummary";
import PromoCode from "./PromoCode";
import { selectCartItems } from "../../utils/cartSelectors";

export default function Cart() {

  const products = useSelector(selectCartItems)
 

  return (
    <div className="font-sans">
      <div className="grid lg:grid-cols-3 gap-10 p-4">
        <div className="lg:col-span-2 bg-white divide-y">
          <div className="flex flex-col items-center justify-center  gap-8 py-4">
          {  products.map((product)=> <CartProductCard key={product._id} product={product}/>)}
          </div>
        </div>

        <div>
          <OrderSummary subtotal="73.00" shipping="4.00" tax="4.00" total="81.00" />
          <PromoCode />
        </div>
      </div>
    </div>
  );
}
