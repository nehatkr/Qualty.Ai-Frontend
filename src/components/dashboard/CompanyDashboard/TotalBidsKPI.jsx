import { BarChart2 } from "lucide-react";

export default function TotalBidsKPI() {
  return (
    <div className="bg-gradient-to-br from-indigo-900 to-blue-950 border border-blue-800 rounded-xl p-5 shadow-md text-white flex justify-between items-center">
      <div>
        <p className="text-sm text-blue-300 uppercase mb-1">Total Bids</p>
        <h2 className="text-3xl font-bold">156</h2>
        <p className="text-green-400 text-xs mt-1">↑ 5.2% from last period</p>
      </div>
      <BarChart2 size={28} className="text-blue-300" />
    </div>
  );
}
