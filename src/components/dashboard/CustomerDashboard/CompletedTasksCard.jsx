import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function CompletedTasksCard() {
  return (
    <div className="bg-white text-black rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <h3 className="text-sm font-semibold text-gray-600 mb-1">Completed</h3>
      <p className="text-4xl font-semibold tracking-tight">113</p>

      <div className="flex items-center text-green-700 text-sm mt-2">
        <FaCheckCircle className="mr-2" />
        <span>98.5% success rate</span>
      </div>

      <a
        href="#"
        className="text-sm font-medium text-black mt-4 inline-block hover:underline hover:text-gray-800 transition duration-200 cursor-pointer"
      >
        View History →
      </a>
    </div>
  );
}
