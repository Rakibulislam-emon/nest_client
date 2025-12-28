import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useFeaturedCategory } from "../../../hooks/useFeaturedCategory";
import { useFilter } from "../../../context/FilterContext";

const ShopCarousels = () => {
  const { data } = useFeaturedCategory();
  const { setSelectedCategories } = useFilter();

  return (
    <div className="container mx-auto px-4 md:my-10">
      <div className="mb-8 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-neutral-900 mb-2">
          Shop by <span className="text-primary-600">Category</span>
        </h2>
        <div className="w-20 h-1.5 bg-primary-600 rounded-full"></div>
      </div>

      <Swiper
        spaceBetween={20}
        modules={[Pagination, Navigation]}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 15 },
          640: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 25 },
          1024: { slidesPerView: 6, spaceBetween: 30 },
          1280: { slidesPerView: 8, spaceBetween: 30 },
        }}
        className="pb-12"
      >
        {data?.map((category, idx) => {
          // Flatten product images to get category representations
          const categoryImage = category.products[0]?.image;

          return (
            <SwiperSlide key={idx}>
              <button
                onClick={() => setSelectedCategories([category.category])}
                className="w-full group focus:outline-none"
              >
                <div className="flex flex-col items-center p-4 rounded-2xl bg-white border border-neutral-100 shadow-soft hover:shadow-premium hover:-translate-y-2 transition-all duration-500 active:scale-95 bg-gradient-to-br from-white to-neutral-50/50">
                  <div className="w-20 h-20 md:w-24 md:h-24 mb-4 rounded-full bg-primary-50/50 p-2 overflow-hidden flex items-center justify-center group-hover:bg-primary-100/50 transition-colors">
                    <img
                      src={categoryImage}
                      alt={category.category}
                      className="w-full h-full object-contain mix-blend-multiply transform transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-neutral-800 tracking-tight group-hover:text-primary-600 transition-colors capitalize">
                    {category.category}
                  </h3>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mt-1">
                    {category.products.length} Items
                  </span>
                </div>
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ShopCarousels;
