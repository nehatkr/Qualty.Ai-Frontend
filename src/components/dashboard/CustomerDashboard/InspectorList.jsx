import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../utils/constants";

export default function InspectorList() {
  const [inspectors, setInspectors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInspectors = async () => {
      try {
        const response = await fetch(`${BASE_URL}/customer/won-inspections`, {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        if (data.success) {
          setInspectors(data.inspectors); 
        }
      } catch (err) {
        console.error("Failed to fetch inspectors:", err);
      }
    }; 
    
    
    fetchInspectors();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-black">Chat with Inspectors</h2>
      {inspectors.length === 0 ? (
        <p className="text-gray-500">No inspectors available for chat.</p>
      ) : (
        <div className="space-y-4">
          {inspectors.map((inspector) => (
            <div
              key={inspector.id}
              className="flex justify-between items-center border border-gray-300 rounded-lg p-4 hover:shadow transition"
            >
              <div>
                <p className="text-lg font-semibold text-black">{inspector.name}</p>
                <p className="text-sm text-gray-500">Commodity: {inspector.commodity}</p>
              </div>
              <button
                onClick={() => navigate(`/customer/chat/${inspector.id}`)}
                className="bg-black cursor-pointer text-white px-4 py-2 rounded hover:bg-gray-900 transition"
              >
                Chat
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
