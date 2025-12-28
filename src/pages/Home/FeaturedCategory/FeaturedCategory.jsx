import { useState, useRef } from "react";
import ViewAllGrid from "./ViewAllGrid";
import SwiperView from "./SwiperView";
import FeaturedNavigationButtons from "./NavigationButtons";
import { useFeaturedCategory } from "../../../hooks/useFeaturedCategory";
import Loader from "../../../components/ui/Loader";

export default function FeaturedCategory() {
  const { data, isLoading, isError, error } = useFeaturedCategory();

  const [viewAll, setViewAll] = useState(false); // Toggling between grid and swiper view

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Handle filtered data based on selected category
  // const filteredData = data; // No category selection, just display all data

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error: {error?.message || "Something went wrong"}</div>;
  }

  return (
    <section className="max-w-screen-2xl mx-auto lg:h-auto my-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 font-heading tracking-tight leading-tight">
          Featured Categories
        </h1>
        <p className="text-sm md:text-base text-neutral-500 mt-2 font-medium">
          Explore our wide range of handpicked categories for your daily needs.
        </p>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="h-px bg-neutral-200 flex-1 mr-8 hidden md:block"></div>
        <FeaturedNavigationButtons
          prevRef={prevRef}
          nextRef={nextRef}
          toggleViewAll={() => setViewAll(!viewAll)}
        />
      </div>

      {viewAll ? (
        <ViewAllGrid data={data} />
      ) : (
        <SwiperView data={data} prevRef={prevRef} nextRef={nextRef} />
      )}
    </section>
  );
}
