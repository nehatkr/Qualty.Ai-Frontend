import { Link } from "react-router-dom";

export default function QuickServicesSection() {
  return (
    <div className="bg-black text-white rounded-2xl p-6 shadow-md border border-gray-200 transition-all duration-300 hover:shadow-lg">
      <h2 className="text-3xl text-start font-bold mb-4 tracking-wide text-white bg-clip-text bg-gradient-to-r from-black via-gray-800 to-black animate-fade-in">
        ⚡Quick Services
      </h2>
      <p className="text-md text-start text-gray-200 mb-6 leading-relaxed">
        Submit a fast inspection request and get matched instantly with verified inspectors. Speed meets precision.
      </p>

      <div className="flex flex-wrap gap-4">
        <Link
          to="/quickInspection"
          className="bg-white hover:bg-gray-700 text-black hover:text-white px-6 py-2 rounded-lg text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]"
        >
          Start Quick Inspection
        </Link>
        <Link
          to="/customer/quick-requests"
          className="bg-gray-100 hover:bg-gray-200 text-black px-6 py-2 rounded-lg text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]"
        >
          📂 View My Requests
        </Link>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
