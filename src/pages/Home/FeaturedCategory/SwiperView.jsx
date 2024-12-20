/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperView = ({ data, prevRef, nextRef }) => {

  return (
    <Swiper
    // defaultValue={18}
      spaceBetween={30}
      loop={true}  // Enable looping for infinite swiping
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
        1280: { slidesPerView: 8, spaceBetween: 40 },
      }}
      className="mySwiper"
    >
      {data?.map((category, idx) => (
        <SwiperSlide   key={idx} className="flex   flex-col  items-center mt-8">
          {/* Display the category name */}
          <h2 className="text-xl font-semibold">{category.category}</h2>

          {/* Iterate over each product in the current category */}
          {category.products.map((product) => (
            <div key={product._id} className="flex  flex-col items-center mt-4">
              {/* <Image
                width={200}
                height={200}
                src={product.image}  // Access product's image
                alt={product.name}    // Access product's name as alt text
                className="w-40 h-40 rounded-full object-cover"
              /> */}
              <img src={product.image}  // Access product's image
                alt={product.name}    // Access product's name as alt text
                className="w-40 h-40 rounded-full object-cover" />
              <p className="text-center mt-2 text-lg font-medium">
                {product.name}  
              </p>
            </div>
          ))}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperView;
