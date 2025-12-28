/* eslint-disable react/prop-types */

import Slider from "rc-slider";
import "rc-slider/assets/index.css"; // Import slider styles

const RatingFilter = ({ rating, setRating }) => {
  return (
    <div className="group/section">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-[0.15em] font-sans">
          Minimum Rating
        </h3>
        <span className="text-xl font-bold text-amber-500 font-heading">
          {Number(rating).toFixed(1)}{" "}
          <span className="text-[10px] text-neutral-300 font-sans tracking-widest ml-0.5 uppercase">
            Stars
          </span>
        </span>
      </div>

      <div className="px-2">
        <Slider
          min={1}
          max={5}
          step={0.1}
          value={Number(rating)}
          onChange={(value) => setRating(value)}
          railStyle={{ backgroundColor: "#f3f4f6", height: 8, borderRadius: 4 }}
          trackStyle={{
            backgroundColor: "#f59e0b",
            height: 8,
            borderRadius: 4,
          }}
          handleStyle={{
            borderColor: "#f59e0b",
            height: 24,
            width: 24,
            marginTop: -8,
            backgroundColor: "#fff",
            opacity: 1,
            boxShadow:
              "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            borderWidth: 3,
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default RatingFilter;
