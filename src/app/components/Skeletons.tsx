export function FilmsCardSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-12 gap-8 pb-8">
      {[...Array(6)].map((item, index) => (
        <div
          key={index}
          className="shadow w-full mx-auto bg-slate-700 overflow-hidden rounded-lg"
        >
          <div className="animate-pulse">
            <div className="h-[500px] bg-slate-800" />
          </div>
          <div className="p-4 flex flex-col gap-2">
            <div className="md:h-6 h-4 bg-slate-800 rounded"></div>
            <div className="h-4 bg-slate-800 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
