import React from "react";

export default function CompanyActiveInspection() {
  const inspections = [
    {
      id: 1,
      title: "Residential Property Inspection",
      quote: "$450",
      bid: "$420",
      status: "In Progress",
    },
    // Add more inspections here if needed
  ];

  return (
    <div className="bg-black backdrop-blur-md border border-gray-700 rounded-xl p-6 shadow-xl w-full max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">My Active Inspections</h2>
        <span className="bg-white text-black text-xs font-medium px-3 py-1 rounded-full">
          {inspections.length} Active
        </span>
      </div>

      {/* Inspection Cards */}
      {inspections.map((inspection) => (
        <div
          key={inspection.id}
          className="bg-white border border-gray-700 rounded-lg p-5 shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4"
        >
          {/* Left Section */}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-black">{inspection.title}</h3>
            <p className="text-sm text-black">ID: {inspection.id}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm text-gray-800">
              <div>
                <p className="font-medium">Quote</p>
                <p className="text-gray-600 font-semibold">{inspection.quote}</p>
              </div>
              <div>
                <p className="font-medium">My Bid</p>
                <p className="text-gray-600 font-semibold">{inspection.bid}</p>
              </div>
              <div>
                <p className="font-medium">Status</p>
                <span className="inline-block bg-black text-white text-xs px-2 py-1 rounded-full mt-1">
                  {inspection.status}
                </span>
              </div>
              <div>
                <p className="font-medium">Type</p>
                <p className="text-gray-600">Residential</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
