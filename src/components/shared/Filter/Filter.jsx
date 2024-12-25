import  { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import PriceRangeFilter from "./PriceRangeFilter";
import RatingFilter from "./RatingFilter";
import AvailabilityFilter from "./AvailabilityFilter";
import DiscountFilter from "./DiscountFilter";
import ExpirationDateFilter from "./ExpirationDateFilter";
import FilterBottomImage from "./FilterBottomImage";
import { useFeaturedCategory } from "../../../hooks/useFeaturedCategory";

const Filter = () => {
  const { data } = useFeaturedCategory();
  const categories = data.map((item) => item.category);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState("1");
  const [maxPrice, setMaxPrice] = useState("1000");
  const [rating, setRating] = useState(3);
  const [availability, setAvailability] = useState("");
  const [minDiscount, setMinDiscount] = useState(1);
  const [minDate, setMinDate] = useState("");


  return (
    <div className="p-6 ">
      <h2 className="text-2xl font-semibold mb-4">Filter Products</h2>
      <PriceRangeFilter
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
      />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <RatingFilter rating={rating} setRating={setRating} />
      <AvailabilityFilter
        availability={availability}
        setAvailability={setAvailability}
      />
      <DiscountFilter
        minDiscount={minDiscount}
        setMinDiscount={setMinDiscount}
      />
      <ExpirationDateFilter minDate={minDate} setMinDate={setMinDate} />
      <FilterBottomImage />
    </div>
  );
};

export default Filter;
