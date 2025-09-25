import React from "react";
import NewInspectionRequestCard from "./NewInspectionRequestCard";
import ViewAllReportsCard from "./ViewAllReportsCard";
import LiveInspectionCard from "./LiveInspectionCard";

export default function QuickActions() {
  return (
    <section className="p-6 bg-black rounded-xl shadow-xl">
      <h2 className="text-3xl font-extrabold text-gray-300 mb-6 text-center tracking-tight">
         Quick Actions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <NewInspectionRequestCard />
        <ViewAllReportsCard />
        <LiveInspectionCard />
      </div>
    </section>
  );
}
