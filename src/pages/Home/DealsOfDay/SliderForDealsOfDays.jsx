// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Import required modules
import { FreeMode, Pagination } from "swiper/modules";
import DealsCard from "./DealsCard";
import { usePopularProducts } from "../../../hooks/usePopularProduct";

export default function SliderForDealsOfDays() {
  const { data } = usePopularProducts();
  console.log('data:', data);

  return (
    <div>
        <h2 className="md:text-4xl text-2xl font-bold lg:text-start text-center py-4">
          Popular Products
        </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
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
