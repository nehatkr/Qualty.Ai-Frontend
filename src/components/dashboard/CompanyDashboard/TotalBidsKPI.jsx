import { BarChart2 } from "lucide-react";

export default function TotalBidsKPI() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-md text-black flex justify-between items-center">
      <div>
        <p className="text-sm text-black uppercase mb-1">Total Bids</p>
        <h2 className="text-3xl font-bold">156</h2>
        <p className="text-black text-xs mt-1">↑ 5.2% from last period</p>
      </div>
      <BarChart2 size={28} className="text-black" />
    </div>
  );
}
