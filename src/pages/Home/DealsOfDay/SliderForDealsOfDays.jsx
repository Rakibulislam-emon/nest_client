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
    <div className="px-4 md:px-8 lg:px-12">
      <h2 className="text-2xl md:text-4xl font-bold text-center lg:text-start py-4">
        Deals Of The Days
      </h2>
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
          640: { slidesPerView: 1, spaceBetween: 15 }, // Small screens (sm)
          768: { slidesPerView: 2, spaceBetween: 20 }, // Medium screens (md)
          1024: { slidesPerView: 4, spaceBetween: 30 }, // Large screens (lg)
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
