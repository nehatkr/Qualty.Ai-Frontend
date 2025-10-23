import { Eye } from "lucide-react";

export default function ActiveBidsCard() {
  return (
    <div className="bg-white border rounded-xl p-5 shadow-md text-black flex items-center justify-between">
      <div>
        <p className="text-sm text-black-500 uppercase mb-1">Active Bids</p>
        <h2 className="text-3xl font-bold">2</h2>
      </div>
      <Eye size={24} className="text-black" />
    </div>
  );
}
