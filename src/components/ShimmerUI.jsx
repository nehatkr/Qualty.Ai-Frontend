import React from "react";

export default function ShimmerUI() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="w-full max-w-4xl px-6">
        <div className="space-y-6 animate-pulse">
          {/* Header shimmer */}
          <div className="h-10 bg-gray-200 rounded w-3/4 mx-auto" />

          {/* Card shimmer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-lg p-4 space-y-4 border border-gray-200 shadow-sm">
                <div className="h-6 bg-gray-300 rounded w-2/3" />
                <div className="h-4 bg-gray-300 rounded w-1/2" />
                <div className="h-4 bg-gray-300 rounded w-full" />
              </div>
            ))}
          </div>

          {/* Footer shimmer */}
          <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mt-10" />
        </div>
      </div>
    </div>
  );
}
