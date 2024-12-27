import CategoryFilter from "./CategoryFilter";
import PriceRangeFilter from "./PriceRangeFilter";
import RatingFilter from "./RatingFilter";
import AvailabilityFilter from "./AvailabilityFilter";
import DiscountFilter from "./DiscountFilter";
import ExpirationDateFilter from "./ExpirationDateFilter";
import FilterBottomImage from "./FilterBottomImage";
import { useFilter } from "../../../context/FilterContext";
import { useFeaturedCategory } from "../../../hooks/useFeaturedCategory";

const Filter = () => {
  const { data } = useFeaturedCategory();
  const categories = data?.map((item) => item?.category);
  const {
    selectedCategory,
    setSelectedCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    rating,
    setRating,
    availability,
    setAvailability,
    minDiscount,
    setMinDiscount,
    minDate,
    setMinDate,
  } = useFilter(); // Using context

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Filter Products</h2>
      <PriceRangeFilter
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
      />
      <CategoryFilter categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/> {/* Now using context */}
      <RatingFilter rating={rating} setRating={setRating} />
      <AvailabilityFilter availability={availability} setAvailability={setAvailability} />
      <DiscountFilter minDiscount={minDiscount} setMinDiscount={setMinDiscount} />
      <ExpirationDateFilter minDate={minDate} setMinDate={setMinDate} />
      <FilterBottomImage />
    </div>
  );
};

export default Filter;
