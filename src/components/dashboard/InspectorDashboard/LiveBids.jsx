import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BidCard from "./BidCard";

const LiveBids = () => {
  const raisedEnquiries = useSelector((state) => state.enquiry.raisedEnquiry);  
  const navigate = useNavigate();
  const [placedBids, setPlacedBids] = useState({}); 

  const limitedEnquiries = raisedEnquiries?.slice(0, 2) || [];

  const handleBidPlaced = (id) => {
    setPlacedBids((prev) => ({ ...prev, [id]: true }));
  };

  return (
  <section className="bg-white text-black p-6 rounded-xl shadow-md max-w-4xl mx-auto border border-gray-200">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">Live Bids</h2>
      <span className="text-sm text-gray-500">
        {raisedEnquiries?.length || 0} Active Bids
      </span>
    </div>

    <section className="space-y-4">
      {limitedEnquiries.length === 0 ? (
        <p className="text-gray-500">No live enquiries available</p>
      ) : (
        limitedEnquiries.map((bid,index) => (
          <BidCard
            key={bid._id || index}
            bid={bid}
            bidPlaced={placedBids[bid._id]}
            onBidPlaced={() => handleBidPlaced(bid._id)}
          />
        ))
      )}
    </section>

    {raisedEnquiries?.length > 2 && (
      <div className="mt-6 text-center">
        <button
          onClick={() => navigate("/inspector/bidding")}
          className="bg-black hover:bg-gray-900 px-6 py-2 rounded text-white font-medium transition-all duration-200 shadow-sm hover:shadow-md"
        >
          View All →
        </button>
      </div>
    )}
  </section>
);

};

export default LiveBids;
