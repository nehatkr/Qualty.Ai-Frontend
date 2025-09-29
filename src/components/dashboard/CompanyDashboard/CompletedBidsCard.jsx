import { Pencil } from "lucide-react";

export default function CompletedBidsCard() {
  return (
    <div className="bg-gradient-to-br from-purple-900 to-purple-950 border border-purple-800 rounded-xl p-5 shadow-md text-white flex items-center justify-between">
      <div>
        <p className="text-sm text-purple-300 uppercase mb-1">Completed</p>
        <h2 className="text-3xl font-bold">2</h2>
      </div>
      <Pencil size={24} className="text-purple-300" />
    </div>
  );
}
