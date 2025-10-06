import React from "react";
import { FaClock } from "react-icons/fa";

export default function ActiveOrdersCard() {
  return (
    <div className="bg-black rounded-lg shadow-md p-4 text-gray-300">
      <h3 className="text-sm font-semibold text-gray-500">Active Orders</h3>
      <p className="text-3xl font-bold">15</p>
      <div className="flex items-center text-green-600 text-sm mt-1">
        <FaClock className="mr-1" /> 3 urgent requests
      </div>
      <a href="#" className="text-blue-600 text-sm mt-2 inline-block">Monitor Live →</a>
    </div>
  );
}