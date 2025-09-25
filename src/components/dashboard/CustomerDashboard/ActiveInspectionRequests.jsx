import React from "react";
import InspectionRequestCard from "./InspectionRequestCard";

export default function ActiveInspectionRequests({ requests = [] }) {
  return (
    <section className="p-6 bg-black rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-300 mb-6">📋 Your Active Inspection Requests</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {requests && requests.map((req, index) => (
          <InspectionRequestCard key={index} request={req} />
        ))}
      </div>
    </section>
  );
}
