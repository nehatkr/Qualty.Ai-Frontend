import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { Link } from "react-router";

export default function ViewAllReportsCard() {
  return (
    <div className="bg-gradient from-gray-400 to-gray-500 rounded-lg shadow-md p-4 text-gray-500 hover:shadow-lg transition border-2 border-gray-600">
      <div className="flex items-center gap-3">
        <FaFileAlt className="text-green-600 text-2xl cursor-pointer" />
        <Link to="/customer/analysis">
          <div>
            <h3 className="font-semibold text-lg cursor-pointer">
              View All Reports
            </h3>
            <p className="text-sm text-gray-600">
              Access detailed analytics and reports.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
