import { Eye, Search } from "lucide-react";
import { useState } from "react";

export default function BidHistory() {
  const allBids = [
    {
      id: "SAMPLE-001",
      title: "Residential Property Inspection",
      client: "John Smith",
      location: "New York, NY",
      quote: "$450",
      myBid: "$420",
      status: "Active",
      date: "2024-01-15",
    },
    {
      id: "SAMPLE-002",
      title: "Warehouse Safety Audit",
      client: "Jane Doe",
      location: "Chicago, IL",
      quote: "$600",
      myBid: "$580",
      status: "Completed",
      date: "2024-02-10",
    },
    // Add more bids here
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredBids = allBids.filter((bid) =>
    `${bid.title} ${bid.client} ${bid.location}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-xl p-6 shadow-xl w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-xl font-semibold text-white">Bid History</h2>
        <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 w-full md:w-64">
          <Search size={16} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search bids..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
          />
        </div>
      </div>

      {/* Bid Count */}
      <p className="text-sm text-gray-400 mb-4">
        Showing {filteredBids.length} of {allBids.length} bids
      </p>

      {/* Bid Cards */}
      <div className="space-y-4">
        {filteredBids.map((bid) => (
          <div
            key={bid.id}
            className="bg-gray-800/60 border border-gray-700 rounded-lg p-5 shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          >
            {/* Left Section */}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white">{bid.title}</h3>
              <p className="text-sm text-gray-400">Client: {bid.client}</p>
              <p className="text-sm text-gray-400">Location: {bid.location}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm text-gray-300">
                <div>
                  <p className="font-medium">Quote</p>
                  <p className="text-green-400 font-semibold">{bid.quote}</p>
                </div>
                <div>
                  <p className="font-medium">My Bid</p>
                  <p className="text-blue-400 font-semibold">{bid.myBid}</p>
                </div>
                <div>
                  <p className="font-medium">Status</p>
                  <span className="inline-block bg-blue-700 text-white text-xs px-2 py-1 rounded-full mt-1">
                    {bid.status}
                  </span>
                </div>
                <div>
                  <p className="font-medium">Date</p>
                  <p className="text-white mt-1">{bid.date}</p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div>
              <button className="flex items-center gap-2 bg-blue-800 hover:bg-blue-700 text-white text-xs px-4 py-2 rounded-lg transition">
                <Eye size={16} />
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
