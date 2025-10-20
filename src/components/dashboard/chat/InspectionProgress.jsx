import React from "react";

const stages = ["Start", "Analysis", "Report", "Completed"];

export default function InspectionProgress({
  progressLevel,
  isInspector,
  onAdvanceStage,
}) {
  return (
    <aside className="w-full sm:w-64 sm:border-r border-gray-200 p-4 sm:p-6 flex flex-col sm:items-center relative bg-white text-black">
      <h2 className="text-lg font-semibold mb-4 sm:mb-6 tracking-wide text-center sm:text-left">
        Inspection Progress
      </h2>

      <div className="hidden sm:block absolute left-8 top-20 bottom-20 w-1 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="bg-black w-full transition-all duration-500"
          style={{
            height: `${progressLevel * (100 / stages.length)}%`,
          }}
        />
      </div>

      <div className="flex flex-col sm:gap-10 gap-6 w-full sm:pl-12">
        {stages.map((label, index) => {
          const isCompleted = progressLevel > index;
          const isCurrent = progressLevel === index;
          const isLocked = progressLevel < index;

          const status = isCompleted
            ? "Completed"
            : isCurrent
            ? "In Progress"
            : "Not Started";

          return (
            <div key={label} className="relative z-10 flex flex-col sm:block">
              <div
                className={`hidden sm:block absolute -left-8 top-1 w-4 h-4 rounded-full transition-all duration-300 ${
                  isCompleted
                    ? "bg-black"
                    : isCurrent
                    ? "bg-gray-800"
                    : "bg-gray-300"
                }`}
              />

              <div className="mb-1 font-medium">{label}</div>
              <div className="text-xs text-gray-500 mb-2">{status}</div>

              {isInspector && isCurrent && index < stages.length && (
                <button
                  onClick={() => onAdvanceStage(index)}
                  disabled={isLocked}
                  className={`px-3 py-1 text-xs rounded-md border transition-all w-fit ${
                    isLocked
                      ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                      : "bg-white text-black border-black hover:bg-gray-100"
                  }`}
                >
                  {index === stages.length - 1 ? "Mark Completed" : "Finish"}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
