import { Zap } from "lucide-react";

export default function LiveBidsCard() {
  return (
    <div className="bg-gradient-to-br from-yellow-900 to-yellow-950 border border-yellow-800 rounded-xl p-5 shadow-md text-white flex items-center justify-between">
      <div>
        <p className="text-sm text-yellow-300 uppercase mb-1">Live Bids</p>
        <h2 className="text-3xl font-bold">1</h2>
      </div>
      <Zap size={24} className="text-yellow-300" />
    </div>
  );
}
