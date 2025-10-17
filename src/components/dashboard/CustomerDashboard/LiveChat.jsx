import React, { useState } from "react";

const stages = ["Start", "Analysis", "Report", "Finish"];

export default function InspectorChatWithProgress() {
  const [progressLevel, setProgressLevel] = useState(-1); 

  const handleStart = (index) => {
    if (progressLevel < index) setProgressLevel(index - 0.5); 
  };

  const handleFinish = (index) => {
    if (progressLevel < index + 1) setProgressLevel(index + 1); 
  };

  const handleRevert = (index) => {
    setProgressLevel(index - 0.5);
  };

  return (
    <div className="flex h-screen bg-white text-black font-sans">
      {/* <aside className="w-64 border-r border-gray-200 p-6 flex flex-col items-center relative">
        <h2 className="text-lg font-bold mb-6">Inspection Progress</h2>

        <div className="absolute left-8 top-20 bottom-20 w-1 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="bg-green-500 w-full transition-all duration-500"
            style={{
              height: `${(progressLevel + 1) * (100 / stages.length)}%`,
            }}
          />
        </div>

        <div className="flex flex-col gap-10 w-full pl-12">
          {stages.map((stage, index) => {
            const isStarted = progressLevel >= index - 0.5;
            const isFinished = progressLevel >= index + 1;

            return (
              <div key={stage} className="relative z-10">
                <div
                  className={`absolute -left-8 top-1 w-4 h-4 rounded-full ${
                    isFinished
                      ? "bg-green-600"
                      : isStarted
                      ? "bg-green-300"
                      : "bg-gray-300"
                  }`}
                />

                <div className="mb-2 font-medium">{stage}</div>
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => handleStart(index)}
                    className={`px-3 py-1 text-xs rounded-md border ${
                      isStarted ? "bg-green-100 text-green-700 border-green-300" : "bg-white text-black hover:bg-gray-100"
                    }`}
                  >
                    Start
                  </button>
                  <button
                    onClick={() => handleFinish(index)}
                    className={`px-3 py-1 text-xs rounded-md border ${
                      isFinished ? "bg-green-600 text-white border-green-600" : "bg-white text-black hover:bg-gray-100"
                    }`}
                  >
                    Finish
                  </button>
                  {isFinished && index > 0 && (
                    <button
                      onClick={() => handleRevert(index)}
                      className="px-3 py-1 text-xs rounded-md border bg-yellow-100 text-yellow-700 border-yellow-300"
                    >
                      Revert
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </aside> */}

      <main className="flex-1 flex flex-col">
        <div className="border-b border-gray-200 px-6 py-4">
          <h1 className="text-xl font-bold">Inspector Chat</h1>
          <p className="text-sm text-gray-500">
            Current Stage: {stages[Math.floor(progressLevel)] || "Not started"}
          </p>
        </div>

       <div className="flex-1 overflow-y-auto p-6 space-y-4">
  <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg max-w-xl mx-auto text-center">
    🚧 <strong>Chat under development</strong><br />
    We're working on real-time messaging between inspectors and customers.<br />
    Thank you for your patience — this feature will be available soon.
  </div>
</div>


       <div className="border-t border-gray-200 px-6 py-4 flex items-center gap-4 opacity-50 pointer-events-none">
  <input
    type="text"
    placeholder="Chat coming soon..."
    disabled
    className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm bg-gray-100 text-gray-500"
  />
  <button className="bg-gray-300 text-gray-500 px-4 py-2 rounded-md text-sm font-medium cursor-not-allowed">
    Send
  </button>
</div>

      </main>
    </div>
  );
}
