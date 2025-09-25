import React from "react";
import {
  FaTachometerAlt,
  FaGavel,
  FaComments,
  FaUserShield,
  FaChartLine,
  FaHeadset,
  FaUser,
  FaHistory,
  FaMoneyBillWave,
  FaQuestionCircle,
} from "react-icons/fa";

const navItems = [
  { label: "Dashboard", icon: <FaTachometerAlt />, path: "/customer/dashboard" },
  { label: "Bidding Room", icon: <FaGavel />, path: "/bidding-room" },
  { label: "Chat with Us", icon: <FaComments />, path: "/chat" },
  { label: "Credit Profile", icon: <FaUserShield />, path: "/credit-profile" },
  { label: "Detail Analysis", icon: <FaChartLine />, path: "/analysis" },
  { label: "Live Chat", icon: <FaHeadset />, path: "/live-chat" },
  { label: "My Account", icon: <FaUser />, path: "/account" },
  { label: "My History", icon: <FaHistory />, path: "/history", active: true },
  { label: "Payments", icon: <FaMoneyBillWave />, path: "/payments" },
  { label: "Raise Enquiry", icon: <FaQuestionCircle />, path: "/enquiry" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col shadow-xl">
      {/* Profile Section */}
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-xl font-bold">Aswin</h2>
        <p className="text-sm text-gray-400">Customer</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.path}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
              item.active
                ? "bg-gray-700 text-white"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm font-medium">{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
s