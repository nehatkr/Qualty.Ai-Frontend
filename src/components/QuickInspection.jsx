import React, { useState } from 'react';
import Kolkata from "../assets/kolkata.avif";
import Gujarat from "../assets/gujarat.avif";
import Karnataka from "../assets/karnataka.webp";
import Maharashtra from "../assets/maharashtra.jpg";
import AP from "../assets/AP.webp";
import Telangana from "../assets/telangana.jpg";
import TamilNadu from "../assets/tamilnadu.jpg";
import Chhattisgarh from "../assets/chhattisgarh.jpg";
import UP from "../assets/UP.jpg";
import MP from "../assets/MP.webp";
import China from "../assets/china.jpg";
import Dubai from "../assets/dubai.jpg";
import Qatar from "../assets/qatar.jpg";
import USA from "../assets/usa.jpg";
import Vietnam from "../assets/vietnam.jpg";
import useFetchLocation from '../hooks/useFetchLocation';
import { useUser } from '../context/userContext';
import { Link } from 'react-router-dom'



export default function QuickInspection() {

  useFetchLocation()
  const { location } = useUser()

  const [formData, setFormData] = useState({
    location: '',
    category: '',
    description: '',
    date: '',
    type: '',
    service: '',
    contact: '',
    volume: '',
  });




  const regionImages = {
    "Kolkata": Kolkata,
    "Gujarat": Gujarat,
    "Karnataka": Karnataka,
    "Maharashtra": Maharashtra,
    "Andhra & Telangana": AP,
    "Telangana": Telangana,
    "Tamil Nadu": TamilNadu,
    "Chhattisgarh": Chhattisgarh,
    "Uttar Pradesh": UP,
    "Madhya Pradesh": MP,
    "China": China,
    "Dubai": Dubai,
    "Qatar": Qatar,
    "USA": USA,
    "Vietnam": Vietnam,
  };



  return (

    <div>
      <h2 className='font-bold  p-5 rounded-2xl text-gray-300 text-center text-4xl'>Quick Services</h2>
        <section className="space-y-8 mx-50">
      <h2 className="text-2xl font-bold text-gray-300 mb-8">Domestic</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {location?.success && 
          Object.entries(location.data).map(([regionName]) => (
            <div key={regionName} className="flex flex-col items-center space-y-4">
              <Link to={`/quickInspection/${encodeURIComponent(regionName)}`}>
                <img
                  src={regionImages[regionName] || "/fallback.jpg"}
                  alt={regionName}
                  className="w-20 h-20 rounded-full cursor-pointer border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-105 object-cover"
                />
              </Link>
              <p className=" text-gray-300 font-semibold text-center">{regionName}</p>
            </div>
          ))}
      </div>
    </section>

    </div>
  );
}
