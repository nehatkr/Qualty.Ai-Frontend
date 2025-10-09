export default function TotalInspectionsCard() {
  return (
    <div className="bg-white text-black rounded-xl p-5 border border-gray-200 shadow-lg transition-all duration-300">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-sm font-semibold text-gray-600">Total Inspections</h3>
          <p className="text-3xl font-bold text-black">128</p>
          <p className="text-green-600 text-sm mt-1">+12% from last month</p>
        </div>
      </div>
      <a
        href="#"
        className="text-sm text-black mt-3 inline-block font-medium hover:underline transition-all duration-200"
      >
        View Analysis →
      </a>
    </div>
  );
}
