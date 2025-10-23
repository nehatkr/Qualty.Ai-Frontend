import { RotateCcw } from "lucide-react";

export default function TotalBidsCard() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-md text-black flex items-center justify-between">
      <div>
        <p className="text-sm text-black uppercase mb-1">Total Bids</p>
        <h2 className="text-3xl font-bold">6</h2>
      </div>
      <RotateCcw size={24} className="text-black" />
    </div>
  );
}
