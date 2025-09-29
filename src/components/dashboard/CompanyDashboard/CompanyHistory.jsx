import TotalBidsCard from "./TotalBidsCard";
import ActiveBidsCard from "./ActiveBidsCard";
import LiveBidsCard from "./LiveBidsCard";
import CompletedBidsCard from "./CompletedBidsCard";

export default function CompanyHistory() {
  return (
    <div className="grid grid-cols-1 rounded-lg sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-black">
      <TotalBidsCard />
      <ActiveBidsCard />
      <LiveBidsCard />
      <CompletedBidsCard />
    </div>
  );
}
