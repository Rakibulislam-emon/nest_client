import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router";
import Button from "../../../../components/common/Button";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi2";
import { BsFire } from "react-icons/bs";

// Elite Visual Assets
import organicArtisan from "../../../../assets/hero/organic_artisan.png";
import eliteMembership from "../../../../assets/hero/elite_membership.png";
import modernPantry from "../../../../assets/hero/modern_pantry.png";
import natureBounty from "../../../../assets/hero/nature_bounty.png";

export const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const carouselData = [
    {
      image: organicArtisan,
      offerTitle: "Artisan Organic Harvest",
      offerDescription:
        "Hand-selected heirloom harvests delivered with source-to-table integrity and unmatched freshness.",
      buttonText: "Shop Collection",
      color: "from-green-600/95 to-black/40",
    },
    {
      image: eliteMembership,
      offerTitle: "Elite Privilege Access",
      offerDescription:
        "Unlock 20% OFF site-wide and exclusive concierge benefits. Use code: ELITE at checkout.",
      buttonText: "Claim Discount",
      color: "from-neutral-900/90 to-black/60",
    },
    {
      image: modernPantry,
      offerTitle: "The Modern Pantry",
      offerDescription:
        "Elevate your culinary journey with our curated selection of ultra-premium organic staples.",
      buttonText: "Explore Essentials",
      color: "from-amber-700/90 to-black/40",
    },
    {
      image: natureBounty,
      offerTitle: "Nature's Purest Bounty",
      offerDescription:
        "Vibrant, sun-ripened freshness from certified sustainable orchards to your doorstep.",
      buttonText: "View Selection",
      color: "from-blue-700/80 to-black/40",
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
                <div className="pb-8 md:pt-4 lg:pt-6 " >
                  <Link to="/shop">
                    <Button
                      size="lg"
                      variant="primary"
                      rightIcon={<HiArrowRight />}
                      className="shadow-glow mb-4  md:mb-0 hover:scale-105"
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
