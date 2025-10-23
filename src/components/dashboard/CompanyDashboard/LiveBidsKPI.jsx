import { Signal } from "lucide-react";

export default function LiveBidsKPI() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-md text-black flex justify-between items-center">
      <div>
        <p className="text-sm text-black uppercase mb-1">Live Bids</p>
        <h2 className="text-3xl font-bold">4</h2>
        <p className="text-black text-xs mt-1">↓ 5.1% from last period</p>
      </div>
      <Signal size={28} className="text-black" />
    </div>
  );
}
