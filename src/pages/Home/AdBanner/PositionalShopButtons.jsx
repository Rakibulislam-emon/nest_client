/* eslint-disable react/prop-types */
export default function PositionalShopButtons({ image, title, discount, text }) {
    return (
      <div className="relative bg-gray-200 rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-auto" />
        <div className="absolute top-0 left-0 lg:top-10  text-white p-4 md:p-8">
          <h2 className="text-xl md:text-3xl font-bold">{title}</h2>
          <p className="text-lg md:text-xl">{discount}</p>
          <button className="mt-2 bg-yellow-500 text-black rounded px-4 py-2 hover:bg-yellow-400">
            {text}
          </button>
        </div>
      </div>
    );
  }