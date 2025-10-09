export default function TotalValueCard() {
  return (
    <div className="bg-white text-black rounded-xl shadow-lg p-5 border border-gray-200  transition-all duration-300">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-sm font-semibold text-gray-600">Total Value</h3>
          <p className="text-3xl font-bold text-black flex items-center gap-2">
            245,000/-
          </p>
          <p className="text-green-600 text-sm mt-1">+8% revenue growth</p>
        </div>
      </div>
      <a
        href="#"
        className="text-sm text-black mt-3 inline-block font-medium hover:underline transition-all duration-200"
      >
        View Payments →
      </a>
    </div>
  );
}
