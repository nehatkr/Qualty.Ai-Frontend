import { Signal } from "lucide-react";

export default function LiveBidsKPI() {
  return (
    <div className="bg-gradient-to-br from-purple-900 to-violet-950 border border-purple-800 rounded-xl p-5 shadow-md text-white flex justify-between items-center">
      <div>
        <p className="text-sm text-purple-300 uppercase mb-1">Live Bids</p>
        <h2 className="text-3xl font-bold">4</h2>
        <p className="text-red-400 text-xs mt-1">↓ 5.1% from last period</p>
      </div>
      <Signal size={28} className="text-purple-300" />
    </div>
  );
}
