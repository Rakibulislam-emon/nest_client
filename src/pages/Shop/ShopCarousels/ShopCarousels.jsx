import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useFeaturedCategory } from "../../../hooks/useFeaturedCategory";
import Container from "../../../components/shared/Container";
import { useFilter } from "../../../context/FilterContext";

const ShopCarousels = () => {
  const { data } = useFeaturedCategory();
  const { setSelectedCategory } = useFilter();

  return (
    <Container className={"bg-[#f7f7f7] md:h-[300px] rounded-lg md:my-8"}>
      <h2 className="md:text-4xl   font-semibold text-center p-4">
        All Products
      </h2>
      <Swiper
        spaceBetween={0}
        // loop={true} // Enable looping for infinite swiping
        modules={[Pagination, Navigation]}
        breakpoints={{
          375: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
          1280: { slidesPerView: 8, spaceBetween: 40 },
        }}
        className="mySwiper  md:max-w-6xl "
      >
        {data?.map((category, idx) => {
          return (
            <SwiperSlide
              key={idx}
              className="flex   rounded-lg  flex-col pb-4  items-center "
            >
              {/* Display the category name */}

              {/* Iterate over each product in the current category */}
              {category.products.map((product) => (
                <div
                  // onclick set category
                  onClick={() => setSelectedCategory(product.category)}
                  key={product._id}
                  className="flex h-60 group cursor-pointer  rounded-full flex-col items-center mt-4  "
                >
                  <img
                    src={product.image} // Access product's image
                    alt={product.name} // Access product's name as alt text
                    className="w-28 h-28 group-hover:border-2 group-hover:border-green rounded-full p-2 object-cover mix-blend-multiply"
                  />
                  <h2 className="text-sm font-semibold">
                    {/* {product?.category?.length} */}
                  </h2>
                  <p className="text-center mt-2 text-sm font-medium">
                    {product.category}
                  </p>
                </div>
              ))}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default ShopCarousels;
