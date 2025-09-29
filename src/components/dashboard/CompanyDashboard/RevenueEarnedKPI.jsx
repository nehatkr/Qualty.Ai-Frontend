import { DollarSign } from "lucide-react";

export default function RevenueEarnedKPI() {
  return (
    <div className="bg-gradient-to-br from-green-900 to-emerald-950 border border-green-800 rounded-xl p-5 shadow-md text-white flex justify-between items-center">
      <div>
        <p className="text-sm text-green-300 uppercase mb-1">Revenue Earned</p>
        <h2 className="text-3xl font-bold">$18,500</h2>
        <p className="text-green-400 text-xs mt-1">↑ 8.3% from last period</p>
      </div>
      <DollarSign size={28} className="text-green-300" />
    </div>
  );
}
