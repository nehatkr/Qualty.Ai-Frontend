import { Eye } from "lucide-react";

export default function ActiveBidsCard() {
  return (
    <div className="bg-gradient-to-br from-green-900 to-green-950 border border-green-800 rounded-xl p-5 shadow-md text-white flex items-center justify-between">
      <div>
        <p className="text-sm text-green-300 uppercase mb-1">Active Bids</p>
        <h2 className="text-3xl font-bold">2</h2>
      </div>
      <Eye size={24} className="text-green-300" />
    </div>
  );
}
