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
    <section className="max-w-screen-2xl mx-auto lg:h-auto my-10">
      <div className="lg:py-0 md:flex md:items-center md:justify-between">
        <h1 className="md:text-4xl text-2xl font-bold lg:text-start text-center py-4">
          Featured Category
        </h1>
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
