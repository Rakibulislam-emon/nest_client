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
    <div className="group/section">
      <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-[0.15em] font-sans mb-8">
        Price Range
      </h3>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="space-y-2">
          <label
            htmlFor="min-price"
            className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider ml-1"
          >
            Min Price
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 text-sm font-bold">
              $
            </span>
            <input
              id="min-price"
              type="number"
              value={minPrice}
              onChange={(e) => handleInputChange("min", e.target.value)}
              className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-100 rounded-xl text-sm font-bold text-neutral-700 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-50 outline-none transition-all shadow-inner-soft"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="max-price"
            className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider ml-1"
          >
            Max Price
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 text-sm font-bold">
              $
            </span>
            <input
              id="max-price"
              type="number"
              value={maxPrice}
              onChange={(e) => handleInputChange("max", e.target.value)}
              className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-100 rounded-xl text-sm font-bold text-neutral-700 focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-50 outline-none transition-all shadow-inner-soft"
            />
          </div>
        </div>
      </div>
      <div className="px-2">
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
          railStyle={{ backgroundColor: "#f3f4f6", height: 8, borderRadius: 4 }}
          trackStyle={[
            {
              backgroundColor: "var(--primary-600)",
              height: 8,
              borderRadius: 4,
            },
          ]}
          handleStyle={[
            {
              borderColor: "var(--primary-600)",
              backgroundColor: "#fff",
              height: 24,
              width: 24,
              marginTop: -8,
              opacity: 1,
              boxShadow:
                "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
              borderWidth: 3,
            },
            {
              borderColor: "var(--primary-600)",
              backgroundColor: "#fff",
              height: 24,
              width: 24,
              marginTop: -8,
              opacity: 1,
              boxShadow:
                "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
              borderWidth: 3,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default PriceRangeFilter;
