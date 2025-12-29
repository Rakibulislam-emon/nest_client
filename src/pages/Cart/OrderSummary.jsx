/* eslint-disable react/prop-types */
import { Link } from "react-router";
import toast from "react-hot-toast";
import { SignInButton, useUser } from "@clerk/clerk-react";
import Badge from "../../components/common/Badge";

const OrderSummary = ({ subtotal, shipping, tax, discountPercent = 0 }) => {
  const { isSignedIn } = useUser();
  const subtotalNum = Number(subtotal || 0);
  const discountAmount = subtotalNum * (discountPercent / 100);
  const total =
    subtotalNum - discountAmount + Number(shipping || 0) + Number(tax || 0);

  return (
    <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-premium">
      <h3 className="text-2xl font-bold text-neutral-900 font-heading border-b border-neutral-100 pb-6 mb-6">
        Order Summary
      </h3>

      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center text-neutral-500 font-medium">
          <span>Subtotal</span>
          <span className="text-neutral-900 font-bold">
            ${subtotalNum.toFixed(2)}
          </span>
        </div>
        {discountPercent > 0 && (
          <div className="flex justify-between items-center text-primary-600 font-medium animate-fadeIn">
            <span>Discount ({discountPercent}%)</span>
            <span className="font-bold">-${discountAmount.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between items-center text-neutral-500 font-medium">
          <span>Shipping Est.</span>
          {Number(shipping) > 0 ? (
            <span className="text-neutral-900 font-bold">${shipping}</span>
          ) : (
            <Badge variant="success" size="sm">
              Free
            </Badge>
          )}
        </div>
        <div className="flex justify-between items-center text-neutral-500 font-medium">
          <span>Tax Est.</span>
          <span className="text-neutral-900 font-bold">${tax}</span>
        </div>
        <div className="pt-4 border-t border-neutral-100 flex justify-between items-center">
          <span className="text-lg font-bold text-neutral-900">
            Total Amount
          </span>
          <span className="text-3xl font-black text-primary-600 font-heading tracking-tight">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {isSignedIn ? (
          <Link to="/checkout" className="block w-full">
            <button
              type="button"
              className="w-full font-sans py-4 bg-primary-600 text-white font-bold rounded-2xl hover:bg-primary-700 shadow-xl shadow-primary-100 transition-all duration-300 transform hover:-translate-y-1 active:scale-[0.98]"
            >
              Proceed to Checkout
            </button>
          </Link>
        ) : (
          <SignInButton mode="modal">
            <button
              type="button"
              className="w-full font-sans py-4 bg-primary-600 text-white font-bold rounded-2xl hover:bg-primary-700 shadow-xl shadow-primary-100 transition-all duration-300 transform hover:-translate-y-1 active:scale-[0.98]"
              onClick={() => toast.error("Please log in to proceed.")}
            >
              Log in to Checkout
            </button>
          </SignInButton>
        )}

        <div className="flex items-center justify-center gap-2 group cursor-pointer py-2">
          <span className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest">
            Secure Checkout Powered by Nest
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
