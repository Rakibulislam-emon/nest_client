const PromoCode = () => {
    return (
      <div className="mt-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Apply promo code</h3>
  
        <div className="flex border border-blue-600 overflow-hidden max-w-md rounded-md">
          <input
            type="email"
            placeholder="Promo code"
            className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5"
          />
          <button
            type="button"
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 px-5 text-sm text-white"
          >
            Apply
          </button>
        </div>
      </div>
    );
  };
  
  export default PromoCode;
  