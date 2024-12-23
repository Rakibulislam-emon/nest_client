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
    return <p className="text-center text-gray-500">No images available.</p>;
  }

  return (
    <div className="flex flex-col lg:flex-col gap-6 items-start w-full md:w-full px-4 ">
        {/* Main Image */}
        <div className="relative bg-white rounded-lg shadow-xl p-4 w-full h-72 sm:h-96 md:h-[550px] overflow-hidden ">
        <img
          src={currentImage}
          alt="Main Product Image"
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
      {/* Thumbnail Images */}
      <div className="flex justify-center gap-4 overflow-x-auto lg:overflow-hidden w-full ">
        {images.map((item, index) => (
          <div
            key={index}
            className={`relative group cursor-pointer flex-shrink-0 ${
              item === currentImage ? "ring-2 ring-blue-500" : ""
            }`} // Highlight the currently selected image
            onClick={() => {
              setCurrentImage(item); // Update current image on click
            }}
          >
            <img
              src={item}
              alt={`Related Image ${index + 1}`}
              className="md:h-24 md:w-24 h-14 w-14 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
            />
          </div>
        ))}
      </div>
   
  </div>
  
  );
}
