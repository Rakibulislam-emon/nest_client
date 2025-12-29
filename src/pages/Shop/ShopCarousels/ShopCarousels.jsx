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

  // Premium thematic color mapping
  const categoryColors = {
    "Fruit & Vegetables": {
      bg: "bg-emerald-50",
      accent: "text-emerald-700",
      border: "border-emerald-100",
      hover: "hover:border-emerald-300",
      iconBg: "bg-emerald-100/50",
    },
    "Breads & Bakery": {
      bg: "bg-amber-50",
      accent: "text-amber-700",
      border: "border-amber-100",
      hover: "hover:border-amber-300",
      iconBg: "bg-amber-100/50",
    },
    "Fresh Seafood": {
      bg: "bg-cyan-50",
      accent: "text-cyan-700",
      border: "border-cyan-100",
      hover: "hover:border-cyan-300",
      iconBg: "bg-cyan-100/50",
    },
    "Milks & Dairies": {
      bg: "bg-blue-50",
      accent: "text-blue-700",
      border: "border-blue-100",
      hover: "hover:border-blue-300",
      iconBg: "bg-blue-100/50",
    },
    "Meats & Seaford": {
      bg: "bg-rose-50",
      accent: "text-rose-700",
      border: "border-rose-100",
      hover: "hover:border-rose-300",
      iconBg: "bg-rose-100/50",
    },
    "Frozen Foods": {
      bg: "bg-indigo-50",
      accent: "text-indigo-700",
      border: "border-indigo-100",
      hover: "hover:border-indigo-300",
      iconBg: "bg-indigo-100/50",
    },
    // Fallback for others
    default: {
      bg: "bg-neutral-50",
      accent: "text-primary-700",
      border: "border-neutral-100",
      hover: "hover:border-primary-300",
      iconBg: "bg-white/50",
    },
  };

  return (
    <div className="container md:mb-20">
      {/* Editorial Header */}
      <div className="mb-12 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-neutral-900 mb-4 tracking-tight">
          Shop by <span className="text-primary-600">Category</span>
        </h2>
        <div className="flex items-center gap-2">
          <div className="w-12 h-1 bg-primary-200 rounded-full"></div>
          <div className="w-4 h-1 bg-primary-600 rounded-full"></div>
          <div className="w-12 h-1 bg-primary-200 rounded-full"></div>
        </div>
      </div>

      <Swiper
        spaceBetween={24}
        modules={[Pagination, Navigation]}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 16 },
          640: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 24 },
          1024: { slidesPerView: 6, spaceBetween: 28 },
          1280: { slidesPerView: 8, spaceBetween: 32 },
          1536: { slidesPerView: 10, spaceBetween: 32 },
        }}
        className="pb-12"
      >
        {data?.map((category, idx) => {
          const colors =
            categoryColors[category.category] || categoryColors.default;
          const categoryImage = category.products[0]?.image;

          return (
            <SwiperSlide key={idx} className="h-auto">
              <button
                onClick={() => setSelectedCategories([category.category])}
                className="w-full h-full group focus:outline-none"
              >
                <div
                  className={`
                    h-full flex flex-col items-center p-6 rounded-[2.5rem] 
                    border ${colors.border} ${colors.bg} ${colors.hover}
                    shadow-soft hover:shadow-premium hover:-translate-y-3 
                    transition-all duration-700 ease-out active:scale-95
                  `}
                >
                  {/* Icon Wrapper with Glassmorphism */}
                  <div
                    className={`
                    w-24 h-24 md:w-32 md:h-32 mb-6 rounded-full 
                    ${colors.iconBg} backdrop-blur-sm p-4 
                    overflow-hidden flex items-center justify-center 
                    group-hover:bg-white transition-colors duration-500
                    shadow-inner-soft
                  `}
                  >
                    <img
                      src={categoryImage}
                      alt={category.category}
                      className="w-full h-full object-contain mix-blend-multiply transform transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>

                  <h3
                    className={`
                    text-base md:text-lg font-bold font-heading mb-1 text-center
                    ${colors.accent} transition-colors capitalize line-clamp-1
                  `}
                  >
                    {category.category}
                  </h3>
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-[0.1em]">
                    {/* {category.products.length} Products */}
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
