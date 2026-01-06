import Skeleton from "../../../components/ui/Skeleton";

const DealsSkeleton = () => {
  return (
    <div className="py-8 px-2 h-full">
      <div className="h-full flex flex-col relative overflow-hidden rounded-2xl border border-neutral-100 bg-white">
        {/* Image Area */}
        <div className="relative h-64 overflow-hidden rounded-t-2xl">
          <Skeleton className="w-full h-full" rounded="none" />
          <div className="absolute bottom-4 inset-x-4 flex justify-center">
            <Skeleton className="w-32 h-10 rounded-lg" />
          </div>
        </div>

        {/* Content Area */}
        <div className="p-5 flex flex-col flex-grow bg-white">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1 mr-2 space-y-2">
              <Skeleton className="w-full h-5" />
              <Skeleton className="w-3/4 h-5" />
            </div>
            <Skeleton className="w-10 h-5 rounded-md" />
          </div>

          <Skeleton className="w-24 h-4 mb-6" rounded="full" />

          <div className="mt-auto pt-4 border-t border-dashed border-neutral-100">
            <div className="flex justify-between items-end mb-4">
              <div className="space-y-1">
                <Skeleton className="w-8 h-2" />
                <Skeleton className="w-16 h-6" />
              </div>
              <div className="space-y-1">
                <Skeleton className="w-8 h-2" />
                <Skeleton className="w-12 h-4" />
              </div>
            </div>
            <Skeleton className="w-full h-11 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsSkeleton;
