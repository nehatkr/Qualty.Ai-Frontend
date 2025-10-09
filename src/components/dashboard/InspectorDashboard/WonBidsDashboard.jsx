import { useEffect, useState } from "react";
import { BASE_URL } from "../../../utils/constants";

export default function WonBidsDashboard() {
  const [bids, setBids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBids = async () => {
      try {
        const res = await fetch(`${BASE_URL}/inspector/won-bids`, {
          credentials: "include",
        });
        const data = await res.json();
        if (data.success) {
          setBids(data.bids);
        } else {
          setError(data.message || "Failed to load won bids");
        }
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchBids();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 px-6 py-10 text-white">
      <h2 className="text-4xl font-semibold text-center mb-10 animate-fade-in">
        🏆 Won Bids
      </h2>

      {loading ? (
        <p className="text-center text-gray-400 animate-pulse">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-400">{error}</p>
      ) : bids.length === 0 ? (
        <div className="text-center text-gray-400 animate-fade-in">
          <p className="text-lg">You haven’t won any bids yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto animate-fade-in">
          {bids.map((bid) => (
            <div
              key={bid._id}
              className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-xl p-5 shadow-md hover:shadow-[0_0_20px_#22c55e] transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold text-green-400">{bid.enquiry.location}</h3>
                <span className="text-sm text-gray-400">
                  {new Date(bid.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="text-sm text-gray-300 mb-1">
                🗓️ Inspection Date:{" "}
                <span className="text-white font-medium">
                  {new Date(bid.enquiry.inspectionDate).toLocaleDateString()}
                </span>
              </p>
              <p className="text-sm text-gray-300 mb-1">
                📦 Commodity: <span className="text-white">{bid.enquiry.commodity}</span>
              </p>
              <p className="text-sm text-gray-300 mb-1">
                🧪 Volume: <span className="text-white">{bid.enquiry.volume}</span>
              </p>
              <p className="text-sm text-gray-300 mb-1">
                📞 Contact: <span className="text-white">{bid.enquiry.contact}</span>
              </p>
              <p className="text-sm text-gray-300 mb-1">
                📌 Status: <span className="text-blue-400">{bid.enquiry.status}</span>
              </p>
              <p className="text-sm text-gray-300">
                💰 Bid Amount: ₹{bid.amount} | Customer View: ₹{bid.customerViewAmount}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
