/* eslint-disable react/prop-types */
const DiscountFilter = ({ minDiscount, setMinDiscount }) => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    // If the input is empty, set it to an empty string, otherwise convert to number
    setMinDiscount(value === "" ? "" : Number(value));
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4 text-gray-800">Discount</h2>
      <input
        type="number"
        value={minDiscount}
        onChange={handleInputChange}
        className="w-full py-2 px-4 rounded-md border border-gray-300 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        placeholder="Enter Min Discount (%)"
        min={1}
        max={100}
      />
      {minDiscount && minDiscount > 0 && (
        <p className="text-sm text-gray-500 mt-2">
          Current Minimum Discount: {minDiscount}%
        </p>
      )}
    </div>
  );
};

export default DiscountFilter;
