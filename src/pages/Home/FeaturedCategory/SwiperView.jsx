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
  const { setSelectedCategory } = useFilter();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigation("/shop");
  };
  // You can define an array of colors here or a logic to generate dynamic colors
  const categoryColors = [
    "#f2fce4",
    "#fffceb",
    "#ecffec",
    "#ffefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#ffefea",
    "#ffefea",
  ];
  return (
    <Swiper
      spaceBetween={30}
      loop={true} // Enable looping for infinite swiping
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onSwiper={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
      modules={[Pagination, Navigation]}
      breakpoints={{
        375: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 4, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 30 },
        1280: { slidesPerView: 7, spaceBetween: 40 },
      }}
      className="mySwiper"
    >
      {data?.map((category, idx) => {
        const bgColor = categoryColors[idx % categoryColors.length]; // Assign color based on index
        return (
          <SwiperSlide
            key={idx}
            className="flex rounded-lg flex-col pb-4  items-center mt-8"
            style={{ backgroundColor: bgColor }} // Apply dynamic background color
          >
            {/* Display the category name */}

            {/* Iterate over each product in the current category */}
            {category.products.map((product) => (
              <div
                // onclick set category
                onClick={() => handleCategoryClick(product.category)}
                key={product._id}
                className="flex h-60 cursor-pointer flex-col items-center mt-4"
              >
                <img
                  src={product.image} // Access product's image
                  alt={product.name} // Access product's name as alt text
                  className="w-40 h-40 rounded-full object-cover mix-blend-multiply"
                />
                <p className="text-center mt-2 text-lg font-medium">
                  {product.name}
                </p>
                <h2 className="text-sm font-semibold">
                  {category?.category?.length} <span>items </span>
                </h2>
              </div>
            ))}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperView;
