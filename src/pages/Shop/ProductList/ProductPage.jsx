import { useState, useRef, useEffect } from "react";
import Loader from "../../../components/ui/Loader";
import { useFilter } from "../../../context/FilterContext";
import { useAllProducts } from "../../../hooks/useAllProducts";
import ProductCard from "../../Home/PopularProducts/Product/ProductCard";
import ProductSkeleton from "./ProductSkeleton";
import FilterToggleButton from "../../../components/shared/Filter/FilterToggleButton";
import Button from "../../../components/common/Button";
import EliteEmptyState from "../../../components/shared/EliteEmptyState";
import {
  HiViewColumns,
  HiSquares2X2,
  HiSquaresPlus,
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

export default function ProductPage() {
  const [columns, setColumns] = useState(3); // Default to 3 columns
  const { data: allProducts, loading: productsLoading } = useAllProducts(); // Fetch all products initially
  const {
    filteredProducts,
    loading: filterLoading,
    setSortField,
    setSortOrder,
    page,
    setPage,
    totalPages,
    sortField,
    sortOrder,
    clearFilters,
  } = useFilter(); // Get filtered products and sorting functions from context

  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef(null);
  const headerRef = useRef(null);

  const sortOptions = [
    { label: "Default Sorting", value: "-" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "Name: A to Z", value: "name-asc" },
    { label: "Name: Z to A", value: "name-desc" },
    { label: "Highest Rated", value: "rating-desc" },
  ];

  const currentSortLabel =
    sortOptions.find((opt) => opt.value === `${sortField}-${sortOrder}`)
      ?.label || "Default Sorting";

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Ensure filteredProducts and allProducts are arrays
  const productsToDisplay =
    Array.isArray(filteredProducts) && filteredProducts.length > 0
      ? filteredProducts
      : Array.isArray(allProducts) && allProducts.length > 0
      ? allProducts
      : []; // Fallback to an empty array if neither is valid

  if (productsLoading || (filterLoading && productsToDisplay.length === 0)) {
    // Render full-page Loader only on initial load or if no products are available
    return <Loader className={"h-screen flex justify-center items-center"} />;
  }

  const handlePageChange = (newPage) => {
    setPage(newPage);
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="py-2">
      {/* Header Section */}
      <div className="mb-12 text-center md:text-center" ref={headerRef}>
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-neutral-900 mb-4 tracking-tight">
          Our <span className="text-primary-600">Products</span>
        </h1>
        <p className="text-neutral-500 font-medium">
          Discover our wide range of premium products, curated for your daily
          needs.
        </p>
      </div>

      {/* Controls Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 pb-8 border-b border-neutral-100">
        <div className="flex items-center justify-between md:justify-start gap-8">
          {/* Grid View Toggles (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 p-1.5 bg-neutral-100 rounded-xl">
            {[2, 3, 4].map((num) => (
              <button
                key={num}
                onClick={() => setColumns(num)}
                className={twMerge(
                  "p-2 rounded-lg transition-all duration-300",
                  columns === num
                    ? "bg-white text-primary-600 shadow-soft"
                    : "text-neutral-400 hover:text-neutral-600"
                )}
                title={`${num} Columns`}
              >
                {num === 2 && <HiViewColumns size={20} />}
                {num === 3 && <HiSquares2X2 size={20} />}
                {num === 4 && <HiSquaresPlus size={20} />}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <span className="text-sm font-bold text-neutral-400 uppercase tracking-widest">
              Found:
            </span>
            <span className="text-xl font-bold text-primary-600 font-heading">
              {filterLoading ? "..." : productsToDisplay.length}
            </span>
            <span className="text-sm font-semibold text-neutral-500">
              Products
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <FilterToggleButton />
          </div>

          {/* Elite Custom Sort Dropdown */}
          <div className="relative" ref={sortRef}>
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-6 bg-white border border-neutral-200 rounded-full pl-6 pr-4 py-3 shadow-soft hover:shadow-medium transition-all duration-300 group min-w-[220px] justify-between"
            >
              <div className="flex flex-col items-start leading-none gap-1">
                <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-[0.2em] font-sans">
                  Sort By:
                </span>
                <span className="text-sm font-bold text-neutral-800 font-heading tracking-tight">
                  {currentSortLabel}
                </span>
              </div>
              <HiChevronDown
                className={twMerge(
                  "text-neutral-400 transition-transform duration-300",
                  isSortOpen
                    ? "rotate-180 text-primary-600"
                    : "group-hover:text-neutral-600"
                )}
                size={18}
              />
            </button>

            {/* Dropdown Options List */}
            {isSortOpen && (
              <div className="absolute top-full right-0 mt-3 w-64 bg-white rounded-2xl shadow-premium border border-neutral-100 py-3 z-[110] animate-scale-in origin-top-right">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      const [field, order] = option.value.split("-");
                      setSortField(field || "");
                      setSortOrder(order || "");
                      setIsSortOpen(false);
                    }}
                    className={twMerge(
                      "w-full px-6 py-2.5 text-left text-sm font-medium transition-colors hover:bg-neutral-50 flex items-center justify-between group",
                      currentSortLabel === option.label
                        ? "text-primary-600 bg-primary-50/30 font-bold"
                        : "text-neutral-600"
                    )}
                  >
                    {option.label}
                    {currentSortLabel === option.label && (
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-600 shadow-glow" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {Array.isArray(productsToDisplay) && productsToDisplay.length > 0 ? (
        <div
          className={twMerge(
            "grid gap-8 lg:gap-10 transition-all duration-700",
            columns === 2 && "grid-cols-1 sm:grid-cols-2",
            columns === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
            columns === 4 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          )}
        >
          {filterLoading
            ? [...Array(columns * 2)].map((_, idx) => (
                <ProductSkeleton key={idx} />
              ))
            : productsToDisplay.map((product) => (
                <div key={product._id} className="animate-fade-in">
                  <ProductCard product={product} />
                </div>
              ))}
        </div>
      ) : (
        !filterLoading && (
          <EliteEmptyState
            icon="🥑"
            title="No matches found"
            description="We searched our elite stores but couldn't find a match for your current filters."
            buttonText="Reset All Filters"
            onButtonClick={clearFilters}
          />
        )
      )}

      {/* Pagination Section */}
      <div className="flex justify-center items-center gap-6 mt-20 pt-12 border-t border-neutral-100">
        <Button
          variant="outline"
          size="md"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="min-w-[120px] rounded-2xl border-neutral-200 hover:border-primary-500 hover:bg-primary-50 px-4 group"
          leftIcon={
            <HiChevronLeft
              className="group-hover:-translate-x-1 transition-transform"
              size={18}
            />
          }
        >
          Previous
        </Button>

        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-sans">
            Page
          </span>
          <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary-600 text-white font-bold font-heading shadow-premium ring-4 ring-primary-50">
            {page}
          </div>
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-sans">
            of
          </span>
          <span className="text-lg font-bold text-neutral-800 font-heading">
            {totalPages}
          </span>
        </div>

        <Button
          variant="outline"
          size="md"
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          className="min-w-[120px] rounded-2xl border-neutral-200 hover:border-primary-500 hover:bg-primary-50 px-4 group"
          rightIcon={
            <HiChevronRight
              className="group-hover:translate-x-1 transition-transform"
              size={18}
            />
          }
        >
          Next
        </Button>
      </div>
    </div>
  );
}
