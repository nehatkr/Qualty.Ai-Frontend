import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../../utils/constants";
import { setProgressMap } from "../../../redux/slice/inspectionProgressSlice";

export default function InspectorList() {
  const [inspectors, setInspectors] = useState([]);
  const progressMap = useSelector((state) => state.inspectionProgress);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
          const orderIds = data.inspectors.map((i) => i.orderId);
          const progressRes = await fetch(
            `${BASE_URL}/chat/progress-multiple`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ orderIds }),
            }
          );
          const progressData = await progressRes.json();
          if (progressData.success) {
            dispatch(setProgressMap(progressData.progressMap));
          }
        }
      } catch (err) {
        console.error("Failed to fetch inspectors:", err);
      }
    };

    fetchInspectors();
  }, []);

  const getStatusLabel = (level) => {
    if (level >= 4) return "Completed";
    if (level >= 1) return "In Progress";
    return "Not Started";
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-black">
        Chat with Inspectors
      </h2>
      {inspectors.length === 0 ? (
        <p className="text-gray-500">No inspectors available for chat.</p>
      ) : (
        <div className="space-y-4">
          {inspectors.map((entry, index) => {
            const status = getStatusLabel(progressMap[entry.orderId] || 0);
            return (
              <div
                key={`${entry.id}-${entry.orderId}-${index}`}
                className="flex justify-between items-center border border-gray-300 rounded-lg p-4 hover:shadow transition"
              >
                  <p className="text-sm text-gray-500">Status: <span
  className={`px-2 py-1 text-xs rounded-full ${
    status === "Completed"
      ? "bg-green-100 text-green-700"
      : status === "In Progress"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-gray-100 text-gray-500"
  }`}
>
  {status}
</span>
</p>
                <div>
                  <p className="text-lg font-semibold text-black">
                    {entry.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    Commodity: {entry.commodity}
                  </p>
                  <p className="text-sm text-gray-500">
                    Order ID: {entry.orderId}
                  </p>
                </div>
                <button
                  onClick={() =>
                    navigate(`/customer/chat/${entry.id}/${entry.orderId}`)
                  }
                  className="bg-black cursor-pointer text-white px-4 py-2 rounded hover:bg-gray-900 transition"
                >
                  Chat
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
