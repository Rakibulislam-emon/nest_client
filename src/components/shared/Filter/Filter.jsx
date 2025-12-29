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
    selectedCategories,
    setSelectedCategories,
    toggleCategory,
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
    <div className="flex flex-col gap-10 p-8 bg-white rounded-3xl border border-neutral-100 shadow-soft">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold font-heading text-neutral-900 tracking-tight">
          Filter <span className="text-primary-600">Products</span>
        </h2>
        <button
          onClick={() => {
            setSelectedCategories([]);
            setMinPrice(0);
            setMaxPrice(50);
            setRating(0);
            setAvailability("");
            setMinDiscount("");
            setMinDate("");
          }}
          className="text-xs font-bold text-neutral-400 hover:text-primary-600 uppercase tracking-widest transition-colors"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-12">
        <section>
          <PriceRangeFilter
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
          />
        </section>

        <div className="h-px bg-neutral-100" />

        <section>
          <CategoryFilter
            categories={categories}
            selectedCategories={selectedCategories}
            toggleCategory={toggleCategory}
          />
        </section>

        <div className="h-px bg-neutral-100" />

        <section>
          <RatingFilter rating={rating} setRating={setRating} />
        </section>

        <div className="h-px bg-neutral-100" />

        <section>
          <AvailabilityFilter
            availability={availability}
            setAvailability={setAvailability}
          />
        </section>

        <div className="h-px bg-neutral-100" />

        <section>
          <DiscountFilter
            minDiscount={minDiscount}
            setMinDiscount={setMinDiscount}
          />
        </section>

        <div className="h-px bg-neutral-100" />

        <section>
          <ExpirationDateFilter minDate={minDate} setMinDate={setMinDate} />
        </section>
      </div>

      <div className="mt-4">
        <FilterBottomImage />
      </div>
    </div>
  );
};

export default Filter;
