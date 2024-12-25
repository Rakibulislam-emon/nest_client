/* eslint-disable react/prop-types */
import { useFeaturedCategory } from "../../hooks/useFeaturedCategory";
import { twMerge } from "tailwind-merge";
export default function ProductCategory({className}) {
  const { data } = useFeaturedCategory();
  return (
    <div className="md:w-full hidden lg:block border">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Category</h2>
        <div className={twMerge("grid grid-cols-1 gap-4 overflow-y-auto md:h-[600px]",className)}>
          {data &&
            data.map((category) => (
              <div
                key={category.category} // Assuming each category has a unique 'id'
                className={`flex items-center border  p-3 rounded-lg `}
              >
                <span className="ml-2 font-medium text-gray-800">
                  {category.category} {/* Category name dynamically */}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
