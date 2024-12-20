import { useCallback, useEffect, useState } from "react";
export const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const carouselData = [
    {
      image: "https://i.ibb.co/5G57SXd/img2.webp",
      offerTitle: "Organic Products",
      offerDescription: "Discover a wide range of organic grocery items.",
      buttonText: "Explore",
    },
    {
      image: "https://i.ibb.co/T8nggpB/img3.jpg",
      offerTitle: "Limited Time Discounts",
      offerDescription: "Save up to 50% on your favorite grocery items.",
      buttonText: "Grab Now",
    },
    {
      image: "https://i.ibb.co/sHXZV4C/img4.jpg",
      offerTitle: "Weekly Deals",
      offerDescription: "Exclusive deals on pantry staples and more.",
      buttonText: "Check Deals",
    },
  ];

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? carouselData.length - 1 : currentSlider - 1
    );
  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === carouselData.length - 1 ? 0 : currentSlider + 1
      ),
    [carouselData.length]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="h-60 w-full md:h-[470px] lg:h-[540px] relative overflow-hidden rounded-lg ">
      {/* Arrow Left */}
      <button
        onClick={prevSlider}
        className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
      >
        <svg
          className="icon h-4 w-4 fill-black/50 md:h-6 md:w-6"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
        </svg>
      </button>
      {/* Arrow Right */}
      <button
        onClick={nextSlider}
        className="absolute top-1/2 z-50 right-3  flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
      >
        <svg
          className="icon h-4 w-4 fill-black/50 md:h-6 md:w-6"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          transform="rotate(180)"
        >
          <path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
        </svg>
      </button>
      {/* Dots */}
      <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
        {carouselData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlider(idx)}
            className={`rounded-full duration-500 bg-white ${
              currentSlider === idx ? "w-8" : "w-2"
            } h-2`}
          ></button>
        ))}
      </div>
      {/* Carousel Container */}
      <div
        className="ease-linear duration-500 flex transform-gpu"
        style={{ transform: `translateX(-${currentSlider * 100}%)` }}
      >
        {carouselData.map((slide, idx) => (
          <div
            key={idx}
            className="relative min-w-full h-60 sm:h-96 md:h-[540px]"
          >
            <img
              src={slide.image}
              alt={`Slider - ${idx + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            {/* Overlay with Content */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 flex flex-col justify-center items-center text-center text-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl md:text-4xl font-extrabold tracking-wide leading-tight drop-shadow-lg">
                {slide.offerTitle}
              </h2>
              <p className="mt-2 text-sm md:text-lg text-gray-200 tracking-wide">
                {slide.offerDescription}
              </p>
              <button className="mt-4 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold text-sm md:text-base   rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
