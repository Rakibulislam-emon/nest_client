import CartProductCard from "./CartProductCard";
import OrderSummary from "./OrderSummary";
import PromoCode from "./PromoCode";

export default function Cart() {
  const product = {
    image: "https://readymadeui.com/images/product6.webp",
    name: "Black T-Shirt",
    size: "7.5",
    color: "Black",
    oldPrice: "22.5",
    newPrice: "18.5",
  };

  return (
    <div className="font-sans">
      <div className="grid lg:grid-cols-3 gap-10 p-4">
        <div className="lg:col-span-2 bg-white divide-y">
          <div className="flex items-start max-sm:flex-col gap-4 py-4">
            <CartProductCard product={product} />
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
