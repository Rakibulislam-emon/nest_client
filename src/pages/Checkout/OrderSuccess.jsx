import { useEffect } from "react";
import { useLocation, Link } from "react-router";
import { FaCheckCircle, FaShoppingBag, FaArrowRight } from "react-icons/fa";
import Badge from "../../components/common/Badge";

const OrderSuccess = () => {
  const location = useLocation();
  const { orderId, amount } = location.state || { orderId: "N/A", amount: 0 };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container py-24 flex flex-col items-center justify-center min-h-[80vh] text-center space-y-12">
      <div className="relative">
        <div className="absolute inset-0 bg-primary-500/20 blur-3xl rounded-full scale-150 animate-pulse" />
        <div className="relative z-10 w-24 h-24 bg-primary-600 rounded-[2.5rem] flex items-center justify-center text-white text-4xl shadow-2xl shadow-primary-900/20 animate-bounce-short">
          <FaCheckCircle />
        </div>
      </div>

      <div className="space-y-6 max-w-2xl">
        <Badge
          variant="primary"
          size="lg"
          className="uppercase tracking-[0.3em]"
        >
          Transaction Verified
        </Badge>
        <h1 className="text-5xl md:text-8xl font-black text-neutral-900 font-heading tracking-tight leading-none">
          Order <span className="text-primary-500">Confirmed</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-500 font-medium leading-relaxed">
          Your organic selections have been reserved and are entering our
          high-precision packing cycle. We anticipate a frictionless delivery to
          your doorstep.
        </p>
      </div>

      <div className="w-full max-w-md bg-white rounded-[3rem] p-10 shadow-premium border border-neutral-100 space-y-8 animate-fade-in delay-300">
        <div className="space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="font-black text-neutral-400 uppercase tracking-widest">
              Order Reference
            </span>
            <span className="font-bold text-neutral-900 font-mono tracking-tighter">
              {orderId.slice(-12).toUpperCase()}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-black text-neutral-400 uppercase tracking-widest text-sm">
              Total Settlement
            </span>
            <span className="text-3xl font-black text-primary-600 font-heading tracking-tight">
              ${amount.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="h-px bg-neutral-100 w-full" />

        <div className="flex flex-col gap-4">
          <Link
            to="/"
            className="group flex items-center justify-center gap-3 bg-neutral-900 text-white py-5 rounded-3xl font-black uppercase text-xs tracking-widest hover:bg-neutral-800 transition-all shadow-xl shadow-neutral-200"
          >
            Express Continue Shopping{" "}
            <FaShoppingBag className="text-primary-500" />
          </Link>
          <Link
            to="/"
            className="group flex items-center justify-center gap-2 text-neutral-400 hover:text-neutral-900 py-3 font-black uppercase text-[10px] tracking-[0.2em] transition-colors"
          >
            Return to Terminal{" "}
            <FaArrowRight className="text-[8px] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="text-[10px] font-black text-neutral-300 uppercase tracking-[0.3em]">
        Integrity Protocol Activated • Nest Premium Logistics
      </div>
    </div>
  );
};

export default OrderSuccess;
