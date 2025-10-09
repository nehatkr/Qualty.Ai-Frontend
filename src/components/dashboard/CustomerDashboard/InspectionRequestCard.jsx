import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function InspectionRequestCard({ request }) {
  const {
    _id,
    commodityCategory,
    inspectionLocation,
    urgencyLevel,
    inspectionBudget,
    bids,
    lowestBid,
    createdAt,
  } = request;

  const navigate = useNavigate();
  const formatted = new Date(createdAt).toLocaleDateString("en-GB");

  const priorityStyles = {
    High: "bg-red-100 text-red-700 border border-red-300",
    Medium: "bg-yellow-100 text-yellow-700 border border-yellow-300",
    Low: "bg-green-100 text-green-700 border border-green-300",
  };

  return (
    <div className="bg-white text-black p-5 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold">{commodityCategory}</h3>
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full ${
            priorityStyles[urgencyLevel]
          }`}
        >
          {urgencyLevel}
        </span>
      </div>

      {/* Location */}
      <p className="text-sm text-gray-600 flex items-center gap-1 mb-2">
        <FaMapMarkerAlt className="text-gray-400" />
        {inspectionLocation}
      </p>

      {/* Details */}
      <div className="text-sm text-gray-700 space-y-1 mb-4">
        <p>
          <strong>Budget:</strong> ₹{inspectionBudget}/-
        </p>
       {bids &&  <p>
          <strong>Bid Amount:</strong>{bids} 
        </p>}
        {lowestBid !== undefined && (
          <p>
            <strong>Lowest Bid:</strong> ₹{lowestBid}
          </p>
        )}
        <p>
          <strong>Date of Enquiry:</strong> {formatted}
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <button
          onClick={() => navigate(`/customer/inspection/${_id}`)}
          className="px-6 py-2 bg-black hover:bg-gray-900 text-white text-sm w-full font-medium rounded-lg cursor-pointer transition-all"
        >
          View Bids
        </button>
      </div>
    </div>
  );
}
