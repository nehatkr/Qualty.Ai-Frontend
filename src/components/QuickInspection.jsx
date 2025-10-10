import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetchLocation from "../hooks/useFetchLocation";
import Kolkata from "../assets/Kolkata.avif";
import Gujarat from "../assets/Gujarat.avif";
import Karnataka from "../assets/Karnataka.webp";
import Maharashtra from "../assets/Maharashtra.jpg";
import AP from "../assets/AP.webp";
import Telangana from "../assets/Telangana.jpg";
import TamilNadu from "../assets/TamilNadu.jpg";
import Chhattisgarh from "../assets/Chhattisgarh.jpg";
import UP from "../assets/UP.jpg";
import MP from "../assets/MP.webp";
import China from "../assets/China.jpg";
import Dubai from "../assets/Dubai.jpg";
import Qatar from "../assets/Qatar.jpg";
import USA from "../assets/USA.jpg";
import Vietnam from "../assets/Vietnam.jpg";

export default function QuickInspection() {
  useFetchLocation();
  const location = useSelector((state) => state.location?.data);
  const [showAll, setShowAll] = useState(false);

  const regionImages = {
    Kolkata,
    Gujarat,
    Karnataka,
    Maharashtra,
    "Andhra and Telangana": AP,
    Telangana,
    "Tamil Nadu": TamilNadu,
    Chhattisgarh,
    "Uttar Pradesh": UP,
    "Madhya Pradesh": MP,
    China,
    Dubai,
    Qatar,
    USA,
    Vietnam,
  };

  const regionList = location ? Object.entries(location) : [];
  const visibleRegions = showAll ? regionList : regionList.slice(0, 5);

  return (
    <div className=" text-white px-4 sm:px-6 lg:px-10 py-5">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          Quick Services
        </h2>

        <div className="bg-gradient-to-br from-black via-black to-gray-900 border border-gray-900 rounded-2xl p-6 shadow-[inset_0_0_0.5px_rgba(255,255,255,0.1)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6  border-gray-900 pb-2 text-start">
            Inspection Regions
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
  {visibleRegions.map(([regionName]) => (
    <Link key={regionName} to={`/quickInspection/${encodeURIComponent(regionName)}`}>
      <div className="group bg-gradient-to-br from-black via-black to-gray-900 border border-gray-900 rounded-xl p-4 flex flex-col items-center shadow-[inset_0_0_0.5px_rgba(255,255,255,0.1)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-[1.03] cursor-pointer">
        <img
          src={regionImages[regionName] || "/fallback.jpg"}
          alt={regionName}
          className="w-20  sm:w-24 aspect-square rounded-full object-cover border-2 border-gray-600 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.3)]"
        />
        <p className="mt-4 text-xs sm:text-sm font-semibold text-white group-hover:text-gray-300 transition-colors duration-300 text-center">
          {regionName}
        </p>
      </div>
    </Link>
  ))}
</div>


          {regionList.length > 4 && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-3 py-2 sm:px-5 sm:py-3 mb-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                {showAll ? "Show Less" : "View More"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
