import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function CompletedTasksCard() {
  return (
    <div className="bg-black rounded-lg shadow-md p-4 text-gray-300">
      <h3 className="text-sm font-semibold text-gray-500">Completed</h3>
      <p className="text-3xl font-bold">113</p>
      <div className="flex items-center text-green-600 text-sm mt-1">
        <FaCheckCircle className="mr-1" /> 98.5% success rate
      </div>
      <a href="#" className="text-blue-600 text-sm mt-2 inline-block">View History →</a>
    </div>
  );
}