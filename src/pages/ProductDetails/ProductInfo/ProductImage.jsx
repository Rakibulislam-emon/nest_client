/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function ProductImage({ data, relatedImages = [] }) {
  // Extract image URLs from relatedImages and include the main image
  const images = [
    data?.image,
    ...relatedImages.map((item) => item.urls?.regular),
  ].filter(Boolean); // Ensure no null/undefined values

  // State to track the current image
  const [currentImage, setCurrentImage] = useState("");

  // Initialize the current image with data.image when the component mounts
  useEffect(() => {
    if (data?.image) {
      setCurrentImage(data.image);
    }
  }, [data?.image]);

  // If no images, show a fallback message
  if (!images.length) {
    return (
      <div className="flex items-center justify-center p-12 bg-neutral-50 rounded-2xl border border-dashed border-neutral-200 w-full h-96">
        <p className="text-neutral-500 font-medium italic text-center">
          No images available for this product.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full animate-fadeIn">
      {/* Main Image Container */}
      <div className="relative group bg-white rounded-3xl shadow-premium p-6 w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden border border-neutral-100 flex items-center justify-center transition-all duration-500 hover:shadow-elevation">
        {/* Elite Signature Badge */}
        <div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 bg-neutral-900/90 backdrop-blur-md rounded-full border border-white/20 shadow-glow-sm animate-spring">
          <span className="text-[10px] font-black text-primary-400 uppercase tracking-tighter">
            Elite
          </span>
          <span className="w-1 h-1 rounded-full bg-primary-400"></span>
          <span className="text-[10px] font-bold text-white uppercase tracking-widest">
            Certified
          </span>
        </div>

        <img
          src={currentImage}
          alt="Main Product Display"
          className="w-full h-full object-contain rounded-xl transition-transform duration-700 group-hover:scale-110"
        />

        {/* Info Indicator */}
        <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl text-[10px] font-black text-neutral-900 uppercase tracking-widest border border-white/50 shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          Studio Quality
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex flex-wrap gap-4 overflow-x-auto pb-4 hide-scrollbar">
        {images.map((item, index) => (
          <button
            key={index}
            className={`
              relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 transition-all duration-500 flex-shrink-0 animate-spring
              ${
                item === currentImage
                  ? "border-primary-500 shadow-glow-sm scale-110 z-10"
                  : "border-neutral-100 hover:border-primary-200 grayscale-[0.8] hover:grayscale-0 hover:scale-105"
              }
            `}
            onClick={() => setCurrentImage(item)}
          >
            <img
              src={item}
              alt={`View ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {item === currentImage && (
              <div className="absolute inset-0 bg-primary-500/10 backdrop-blur-[1px]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
