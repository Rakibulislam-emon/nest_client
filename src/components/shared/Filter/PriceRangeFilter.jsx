/* eslint-disable react/prop-types */
import Slider from "rc-slider";
import "rc-slider/assets/index.css"; // Import slider styles

const PriceRangeFilter = ({ minPrice, maxPrice, setMinPrice, setMaxPrice }) => {
  const handleInputChange = (type, value) => {
    const numericValue = Number(value);
    if (type === "min") {
      setMinPrice(
        numericValue < 0 ? 0 : numericValue > maxPrice ? maxPrice : numericValue
      );
    } else {
      setMaxPrice(
        numericValue > 50
          ? 50
          : numericValue < minPrice
          ? minPrice
          : numericValue
      );
    }
  };

  return (
    <div className="p-4 mb-4  ">
      <h2 className="text-lg font-bold mb-4">Price Range</h2>
      <div className="flex items-center justify-between m-4 space-x-4">
        <div className="flex flex-col items-center">
          <label
            htmlFor="min-price"
            className="text-sm font-medium text-gray-500"
          >
            Min Price
          </label>
          <input
            id="min-price"
            type="number"
            value={minPrice}
            onChange={(e) => handleInputChange("min", e.target.value)}
            className="w-24 p-2 text-center border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex flex-col items-center">
          <label
            htmlFor="max-price"
            className="text-sm font-medium text-gray-500"
          >
            Max Price
          </label>
          <input
            id="max-price"
            type="number"
            value={maxPrice}
            onChange={(e) => handleInputChange("max", e.target.value)}
            className="w-24 p-2 text-center border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
      <Slider
        range
        min={0}
        max={50}
        step={1}
        value={[minPrice, maxPrice]}
        onChange={([min, max]) => {
          setMinPrice(min);
          setMaxPrice(max);
        }}
        railStyle={{ backgroundColor: "#e5e7eb", height: 6 }}
        trackStyle={[{ backgroundColor: "#4CAF50", height: 6 }]}
        handleStyle={[
          {
            borderColor: "#4CAF50",
            backgroundColor: "#fff",
            height: 20,
            width: 20,
          },
          {
            borderColor: "#4CAF50",
            backgroundColor: "#fff",
            height: 20,
            width: 20,
          },
        ]}
      />
    </div>
  );
};

export default PriceRangeFilter;
