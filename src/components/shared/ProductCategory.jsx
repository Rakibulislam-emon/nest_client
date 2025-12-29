/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import { useFilter } from "../../context/FilterContext";
import { useFeaturedCategory } from "../../hooks/useFeaturedCategory";
import { twMerge } from "tailwind-merge";
import { FiChevronRight } from "react-icons/fi";

export default function ProductCategory({ className }) {
  const { data } = useFeaturedCategory();
  const { setSelectedCategories } = useFilter();
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategories([category]);
    navigate("/shop");
  };

  return (
    <div className="md:w-full hidden lg:block ">
      <div className="glass rounded-[2rem] p-6 border border-white/40 shadow-premium overflow-hidden relative">
        {/* Decorative Light Glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-500/5 blur-3xl rounded-full"></div>

        <div className="relative z-10">
          <div className="mb-6 px-2">
            <h2 className="text-2xl font-bold font-heading tracking-tight text-neutral-900">
              Categories
            </h2>
            <div className="h-1 w-12 bg-gradient-primary rounded-full mt-2 shadow-glow-sm"></div>
          </div>

          <div
            className={twMerge(
              "grid grid-cols-1 gap-1.5 overflow-y-auto h-[550px] pr-2 custom-scrollbar",
              className
            )}
          >
            {data &&
              data.map((category) => (
                <div
                  onClick={() => handleCategoryClick(category?.category)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleCategoryClick(category?.category);
                    }
                  }}
                  key={category.category}
                  role="button"
                  tabIndex={0}
                  aria-label={`Filter by ${category.category}`}
                  className="group flex cursor-pointer items-center justify-between p-3.5 rounded-2xl hover:bg-white/60 transition-all duration-300 hover:translate-x-1 border border-transparent hover:border-white/50 hover:shadow-soft focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:bg-white/60"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 font-bold group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                      {category.category.charAt(0)}
                    </div>
                    <span className="font-semibold text-neutral-700 group-hover:text-neutral-900 transition-colors">
                      {category.category}
                    </span>
                  </div>
                  <FiChevronRight className="text-neutral-300 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
