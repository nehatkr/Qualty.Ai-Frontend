import React, { useState } from "react";
import { BASE_URL } from "../../../utils/constants";
import { useDispatch } from "react-redux";
import { addPlaceBid } from "../../../redux/slice/bidSlice";
import { toast } from "react-toastify";

const BidCard = ({ bid, bidPlaced, onBidPlaced }) => {
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  const {
    _id: id,
    inspectionLocation: location,
    urgencyLevel: urgency,
    inspectionBudget: budget,
    commodityCategory: commodity,
    subCommodity,
  } = bid;

  const handleBid = async () => {
    const bidAmount = Number(amount);
    if (!bidAmount || bidAmount <= 0) return alert("Enter a valid bid amount");

    try {
      const response = await fetch(`${BASE_URL}/inspector/bid/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ amount: bidAmount }),
      });

      const data = await response.json();
      if (data.success) {
        dispatch(addPlaceBid(data.bid));
        toast.success(data.message);
        setAmount(""); 
        onBidPlaced(); 
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error("Bid error:", err);
      toast.error("Something went wrong");
    }
  };
  
  return (
  <div className="bg-white border border-gray-200 rounded-xl p-5 m-5 flex flex-col md:flex-row justify-between items-start md:items-center shadow-sm hover:shadow-md transition-all duration-300">
    {/* Left Section */}
    <div className="space-y-2 text-sm text-gray-700">
      <p>
        <span className="font-medium text-gray-500">Commodity:</span>{" "}
        <span className="text-black">{commodity}</span>
      </p>
      <p>
        <span className="font-medium text-gray-500">SubCommodity:</span>{" "}
        <span className="text-black">{subCommodity}</span>
      </p>
      <p>
        <span className="font-medium text-gray-500">Location:</span>{" "}
        <span className="text-black">{location}</span>
      </p>
      <p>
        <span className="font-medium text-gray-500">Urgency:</span>{" "}
        <span className={`font-semibold ${urgency === "High" ? "text-red-500" : "text-yellow-500"}`}>
          {urgency}
        </span>
      </p>
      <p>
        <span className="font-medium text-gray-500">Budget:</span>{" "}
        <span className="text-green-600 font-semibold">₹{budget}/-</span>
      </p>
    </div>

    {/* Right Section */}
    <div className="mt-4 md:mt-0 flex flex-col items-end gap-2 w-full md:w-auto">
      {bidPlaced ? (
        <div className="text-green-600 font-semibold text-sm">✅ Bid Placed</div>
      ) : (
        <>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="₹ Enter bid amount"
            className="border border-gray-300 px-3 py-2 rounded-md w-full md:w-48 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            onClick={handleBid}
            className="bg-black hover:bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200"
          >
            Place Bid
          </button>
        </>
      )}
    </div>
  </div>
);

};

export default BidCard;

