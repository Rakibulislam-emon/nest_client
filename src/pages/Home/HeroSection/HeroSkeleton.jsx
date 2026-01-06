import Skeleton from "../../../components/ui/Skeleton";

const HeroSkeleton = () => {
  return (
    <div className="h-[500px] w-full md:h-[550px] lg:h-[600px] relative overflow-hidden rounded-2xl bg-white border border-neutral-100">
      <div className="absolute inset-0 flex flex-col justify-center items-start p-6 md:p-16 lg:p-24 space-y-6">
        {/* Trending Badge Skeleton */}
        <Skeleton className="w-32 h-8 rounded-full" />

        {/* Title Skeleton */}
        <div className="space-y-2">
          <Skeleton className="w-64 h-12 md:h-16 lg:h-20 rounded-xl" />
          <Skeleton className="w-96 h-12 md:h-16 lg:h-20 rounded-xl" />
        </div>

        {/* Description Skeleton */}
        <div className="space-y-2 max-w-lg w-full">
          <Skeleton className="w-full h-4 rounded-md" />
          <Skeleton className="w-full h-4 rounded-md" />
          <Skeleton className="w-3/4 h-4 rounded-md" />
        </div>

        {/* Button Skeleton */}
        <div className="pt-8">
          <Skeleton className="w-48 h-14 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroSkeleton;
