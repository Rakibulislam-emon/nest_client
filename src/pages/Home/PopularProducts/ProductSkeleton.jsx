import Skeleton from "../../../components/ui/Skeleton";

const ProductSkeleton = () => {
  return (
    <div className="h-full p-2 w-full">
      <div className="h-full flex flex-col justify-between bg-white rounded-[2.5rem] border border-neutral-100 shadow-soft overflow-hidden">
        {/* Top Section */}
        <div className="p-6 bg-neutral-50/50 h-72 rounded-t-[2.5rem] flex items-center justify-center">
          <Skeleton className="w-40 h-40" rounded="full" />
        </div>

        {/* Details Section */}
        <div className="px-6 pb-6 pt-5 flex flex-col flex-grow bg-white">
          <div className="mb-3 space-y-2">
            <Skeleton className="w-20 h-3" />
            <Skeleton className="w-full h-6" />
            <Skeleton className="w-3/4 h-6" />
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <Skeleton className="w-24 h-4" />
          </div>

          {/* Price */}
          <div className="flex flex-col gap-1 mb-6">
            <Skeleton className="w-32 h-8" />
          </div>

          {/* Action Button */}
          <div className="mt-auto pt-2">
            <Skeleton className="w-full h-12 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
