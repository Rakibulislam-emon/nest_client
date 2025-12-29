import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  applyPromoCode,
  removePromoCode,
} from "../../redux/cartSlice/cartSlice";
import toast from "react-hot-toast";

const PromoCode = () => {
  const [code, setCode] = useState("");
  const [showOffers, setShowOffers] = useState(false);
  const dispatch = useDispatch();
  const appliedPromo = useSelector((state) => state.cart.appliedPromo);

  const validPromos = [
    { code: "NEST2025", discount: 10, desc: "Site-wide New Year Savings" },
    { code: "WELCOME", discount: 15, desc: "First Order Special Reward" },
    { code: "ELITE", discount: 20, desc: "Elite Premium Member Benefit" },
  ];

  const handleApplyPromo = (codeToApply) => {
    const targetCode = typeof codeToApply === "string" ? codeToApply : code;
    if (!targetCode.trim()) {
      toast.error("Please enter a valid code.");
      return;
    }

    const promo = validPromos.find((p) => p.code === targetCode.toUpperCase());
    if (promo) {
      dispatch(applyPromoCode(targetCode));
      toast.success(`Discount applied: ${targetCode.toUpperCase()}`);
      setCode("");
      setShowOffers(false);
    } else {
      toast.error("Invalid promo code. Please try again.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-soft">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-neutral-900 font-heading">
          Have a Promo Code?
        </h3>
        {!appliedPromo && (
          <button
            onClick={() => setShowOffers(!showOffers)}
            className="text-[10px] font-black text-primary-600 uppercase tracking-widest hover:underline"
          >
            {showOffers ? "Hide Offers" : "View Offers"}
          </button>
        )}
      </div>
      <p className="text-xs font-medium text-neutral-400 mb-6 uppercase tracking-widest">
        Enter your code below for instant savings
      </p>

      {appliedPromo ? (
        <div className="flex items-center justify-between p-4 bg-primary-50 border border-primary-100 rounded-2xl animate-fadeIn">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-primary-600 uppercase tracking-widest">
              Active Promo
            </span>
            <span className="text-sm font-bold text-neutral-900">
              {appliedPromo}
            </span>
          </div>
          <button
            onClick={() => {
              dispatch(removePromoCode());
              toast.success("Promo code removed.");
            }}
            className="text-[10px] font-black text-primary-600 uppercase tracking-widest hover:underline"
          >
            Remove
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="relative group/promo">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="e.g. NEST2025"
              className="w-full pl-6 pr-32 py-4 bg-neutral-50 border border-neutral-100 rounded-full outline-none focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/10 transition-all duration-500 font-bold text-neutral-700 placeholder:text-neutral-300 placeholder:font-normal"
            />
            <button
              type="button"
              onClick={handleApplyPromo}
              className="absolute right-2 top-2 bottom-2 px-6 bg-neutral-900 text-white text-xs font-black uppercase tracking-widest rounded-full hover:bg-primary-600 transition-all active:scale-95 shadow-lg shadow-neutral-200"
            >
              Apply
            </button>
          </div>

          {showOffers && (
            <div className="space-y-2 pt-2 animate-fadeIn">
              {validPromos.map((promo) => (
                <div
                  key={promo.code}
                  className="group/offer flex items-center justify-between p-3 bg-neutral-50 border border-neutral-100 rounded-2xl hover:bg-white hover:border-primary-200 transition-all cursor-pointer"
                  onClick={() => handleApplyPromo(promo.code)}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-neutral-900 font-heading">
                        {promo.code}
                      </span>
                      <span className="text-[9px] font-black px-1.5 py-0.5 bg-primary-100 text-primary-600 rounded-md uppercase tracking-tighter">
                        {promo.discount}% OFF
                      </span>
                    </div>
                    <p className="text-[10px] text-neutral-400 font-medium">
                      {promo.desc}
                    </p>
                  </div>
                  <button className="text-[10px] font-black text-neutral-400 group-hover/offer:text-primary-600 uppercase tracking-widest">
                    Quick Apply
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <p className="mt-4 text-[9px] text-neutral-400 font-black uppercase tracking-tight">
        * Only one promo code can be applied per order.
      </p>
    </div>
  );
};

export default PromoCode;
