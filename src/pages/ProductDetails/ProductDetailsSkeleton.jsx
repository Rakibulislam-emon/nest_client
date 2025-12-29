/* eslint-disable no-unused-vars */
import React from "react";

const ProductDetailsSkeleton = () => {
  return (
    <div className="container py-12 md:py-16 animate-fadeIn">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-16">
        {/* Main Product Content */}
        <div className="lg:col-span-9 space-y-12">
          {/* Top Section: Gallery & Primary Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {/* Gallery Skeleton */}
            <div className="space-y-4">
              <div className="aspect-square w-full rounded-2xl bg-neutral-100 shimmer" />
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl bg-neutral-100 shimmer"
                  />
                ))}
              </div>
            </div>

            {/* Info Skeleton */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="h-4 w-24 bg-neutral-100 rounded-full shimmer" />
                <div className="h-10 w-full bg-neutral-100 rounded-xl shimmer" />
                <div className="h-10 w-3/4 bg-neutral-100 rounded-xl shimmer" />
              </div>

              <div className="flex gap-4">
                <div className="h-6 w-20 bg-neutral-100 rounded-full shimmer" />
                <div className="h-6 w-20 bg-neutral-100 rounded-full shimmer" />
              </div>

              <div className="space-y-4 pt-4">
                <div className="h-12 w-32 bg-neutral-100 rounded-xl shimmer" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-neutral-100 rounded-full shimmer" />
                  <div className="h-4 w-full bg-neutral-100 rounded-full shimmer" />
                  <div className="h-4 w-2/3 bg-neutral-100 rounded-full shimmer" />
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <div className="h-14 flex-1 bg-neutral-100 rounded-2xl shimmer" />
                <div className="h-14 w-14 bg-neutral-100 rounded-2xl shimmer" />
              </div>
            </div>
          </div>

          {/* Tabs Skeleton */}
          <div className="space-y-6 pt-8">
            <div className="flex gap-8 border-b border-neutral-100 pb-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-4 w-24 bg-neutral-100 rounded-full shimmer"
                />
              ))}
            </div>
            <div className="space-y-3">
              <div className="h-4 w-full bg-neutral-100 rounded-full shimmer" />
              <div className="h-4 w-full bg-neutral-100 rounded-full shimmer" />
              <div className="h-4 w-full bg-neutral-100 rounded-full shimmer" />
              <div className="h-4 w-3/4 bg-neutral-100 rounded-full shimmer" />
            </div>
          </div>
        </div>

        {/* Sidebar Skeleton */}
        <div className="lg:col-span-3 space-y-10">
          <div className="p-8 rounded-[2rem] border border-neutral-100 space-y-8 glass">
            <div className="h-7 w-32 bg-neutral-100 rounded-full shimmer" />
            <div className="space-y-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-neutral-100 shimmer" />
                  <div className="h-4 flex-1 bg-neutral-100 rounded-full shimmer" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
