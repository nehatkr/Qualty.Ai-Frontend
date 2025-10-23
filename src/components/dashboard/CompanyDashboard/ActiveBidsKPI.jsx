import { Clock } from "lucide-react";

export default function ActiveBidsKPI() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-md text-black flex justify-between items-center">
      <div>
        <p className="text-sm text-black uppercase mb-1">Active Bids</p>
        <h2 className="text-3xl font-bold">8</h2>
        <p className="text-black text-xs mt-1">↑ 1.3% from last period</p>
      </div>
      <Clock size={28} className="text-black" />
    </div>
  );
}
