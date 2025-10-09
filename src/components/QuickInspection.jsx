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
  const visibleRegions = showAll ? regionList : regionList.slice(0, 4);

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-10 py-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 animate-fade-in">
        Quick Services
      </h2>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
         Inspection Regions
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {visibleRegions.map(([regionName]) => (
            <Link
              key={regionName}
              to={`/quickInspection/${encodeURIComponent(regionName)}`}
            >
              <div className="group bg-black flex flex-col items-center shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 transform hover:scale-[1.03] cursor-pointer">
                <img
                  src={regionImages[regionName] || "/fallback.jpg"}
                  alt={regionName}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-gray-600 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.3)]"
                />
                <p className="mt-4 text-sm font-semibold text-white group-hover:text-gray-300 transition-colors duration-300 text-center">
                  {regionName}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View More / View Less Button */}
        {regionList.length > 4 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition duration-300 shadow-lg cursor-pointer"
            >
              {showAll ? "Show Less" : "View More"}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

