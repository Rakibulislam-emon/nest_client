import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router";
import Button from "../../../../components/common/Button";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi2";
import { BsFire } from "react-icons/bs";

export const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const carouselData = [
    {
      image: "https://i.ibb.co/5G57SXd/img2.webp",
      offerTitle: "Fresh & Organic",
      offerDescription:
        "Experience the true taste of nature with our certified organic collection.",
      buttonText: "Shop Collection",
      color: "from-green-600/90 to-black/30",
    },
    {
      image: "https://i.ibb.co/T8nggpB/img3.jpg",
      offerTitle: "Flash Sale Alert",
      offerDescription:
        "Up to 50% off on premium pantry staples. Limited time offer.",
      buttonText: "Grab Deal",
      color: "from-amber-600/90 to-black/30",
    },
    {
      image: "https://i.ibb.co/sHXZV4C/img4.jpg",
      offerTitle: "Weekly Essentials",
      offerDescription:
        "Stock up on your daily needs with our exclusive bundle offers.",
      buttonText: "View Offers",
      color: "from-blue-600/90 to-black/30",
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
    }, 5000); // Increased to 5s for better readability
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="h-64 w-full md:h-[480px] lg:h-[550px] relative overflow-hidden rounded-2xl shadow-premium group">
      {/* Arrow Left */}
      <button
        onClick={prevSlider}
        className="absolute top-1/2 left-4 z-20 flex justify-center items-center bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-neutral-900 rounded-full w-10 h-10 md:w-12 md:h-12 transition-all duration-300 -translate-x-20 group-hover:translate-x-0"
        aria-label="Previous Slide"
      >
        <HiArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Arrow Right */}
      <button
        onClick={nextSlider}
        className="absolute top-1/2 right-4 z-20 flex justify-center items-center bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-neutral-900 rounded-full w-10 h-10 md:w-12 md:h-12 transition-all duration-300 translate-x-20 group-hover:translate-x-0"
        aria-label="Next Slide"
      >
        <HiArrowRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Dots */}
      <div className="flex justify-center items-center gap-2 z-20 absolute bottom-6 w-full">
        {carouselData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlider(idx)}
            className={`rounded-full transition-all duration-500 h-2 md:h-2.5 shadow-sm ${
              currentSlider === idx
                ? "w-8 bg-white"
                : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel Container */}
      <div
        className="flex h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentSlider * 100}%)` }}
      >
        {carouselData.map((slide, idx) => (
          <div key={idx} className="relative min-w-full h-full">
            <img
              src={slide.image}
              alt={slide.offerTitle}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${slide.color} via-black/40 to-transparent flex flex-col justify-center items-start text-white p-8 md:p-16 lg:p-24`}
            >
              <div className="animate-slide-up space-y-4 max-w-xl">
                <div className="flex items-center gap-2 text-warning-400 font-bold tracking-wider text-xs md:text-sm uppercase bg-white/10 w-fit px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                  <BsFire /> Trending Now
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight drop-shadow-lg font-heading">
                  {slide.offerTitle}
                </h2>
                <p className="text-lg md:text-xl text-neutral-100 font-medium opacity-95 leading-relaxed drop-shadow-md max-w-lg">
                  {slide.offerDescription}
                </p>
                <div className="pt-4">
                  <Link to="/shop">
                    <Button
                      size="lg"
                      variant="primary"
                      rightIcon={<HiArrowRight />}
                      className="shadow-glow hover:scale-105"
                    >
                      {slide.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
