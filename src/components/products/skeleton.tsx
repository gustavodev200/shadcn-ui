import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const TabsSkeleton = () => {
  return (
    <div className="my-6">
      <Skeleton className="w-full h-10 rounded-xl" />

      <div className="mt-3 grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {Array.from({ length: 6 }, (item, index) => (
          <div key={index}>
            <Skeleton className="w-full h-32 rounded-xl" />
            <Skeleton className="mt-2 w-full h-7 rounded-xl" />
            <Skeleton className="mt-2 w-16 h-5 rounded-xl" />
            <Skeleton className="mt-2 w-full h-9 rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsSkeleton;
