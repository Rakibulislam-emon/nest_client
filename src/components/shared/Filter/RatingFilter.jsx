/* eslint-disable react/prop-types */

import Slider from "rc-slider";
import "rc-slider/assets/index.css"; // Import slider styles

const RatingFilter = ({ rating, setRating }) => {
  return (
    <div className=" p-4 ">
      <h2 className="text-lg font-bold mb-4">Rating</h2>
      <Slider
        min={1}
        max={5}
        step={0.1}
        value={Number(rating)} // Ensure the value is a number
        onChange={(value) => setRating(value)}
        railStyle={{ backgroundColor: "#e5e7eb", height: 6 }}
        trackStyle={{ backgroundColor: "#f59e0b", height: 6 }}
        handleStyle={{
          borderColor: "#f59e0b",
          height: 20,
          width: 20,
          backgroundColor: "#fff",
        }}
      />
      <div className="text-right text-sm font-semibold mt-2">
        {Number(rating).toFixed(1)} Stars
      </div>
    </div>
  );
};

export default RatingFilter;
