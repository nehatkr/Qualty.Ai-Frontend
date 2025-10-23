import { Pencil } from "lucide-react";

export default function CompletedBidsCard() {
  return (
    <div className="bg-white border rounded-xl p-5 shadow-md text-black flex items-center justify-between">
      <div>
        <p className="text-sm text-black uppercase mb-1">Completed</p>
        <h2 className="text-3xl font-bold">2</h2>
      </div>
      <Pencil size={24} className="text-black" />
    </div>
  );
}
