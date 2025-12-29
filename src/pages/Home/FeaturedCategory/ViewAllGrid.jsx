/* eslint-disable react/prop-types */

const ViewAllGrid = ({ data }) => {
  const categoryColors = [
    "bg-green-50",
    "bg-amber-50",
    "bg-blue-50",
    "bg-purple-50",
    "bg-rose-50",
    "bg-indigo-50",
  ];

  let flatIndex = 0;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 clear-both">
      {data.map((item) =>
        item.products.map((product) => {
          const bgClass = categoryColors[flatIndex % categoryColors.length];
          flatIndex++;

          return (
            <div
              key={product._id || flatIndex}
              className={`
                group cursor-pointer flex flex-col items-center p-6 rounded-2xl 
                transition-all duration-300 hover:-translate-y-2 hover:shadow-premium
                border border-transparent hover:border-primary-100 ${bgClass}
              `}
            >
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-white/50 rounded-full blur-xl scale-75 group-hover:scale-110 transition-transform duration-500"></div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="relative w-24 h-24 md:w-28 md:h-28 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-neutral-800 font-bold text-center text-sm md:text-base mb-1 group-hover:text-primary-700 transition-colors">
                {product.name}
              </h3>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ViewAllGrid;
