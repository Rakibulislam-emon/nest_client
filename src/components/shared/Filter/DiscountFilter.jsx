/* eslint-disable react/prop-types */
const DiscountFilter = ({ minDiscount, setMinDiscount }) => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    // If the input is empty, set it to an empty string, otherwise convert to number
    setMinDiscount(value === "" ? "" : Number(value));
  };

  return (
    <div className="group/section">
      <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-[0.15em] font-sans mb-6">
        Discount
      </h3>

      <div className="relative">
        <input
          type="number"
          value={minDiscount}
          onChange={handleInputChange}
          className="w-full pl-4 pr-12 py-3.5 bg-neutral-50 border border-neutral-100 rounded-xl text-sm font-bold text-neutral-700 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-50 outline-none transition-all shadow-inner-soft placeholder:text-neutral-300 placeholder:font-medium"
          placeholder="Min Discount"
          min={1}
          max={100}
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 text-xs font-bold uppercase tracking-wider">
          % OFF
        </span>
      </div>

      {minDiscount && minDiscount > 0 && (
        <div className="mt-3 flex items-center gap-2 px-1">
          <div className="w-1 h-1 rounded-full bg-primary-500" />
          <p className="text-xs font-bold text-primary-600 uppercase tracking-wider">
            Active: {minDiscount}% or more
          </p>
        </div>
      )}
    </div>
  );
};

export default DiscountFilter;
