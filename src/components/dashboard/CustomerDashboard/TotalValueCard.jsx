import React from "react";
import { FaDollarSign } from "react-icons/fa";

export default function TotalValueCard() {
  return (
    <div className="bg-black rounded-lg shadow-md p-4 text-gray-300 w-sm">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-sm font-semibold text-gray-500">Total Value</h3>
          <p className="text-3xl font-bold">$245,000</p>
          <p className="text-green-600 text-sm mt-1">+8% revenue growth</p>
        </div>
        {/* <FaDollarSign className="text-2xl text-purple-500" /> */}
      </div>
      <a href="#" className="text-blue-600 text-sm mt-2 inline-block">View Payments →</a>
    </div>
  );
}
