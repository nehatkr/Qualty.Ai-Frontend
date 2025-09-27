import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEnquiries } from "../../../redux/slice/enquirySlice";
import {BASE_URL} from '../../../utils/constants'

const InspectorBidRoom = () => {
  const dispatch = useDispatch()

  useEffect(() => {
      const loadEnquiries = async () => {
        try {
          const response = await fetch(`${BASE_URL}/inspector/enquiries`, {
            method: "GET",
            credentials: "include",
          });
          const data = await response.json();
          dispatch(addEnquiries(data.enquiries))
          console.log("fetchDataEnq", data);
        } catch (err) {
          console.error(err);
        }
      };
      loadEnquiries();
    }, []);

  const enquiries = useSelector((state) => state.enquiry.raisedEnquiry);

  return (
    <div className="min-h-screen bg-gray-950 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">All Live Enquiries</h1>
        <p className="text-gray-400 mb-8">
          Total Enquiries: <span className="text-blue-400 font-semibold">{enquiries.length}</span>
        </p>

        {enquiries.length === 0 ? (
          <p className="text-gray-500 text-center">No live enquiries available</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enquiries.map((enquiry) => (
              <div
                key={enquiry._id}
                className="bg-gray-900 border border-gray-700 rounded-xl p-5 shadow-lg hover:shadow-blue-500/50 transition-shadow"
              >
                <h2 className="text-xl font-bold text-white mb-2">{enquiry.commodityCategory}</h2>
                <p className="text-sm text-gray-400 mb-1">Sub-Commodity: <span className="text-gray-100 font-semibold">{enquiry.subCommodity}</span></p>
                <p className="text-sm text-gray-400 mb-1">Location: <span className="text-gray-100 font-semibold">{enquiry.inspectionLocation}</span></p>
                <p className="text-sm text-gray-400 mb-1">
                  Urgency:{" "}
                  <span
                    className={`font-semibold ${
                      enquiry.urgencyLevel === "High"
                        ? "text-red-500"
                        : enquiry.urgencyLevel === "Medium"
                        ? "text-yellow-400"
                        : "text-green-400"
                    }`}
                  >
                  {enquiry.urgencyLevel}
                  </span>
                </p>
                <p className="text-sm text-gray-400 mb-1">
                  Budget: <span className="text-green-400 font-semibold">₹ {enquiry.inspectionBudget}</span>
                </p>
                <p className="text-sm text-gray-400 mb-1">
                  Volume: <span className="text-gray-100 font-semibold">{enquiry.volume} |</span> Dates:{" "}
                  <span className="text-gray-100 font-semibold">{new Date(enquiry.inspectionDate.from).toLocaleDateString()} -{" "}
                  {new Date(enquiry.inspectionDate.to).toLocaleDateString()}</span>
                  
                </p>
                <p className="text-sm text-gray-400 mb-1">
                  Types:{" "}
                  {enquiry.inspectionTypes.physical && <span>Physical </span>}
                  {enquiry.inspectionTypes.chemical && <span>Chemical</span>}
                </p>
                <p className="text-sm text-gray-400 mb-1">
                  Contact: {enquiry.contact.email}, {enquiry.contact.phoneNumber}
                </p>
                {enquiry.additionalServices?.length > 0 && (
                  <p className="text-sm text-gray-400 mb-1">
                    Services: {enquiry.additionalServices.join(", ")}
                  </p>
                )}
                {enquiry.certifications?.length > 0 && (
                  <p className="text-sm text-gray-400 mb-1">
                    Certifications: {enquiry.certifications.join(", ")}
                  </p>
                )}
                {enquiry.description && (
                  <p className="text-sm text-gray-400 mb-2">Note: {enquiry.description}</p>
                )}

                {/* Bid Input */}
                <div className="mt-4 flex gap-2">
                  <input
                    type="number"
                    placeholder="Enter bid amount"
                    className="bg-gray-800 text-white px-3 py-2 rounded w-full outline-none border border-gray-600"
                  />
                  <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white font-semibold cursor-pointer">
                    Bid
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InspectorBidRoom;