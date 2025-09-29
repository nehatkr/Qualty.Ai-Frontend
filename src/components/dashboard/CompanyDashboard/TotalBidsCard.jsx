import { RotateCcw } from "lucide-react";

export default function TotalBidsCard() {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-950 border border-blue-800 rounded-xl p-5 shadow-md text-white flex items-center justify-between">
      <div>
        <p className="text-sm text-blue-300 uppercase mb-1">Total Bids</p>
        <h2 className="text-3xl font-bold">6</h2>
      </div>
      <RotateCcw size={24} className="text-blue-300" />
    </div>
  );
}
