/* eslint-disable react/prop-types */
import { CardElement } from "@stripe/react-stripe-js";
import { FaCreditCard, FaLock, FaCheckCircle } from "react-icons/fa";

const PaymentMethodForm = ({
  loading,
  totalPrice,
  stripe,
  clientSecret,
  paymentSuccess,
}) => {
  return (
    <div className="mt-20 space-y-10 animate-fade-in delay-150">
      <div className="space-y-2">
        <h2 className="text-3xl font-black text-neutral-900 font-heading">
          Secure Settlement
        </h2>
        <p className="text-neutral-500 font-medium">
          Your transaction is encrypted and secured by production-grade
          protocols.
        </p>
      </div>

      <div className="bg-neutral-900 rounded-[2.5rem] p-8 md:p-12 shadow-premium text-white space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-[0.05]">
          <FaCreditCard className="text-9xl rotate-12" />
        </div>

        <div className="flex items-center gap-4 relative z-10">
          <div className="w-12 h-12 bg-primary-500 rounded-2xl flex items-center justify-center text-white text-xl">
            <FaLock />
          </div>
          <div>
            <h4 className="font-black text-lg tracking-tight">
              Encrypted Checkout
            </h4>
            <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mt-0.5">
              Stripe Secure Infrastructure
            </p>
          </div>
        </div>

        <div className="space-y-6 relative z-10">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] ml-1">
              Card Details
            </label>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#ffffff",
                      fontFamily: "Outfit, sans-serif",
                      "::placeholder": { color: "#ffffff40" },
                      iconColor: "#3BB77E",
                    },
                    invalid: { color: "#FF4D4D" },
                  },
                }}
              />
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10 group cursor-pointer hover:bg-white/10 transition-colors">
            <input
              required
              type="checkbox"
              id="remember-me"
              className="h-5 w-5 rounded border-white/20 bg-transparent text-primary-500 focus:ring-primary-500 cursor-pointer"
            />
            <label
              htmlFor="remember-me"
              className="text-sm font-medium text-white/80 select-none"
            >
              Save card for future premium purchases
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-6">
        <div className="text-center sm:text-left">
          <p className="text-xs font-black text-neutral-400 uppercase tracking-widest">
            Amount Due
          </p>
          <h3 className="text-4xl font-black text-neutral-900 font-heading tracking-tight mt-1">
            ${totalPrice.toFixed(2)}
          </h3>
        </div>

        <button
          type="submit"
          disabled={paymentSuccess || !stripe || loading || !clientSecret}
          className={`group relative overflow-hidden px-16 py-6 rounded-3xl font-black text-white text-lg transition-all shadow-2xl ${
            loading || !clientSecret || !stripe
              ? "bg-neutral-200 text-neutral-400 cursor-not-allowed shadow-none"
              : "bg-primary-600 hover:bg-primary-700 hover:-translate-y-1 active:scale-95 shadow-primary-900/20"
          }`}
        >
          <div className="relative z-10 flex items-center gap-3">
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Finalizing...</span>
              </>
            ) : paymentSuccess ? (
              <>
                <FaCheckCircle className="text-xl animate-bounce-short" />
                <span>Verified</span>
              </>
            ) : (
              <span>Complete Purchase</span>
            )}
          </div>
          {!loading && !paymentSuccess && clientSecret && (
            <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
          )}
        </button>
      </div>

      <p className="text-center text-xs font-bold text-neutral-400 uppercase tracking-widest">
        By clicking &quot;Complete Purchase&quot;, you authorize Nest Premium to
        process this transaction.
      </p>
    </div>
  );
};

export default PaymentMethodForm;
