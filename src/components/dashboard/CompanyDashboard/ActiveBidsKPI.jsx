import { Clock } from "lucide-react";

export default function ActiveBidsKPI() {
  return (
    <div className="bg-gradient-to-br from-orange-900 to-orange-950 border border-orange-800 rounded-xl p-5 shadow-md text-white flex justify-between items-center">
      <div>
        <p className="text-sm text-orange-300 uppercase mb-1">Active Bids</p>
        <h2 className="text-3xl font-bold">8</h2>
        <p className="text-green-400 text-xs mt-1">↑ 1.3% from last period</p>
      </div>
      <Clock size={28} className="text-orange-300" />
    </div>
  );
}
