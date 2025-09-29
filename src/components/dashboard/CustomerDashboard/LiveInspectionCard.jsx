import React from "react";
import { FaSearch } from "react-icons/fa";

export default function LiveInspectionCard() {
  return (
    <div className="bg-gradient from-gray-400 to-gray-500 rounded-lg shadow-md p-4 text-gray-500 hover:shadow-lg transition border-2 border-gray-600 ">
      <div className="flex items-center gap-3">
        <FaSearch className="text-purple-600 text-2xl cursor-pointer" />
        <div>
          <h3 className="font-semibold text-lg cursor-pointer">Live Inspection</h3>
          <p className="text-sm text-gray-600">Monitor ongoing inspections in real-time.</p>
        </div>
      </div>
    </div>
  );
}