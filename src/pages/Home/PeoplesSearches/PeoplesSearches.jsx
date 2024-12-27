import { useNavigate } from "react-router";
import { useFeaturedCategory } from "../../../hooks/useFeaturedCategory";
import { useFilter } from "../../../context/FilterContext";

export default function PeoplesSearches() {
  const { data } = useFeaturedCategory();
  const navigation = useNavigate();
  const { setSelectedCategory } = useFilter();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigation("/shop");
  };
  return (
    <div className="p-4 md:p-6 lg:p-8 mx-auto max-w-screen-2xl">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
        People are also looking for
      </h1>
      <div className="flex flex-wrap gap-2">
        {data.map((product, index) => (
          <div
            onClick={() => handleCategoryClick(product.category)}
            key={index}
            className=" bg-[#fcf7eb] shadow cursor-pointer rounded-lg p-4 flex-grow flex-shrink-0 w-auto hover:bg-[#ffecbe] hover:shadow-lg transition duration-200"
          >
            <p className="text-center text-sm md:text-base lg:text-lg">
              {product.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
