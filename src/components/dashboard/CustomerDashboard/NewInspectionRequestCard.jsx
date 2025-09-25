import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import {Link} from "react-router-dom"

export default function NewInspectionRequestCard() {
  return (
    <div className="bg-gradient from-gray-400 to-gray-500 rounded-lg shadow-md p-4 text-gray-500 hover:shadow-lg transition border-2 border-gray-600 w-sm">
      <div className="flex items-center gap-3">
        <FaPlusCircle className="text-blue-600 text-2xl cursor-pointer" />
        <div>
          <Link to="/enquiry">
          <h3 className="font-semibold text-lg cursor-pointer">New Inspection Request</h3>
          <p className="text-sm text-gray-600">Submit a new commodity inspection request.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
