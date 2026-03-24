export const FilterSkeleton = () => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide my-5 border-transparent text-muted-foreground/40">
      {Array.from({ length: 8 }).map((_, i) => {
        return (
          <div
            key={i}
            className="w-12 animate-pulse h-5 rounded-full border bg-loading"
          />
        );
      })}
    </div>
  );
};
