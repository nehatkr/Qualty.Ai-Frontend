import React from "react";
import { FaClock } from "react-icons/fa";

export default function ActiveOrdersCard() {
  return (
    <div className="bg-white text-black rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <h3 className="text-sm font-semibold text-gray-600 mb-1">Active Orders</h3>
      <p className="text-4xl font-semibold tracking-tight">15</p>

      <div className="flex items-center text-green-700 text-sm mt-2">
        <FaClock className="mr-2" />
        <span>3 urgent requests</span>
      </div>

      <a
        href="#"
        className="text-sm font-medium text-black mt-4 inline-block hover:underline hover:text-gray-800 transition duration-200 cursor-pointer"
      >
        Monitor Live →
      </a>
    </div>
  );
}
