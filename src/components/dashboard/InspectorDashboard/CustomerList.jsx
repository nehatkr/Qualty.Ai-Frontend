import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../utils/constants";

export default function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch(`${BASE_URL}/inspector/confirmed-customers`, {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();        
        if (data.success) {
          setCustomers(data.customers);
        }
      } catch (err) {
        console.error("Failed to fetch customers:", err);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-black">Chat with Customers</h2>
      {customers.length === 0 ? (
        <p className="text-gray-500">No customers available for chat.</p>
      ) : (
        <div className="space-y-4">
          {customers.map((customer) => (
            <div
              key={customer.orderId}
              className="flex justify-between items-center border border-gray-300 rounded-lg p-4 hover:shadow transition"
            >
              <div>
                <p className="text-lg font-semibold text-black">{customer.name}</p>
                <p className="text-sm text-gray-500">Commodity: {customer.commodity}</p>
                <p className="text-sm text-gray-500">Order ID: {customer.orderId}</p>
              </div>
              <button
                onClick={() => navigate(`/inspector/chat/${customer.id}/${customer.orderId}`)}
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
