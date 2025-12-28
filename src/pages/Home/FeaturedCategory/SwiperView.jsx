/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useFilter } from "../../../context/FilterContext";
import { useNavigate } from "react-router";

const SwiperView = ({ data, prevRef, nextRef }) => {
  const navigation = useNavigate();
  const { setSelectedCategories } = useFilter();

  const handleCategoryClick = (category) => {
    setSelectedCategories([category]);
    navigation("/shop");
  };

  // Modern soft pastel backgrounds
  const categoryColors = [
    "bg-green-50",
    "bg-amber-50",
    "bg-blue-50",
    "bg-purple-50",
    "bg-rose-50",
    "bg-indigo-50",
  ];

  return (
    <Swiper
      spaceBetween={24}
      loop={true}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onSwiper={(swiper) => {
        // Delay init to ensure refs are ready
        setTimeout(() => {
          if (swiper.params) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          }
        });
      }}
      modules={[Pagination, Navigation]}
      breakpoints={{
        320: { slidesPerView: 2, spaceBetween: 16 },
        640: { slidesPerView: 3, spaceBetween: 20 },
        768: { slidesPerView: 4, spaceBetween: 24 },
        1024: { slidesPerView: 5, spaceBetween: 28 },
        1280: { slidesPerView: 6, spaceBetween: 32 },
      }}
      className="mySwiper py-8 px-2"
    >
      {data?.map((category, idx) => {
        const bgClass = categoryColors[idx % categoryColors.length];
        return (
          <SwiperSlide key={idx} className="h-auto">
            {category.products.map((product) => (
              <div
                onClick={() => handleCategoryClick(product.category)}
                key={product._id}
                className={`
                  group cursor-pointer flex flex-col items-center p-6 rounded-2xl 
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-premium
                  border border-transparent hover:border-primary-100 ${bgClass}
                `}
              >
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-white/50 rounded-full blur-xl scale-75 group-hover:scale-110 transition-transform duration-500"></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="relative w-24 h-24 md:w-28 md:h-28 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-neutral-800 font-heading font-bold text-center text-base md:text-lg mb-2 group-hover:text-primary-700 transition-colors line-clamp-2">
                  {product.name}
                </h3>
                <span className="text-sm font-semibold text-neutral-500 bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm shadow-sm group-hover:text-primary-600 group-hover:bg-primary-50 transition-colors">
                  {category?.category?.length} Items
                </span>
              </div>
            ))}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperView;
