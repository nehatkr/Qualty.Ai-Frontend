import React, { useState } from "react";
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
import useFetchLocation from "../hooks/useFetchLocation";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function QuickInspection() {
  useFetchLocation();
  const location = useSelector((state) => state.location?.data);

  const [formData, setFormData] = useState({
    location: "",
    category: "",
    description: "",
    date: "",
    type: "",
    service: "",
    contact: "",
    volume: "",
  });

  const regionImages = {
    Kolkata: Kolkata,
    Gujarat: Gujarat,
    Karnataka: Karnataka,
    Maharashtra: Maharashtra,
    "Andhra and Telangana": AP,
    Telangana: Telangana,
    "Tamil Nadu": TamilNadu,
    Chhattisgarh: Chhattisgarh,
    "Uttar Pradesh": UP,
    "Madhya Pradesh": MP,
    China: China,
    Dubai: Dubai,
    Qatar: Qatar,
    USA: USA,
    Vietnam: Vietnam,
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-10 py-10">
      <h2 className="text-4xl font-extrabold text-center mb-12 animate-fade-in">
         Quick Services
      </h2>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
          Domestic Regions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {location &&
            Object.entries(location).map(([regionName]) => (
              <Link
                key={regionName}
                to={`/quickInspection/${encodeURIComponent(regionName)}`}
              >
                <div className="group bg-black border border-gray-800 rounded-t-full p-5 flex flex-col items-center shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 transform hover:scale-[1.03]">
                  <img
                    src={regionImages[regionName] || "/fallback.jpg"}
                    alt={regionName}
                    className="w-50 h-50 sm:w-30 sm:h-30 rounded-full object-cover border-2 border-gray-600 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.3)]"
                  />
                  <p className="mt-4 text-sm font-semibold text-white group-hover:text-gray-300 transition-colors duration-300 text-center">
                    {regionName}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
