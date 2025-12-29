import { useSelector } from "react-redux";
import CartProductCard from "./CartProductCard";
import OrderSummary from "./OrderSummary";
import PromoCode from "./PromoCode";
import { selectCartItems } from "../../utils/cartSelectors";
import EliteEmptyState from "../../components/shared/EliteEmptyState";
import { BiShoppingBag } from "react-icons/bi";

export default function Cart() {
  const products = useSelector(selectCartItems);
  const discountPercent = useSelector((state) => state.cart.discountPercent);

  const subtotal = products.reduce(
    (acc, product) =>
      acc + Number(product.price || 0) * Number(product.quantity || 0),
    0
  );

  return (
    <div className="container py-12 md:py-20 lg:py-24">
      {products.length > 0 && (
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 font-heading tracking-tight">
            Your Shopping Cart
          </h1>
          <p className="text-neutral-500 mt-2 font-medium">
            Review your selections and proceed to a secure checkout.
          </p>
        </div>
      )}

      {products.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 items-start">
          {/* Cart Items List */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl border border-neutral-100 shadow-soft overflow-hidden">
              <div className="p-8 md:p-10 space-y-8">
                {products.map((product) => (
                  <CartProductCard key={product._id} product={product} />
                ))}
              </div>
            </div>

            {/* Optional: Continue Shopping Link */}
            <div className="pt-4">
              <a
                href="/shop"
                className="text-primary-600 font-bold hover:underline flex items-center gap-2"
              >
                ← Continue Shopping
              </a>
            </div>
          </div>

          {/* Checkout Side Panel */}
          <div className="lg:col-span-3 space-y-8 sticky top-32">
            <OrderSummary
              subtotal={subtotal}
              shipping="0.00" // No shipping charge
              tax="0.00" // No tax charge
              discountPercent={discountPercent}
            />
            <PromoCode />
          </div>
        </div>
      ) : (
        <EliteEmptyState
          icon={<BiShoppingBag className="text-neutral-300" />}
          title="Your cart is empty"
          description="Looks like you haven't added any premium selections to your cart yet. Let's find something incredible for you."
        />
      )}
    </div>
  );
}
