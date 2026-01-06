import Skeleton from "../../../components/ui/Skeleton";

const CategorySkeleton = () => {
  return (
    <div className="flex flex-col items-center p-6 rounded-2xl border border-neutral-100 bg-neutral-50/30">
      <div className="relative mb-4">
        <Skeleton className="w-24 h-24 md:w-28 md:h-28" rounded="full" />
      </div>
      <Skeleton className="w-24 h-5 mb-2" />
      <Skeleton className="w-16 h-4" rounded="full" />
    </div>
  );
};

export default CategorySkeleton;
