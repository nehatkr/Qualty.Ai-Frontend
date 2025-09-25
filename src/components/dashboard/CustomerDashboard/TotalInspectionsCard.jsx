export default function TotalInspectionsCard() {
  return (
    <div className="bg-black rounded-lg shadow-md p-4 text-gray-300">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-sm font-semibold text-gray-400">Total Inspections</h3>
          <p className="text-3xl font-bold">128</p>
          <p className="text-green-600 text-sm mt-1">+12% from last month</p>
        </div>
      </div>
      <a href="#" className="text-blue-600 text-sm mt-2 inline-block">View Analysis →</a>
    </div>
  );
}


