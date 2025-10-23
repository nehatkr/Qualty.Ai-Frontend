import { DollarSign } from "lucide-react";

export default function RevenueEarnedKPI() {
  return (
    <div className="bg-white border rounded-xl p-5 shadow-md text-black flex justify-between items-center">
      <div>
        <p className="text-sm text-black uppercase mb-1">Revenue Earned</p>
        <h2 className="text-3xl font-bold">$18,500</h2>
        <p className="text-black text-xs mt-1">↑ 8.3% from last period</p>
      </div>
      <DollarSign size={28} className="text-black" />
    </div>
  );
}
