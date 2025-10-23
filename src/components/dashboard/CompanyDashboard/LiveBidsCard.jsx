import { Zap } from "lucide-react";

export default function LiveBidsCard() {
  return (
    <div className="bg-white border rounded-xl p-5 shadow-md text-black flex items-center justify-between">
      <div>
        <p className="text-sm text-black uppercase mb-1">Live Bids</p>
        <h2 className="text-3xl font-bold">1</h2>
      </div>
      <Zap size={24} className="text-black" />
    </div>
  );
}
