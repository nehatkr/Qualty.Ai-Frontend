import { Link } from "react-router-dom";
import useFetchLocation from "../hooks/useFetchLocation";
import { useUser } from "../context/userContext";

const QuickInspectionLocation = () => {
  useFetchLocation();
  const { location } = useUser();

  const flattenedLocations = location?.data
    ? Object.values(location.data).flat()
    : [];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-6 sm:p-8 rounded-2xl shadow-[inset_0_0_0.5px_rgba(255,255,255,0.1)] backdrop-blur-md max-w-xl mx-auto space-y-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">
        Select Your Inspection Location
      </h2>

      {flattenedLocations.length > 0 ? (
        flattenedLocations.map((city, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border border-gray-700 rounded-xl px-4 py-4 shadow-[inset_0_0_0.5px_rgba(255,255,255,0.05)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <div>
              <p className="text-base sm:text-lg font-semibold text-white">
                {city.location}
              </p>
              <p className="text-sm text-gray-400">₹{city.price}</p>
            </div>
            <Link
              to="/quickInspection/form" 
              state={city}
              className="px-4 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition duration-300 shadow hover:shadow-lg"
            >
              Confirm
            </Link>
          </div>
        ))
      ) : (
        <p className="text-gray-400 text-center">Loading locations...</p>
      )}
    </div>
  );
};

export default QuickInspectionLocation;
