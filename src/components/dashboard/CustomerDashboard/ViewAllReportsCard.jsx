import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ViewAllReportsCard() {
  return (
    <div className="bg-white text-black rounded-xl shadow-md p-5 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
      <Link to="/customer/analysis" className="flex items-center gap-4">
        <div className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full">
          <FaFileAlt className="text-lg" />
        </div>
        <div>
          <h3 className="font-semibold text-base">View All Reports</h3>
          <p className="text-sm text-gray-600">
            Access detailed analytics and reports.
          </p>
        </div>
      </Link>
    </div>
  );
}
