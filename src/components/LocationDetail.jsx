import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LocationDetail = () => {
  const { regionName } = useParams();
  const decodedRegion = decodeURIComponent(regionName);
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user?.user);
  const locationData = useSelector((state) => state.location?.data);
  const regionData = locationData?.[decodedRegion];

  const handleConfirmClick = (payload) => {
    if (user) {
      navigate("/quickInspection/form", { state: payload });
    } else {
      navigate("/login", {
        state: { redirectTo: "/quickInspection/form", payload },
      });
    }
  };

  if (!regionData) {
    return (
      <div className="flex items-center justify-center h-screen bg-white text-black">
        <p className="text-lg text-gray-500">
          No data found for{" "}
          <span className="text-black font-medium">{decodedRegion}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white border border-gray-300 rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-500 hover:text-black mb-6 transition-colors cursor-pointer"
        >
          ← Back to Regions
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 border-b border-gray-200 pb-4">
          {decodedRegion} Locations
        </h2>

        <div className="space-y-6">
          {regionData.map((loc, index) => (
            <div
            key={loc.location || index}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 bg-white border border-gray-300 rounded-xl px-4 py-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-black">
                  {loc.location}
                </h3>
                <p className="text-sm text-gray-500">Estimated Rate</p>
                <p className="text-lg sm:text-xl font-normal text-black">
                  ₹{loc.price}
                </p>
              </div>
              <button
                onClick={() =>
                  handleConfirmClick({
                    location: loc.location,
                    rate: loc.price,
                    type: "domestic",
                  })
                }
                className="px-5 py-2 cursor-pointer bg-black text-white font-semibold rounded-full shadow hover:bg-gray-900 transition duration-300 text-sm"
              >
                Confirm
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationDetail;
