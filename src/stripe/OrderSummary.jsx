/* eslint-disable react/prop-types */
const OrderSummary = ({ products, totalPrice, discountPercent = 0 }) => {
  const subtotal = products.reduce(
    (acc, product) =>
      acc + Number(product.price || 0) * Number(product.quantity || 0),
    0
  );
  const discountAmount = subtotal * (discountPercent / 100);

  return (
    <div className="bg-white/40 backdrop-blur-xl rounded-[3rem] p-10 border border-white/40 shadow-premium space-y-10 animate-fade-in">
      <div className="space-y-1">
        <h2 className="text-2xl font-black text-neutral-900 font-heading">
          Cart Reservoir
        </h2>
        <p className="text-xs font-black text-neutral-400 uppercase tracking-widest">
          Inventory review before finalizing
        </p>
      </div>

      <div className="space-y-8 max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
        {products.map((product) => (
          <div key={product._id} className="group flex gap-6 items-center">
            <div className="w-24 h-24 shrink-0 bg-white rounded-3xl p-3 border border-neutral-100 shadow-soft group-hover:scale-105 transition-transform duration-500">
              <img
                src={product.image}
                className="w-full h-full object-contain"
                alt={product.name}
              />
            </div>
            <div className="flex-1 space-y-1.5">
              <h3 className="text-base font-black text-neutral-900 font-heading leading-tight line-clamp-2">
                {product.name}
              </h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">
                    Qty: {product.quantity}
                  </div>
                  <div className="w-1 h-1 bg-neutral-200 rounded-full" />
                  <div className="text-[10px] font-black text-primary-600 uppercase tracking-widest">
                    ${Number(product.price || 0).toFixed(2)}
                  </div>
                </div>
                <div className="text-sm font-black text-neutral-900 font-heading">
                  $
                  {(
                    Number(product.price || 0) * Number(product.quantity || 0)
                  ).toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-8 border-t border-neutral-100 space-y-6">
        <div className="flex items-center justify-between text-neutral-500 font-medium">
          <span className="text-sm uppercase tracking-widest font-black text-neutral-400">
            Subtotal
          </span>
          <span className="text-sm font-black text-neutral-900 font-heading">
            ${subtotal.toFixed(2)}
          </span>
        </div>

        {discountPercent > 0 && (
          <div className="flex items-center justify-between text-primary-600 font-medium animate-fadeIn">
            <span className="text-sm uppercase tracking-widest font-black">
              Discount ({discountPercent}%)
            </span>
            <span className="text-sm font-black font-heading">
              -${discountAmount.toFixed(2)}
            </span>
          </div>
        )}

        <div className="flex items-center justify-between text-neutral-500 font-medium">
          <span className="text-sm uppercase tracking-widest font-black text-neutral-400">
            Logistics Fee
          </span>
          <span className="text-sm font-black text-neutral-900 font-heading">
            Complimentary
          </span>
        </div>
        <div className="flex items-end justify-between bg-primary-50 p-6 rounded-3xl border border-primary-100 shadow-sm">
          <div className="space-y-0.5">
            <span className="text-[10px] font-black text-primary-600 uppercase tracking-widest">
              Aggregate Total
            </span>
            <div className="text-sm text-primary-600/60 font-medium">
              All taxes included
            </div>
          </div>
          <span className="text-4xl font-black text-primary-600 font-heading tracking-tight">
            ${Number(totalPrice || 0).toFixed(2)}
          </span>
        </div>
      </div>

      <div className="text-center p-4 bg-neutral-50 rounded-2xl border border-neutral-100 italic text-[11px] text-neutral-400 font-medium">
        &quot;Nest Premium ensures source-to-table integrity for every
        selection.&quot;
      </div>
    </div>
  );
};

export default OrderSummary;
