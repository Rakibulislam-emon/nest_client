
const ProductSkeleton = () => {
  return (
    <div className="h-full p-2 animate-pulse">
      <div className="h-full flex flex-col justify-between bg-white rounded-[2.5rem] border border-neutral-100 overflow-hidden relative">
        {/* Top Section */}
        <div className="relative p-6 bg-neutral-100/50 h-72 rounded-t-[2.5rem]">
          <div className="w-full h-full bg-neutral-200 rounded-3xl" />
        </div>

        {/* Details Section */}
        <div className="px-6 pb-6 pt-5 flex flex-col flex-grow bg-white">
          <div className="mb-3">
            <div className="h-3 w-20 bg-neutral-100 rounded mb-2" />
            <div className="h-6 w-full bg-neutral-100 rounded mb-2" />
            <div className="h-6 w-3/4 bg-neutral-100 rounded" />
          </div>

          <div className="flex items-center gap-2 mb-4">
            <div className="h-4 w-24 bg-neutral-100 rounded" />
          </div>

          <div className="h-8 w-24 bg-neutral-100 rounded mb-6" />

          <div className="mt-auto pt-2">
            <div className="h-12 w-full bg-neutral-100 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
