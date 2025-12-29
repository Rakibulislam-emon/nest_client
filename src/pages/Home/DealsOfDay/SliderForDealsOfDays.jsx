// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Import required modules
import { FreeMode, Pagination } from "swiper/modules";
import DealsCard from "./DealsCard";
import { useDeals } from "../../../hooks/useDeals";
import Loader from "../../../components/ui/Loader";

export default function SliderForDealsOfDays() {
  const { data, isError, isLoading, error } = useDeals();
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error: {error?.message || "Something went wrong"}</div>;
  }

  return (
    <div className="container py-20 bg-white">
      <div className="text-center mb-12">
        <span className="text-primary-600 font-bold tracking-widest uppercase text-xs mb-3 block">
          Limited Time Offers
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 font-heading tracking-tight leading-tight">
          Deals of the Day
        </h2>
        <div className="w-20 h-1.5 bg-primary-500 mx-auto mt-6 rounded-full"></div>
        <p className="text-neutral-500 mt-6 max-w-xl mx-auto text-sm md:text-base font-medium">
          Our most popular products at unbeatable prices, refreshing daily.
        </p>
      </div>
      <Swiper
        // dots
        pagination={{
          clickable: true,
          type: "bullets",
        }}
        loop={true}
        slidesPerView={1} // Default for extra small screens
        spaceBetween={10}
        freeMode={true}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
          1280: { slidesPerView: 4, spaceBetween: 30 },
          1440: { slidesPerView: 5, spaceBetween: 30 },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {data?.map((deal, index) => (
          <SwiperSlide key={index}>
            <DealsCard deal={deal} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
