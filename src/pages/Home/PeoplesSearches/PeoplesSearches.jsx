import { useNavigate } from "react-router";
import { useFeaturedCategory } from "../../../hooks/useFeaturedCategory";
import { useFilter } from "../../../context/FilterContext";
import Badge from "../../../components/common/Badge";

export default function PeoplesSearches() {
  const { data } = useFeaturedCategory();
  const navigation = useNavigate();
  const { setSelectedCategories } = useFilter();

  const handleCategoryClick = (category) => {
    setSelectedCategories([category]);
    navigation("/shop");
  };

  return (
    <div className="container py-12">
      <h1 className="text-xl md:text-2xl font-bold text-neutral-800 mb-6 border-b pb-4">
        Popular Searches
      </h1>
      <div className="flex flex-wrap gap-3">
        {data.map((product, index) => (
          <div
            onClick={() => handleCategoryClick(product.category)}
            key={index}
            className="cursor-pointer group"
          >
            <Badge
              variant="neutral"
              size="lg"
              className="bg-neutral-50 hover:bg-primary-50 text-neutral-600 hover:text-primary-700 border-neutral-200 hover:border-primary-200 transition-all duration-200"
            >
              {product.category}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
