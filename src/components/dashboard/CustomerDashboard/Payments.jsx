import { useEffect, useState } from "react";
import { BASE_URL } from "../../../utils/constants";
import { toast } from "react-toastify";

export default function CustomerPaymentHistoryPage() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await fetch(`${BASE_URL}/customer/payments`, {
          credentials: "include",
        });
        const data = await res.json();
        if (data.success) {
          setPayments(data.payments);
        } else {
          toast.error(data.message);
        }
      } catch (err) {
        toast.error("Failed to load payment history");
      }
    };
    fetchPayments();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black px-6 py-10">
      <div className="max-w-5xl mx-auto space-y-10 animate-fade-in">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-black mb-2">
            Payment History
          </h1>
          <p className="text-sm text-gray-600">
            Your completed transactions, beautifully displayed
          </p>
        </div>

        {/* Empty State */}
        {payments.length === 0 ? (
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center text-gray-500 shadow-sm animate-fade-in-slow">
            <p className="text-lg font-semibold mb-2">No payments found</p>
            <p className="text-sm">You haven’t completed any transactions yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {payments.map((p, index) => (
              <div
                key={p._id}
                className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-black">₹{p.amount}/-</h3>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 shadow-sm">
                    {p.status.toUpperCase()}
                  </span>
                </div>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Payment ID:</strong> {p._id}</p>
                  <p><strong>Order ID:</strong> {p.razorpayOrderId}</p>
                  <p><strong>Enquiry:</strong> {p.enquiry?.commodityCategory} — {p.enquiry?.inspectionLocation}</p>
                  <p><strong>Date:</strong> {new Date(p.updatedAt).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fade-in-slow {
          animation: fadeIn 1.2s ease-out forwards;
        }
        .animate-slide-up {
          opacity: 0;
          transform: translateY(20px);
          animation: slideUp 0.6s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
