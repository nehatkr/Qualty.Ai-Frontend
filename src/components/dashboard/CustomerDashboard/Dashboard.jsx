import TotalInspectionsCard from "./TotalInspectionsCard"
import ActiveOrdersCard from "./ActiveOrdersCard";
import CompletedTasksCard from "./CompletedTasksCard";
import TotalValueCard from "./TotalValueCard";
import QuickActions from "./QuickActions";

export default function Dashboard() {
  return (
    <div>
      <div className="flex justify-around gap-2 p-6">
        <TotalInspectionsCard />
        <ActiveOrdersCard />
        <CompletedTasksCard />
        <TotalValueCard />
      </div>
      <div>
        <QuickActions/>
      </div>
    </div>

  );
}
