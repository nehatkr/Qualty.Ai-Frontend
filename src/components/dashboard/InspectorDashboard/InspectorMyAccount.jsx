import { useState } from "react";
import { User, Mail, Phone, MapPin, Upload, CreditCard, FileUp } from 'lucide-react';
import { useSelector } from "react-redux";
import { BASE_URL } from '../../../utils/constants';

export default function InspectorMyAccount() {
  const user = useSelector((store) => store?.user.user);
  const [aadhaarUrl, setAadhaarUrl] = useState(user?.identityDocuments?.aadhaarCard || null);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("aadhaarCard", file);

    try {
      const response = await fetch(`${BASE_URL}/inspector/profile/updateDocuments`, {
        method: "PATCH",
        credentials: "include",
        body: formData,
      });

      const result = await response.json();
      console.log("Upload success:", result);

      if (result?.inspector?.identityDocuments?.aadhaarCard) {
        setAadhaarUrl(result.inspector.identityDocuments.aadhaarCard);
      }
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  const InfoRow = ({ icon: Icon, label, value }) => (
    <div className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/60 transition-all duration-300">
      <div className="flex items-center gap-3">
        <Icon size={18} className="text-gray-400" />
        <span className="text-gray-400">{label}</span>
      </div>
      <span className="text-white font-medium">{value}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">My Account</h1>
          <p className="text-gray-400">Manage your profile information</p>
        </div>

        {/* Main Card */}
        <div className="bg-gray-900/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-gray-700/50">
          {/* Profile Photo */}
          <div className="flex items-center gap-4 mb-8 p-4 rounded-xl bg-gray-800/60">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center">
              <User size={32} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">{user.name}</h2>
              <p className="text-gray-400 text-sm">Inspector</p>
            </div>
          </div>

          {/* User Info */}
          <div className="space-y-3 mb-8">
            <InfoRow icon={Mail} label="Email" value={user.email} />
            <InfoRow icon={Phone} label="Phone" value={user.mobileNumber} />
            <InfoRow icon={MapPin} label="Address" value={user.address} />
          </div>

          {/* Update Documents Section */}
          <div className="mb-8">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
              <FileUp size={20} className="text-gray-400" />
              Update Documents
            </h3>
            <label className="flex items-center justify-center gap-3 p-4 border-2 border-dashed border-gray-700 rounded-xl hover:border-gray-500 transition-colors cursor-pointer group">
              <Upload size={20} className="text-gray-500 group-hover:text-gray-300" />
              <span className="text-gray-400 group-hover:text-gray-200">Upload Aadhaar Card</span>
              <input
                type="file"
                className="hidden"
                onChange={handleFileUpload}
                accept="image/*,application/pdf"
              />
            </label>

            {/* Aadhaar Preview */}
            {aadhaarUrl && (
              <div className="mt-4 text-center">
                <p className="text-gray-400 mb-2">Uploaded Aadhaar Card:</p>
                <img
                  src={aadhaarUrl}
                  alt="Aadhaar Card"
                  className="max-w-xs mx-auto rounded-lg border border-gray-700"
                />
              </div>
            )}
          </div>

          {/* Billing Details */}
          <div className="bg-gray-800/50 rounded-xl p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
              <CreditCard size={20} className="text-gray-400" />
              Billing Details
            </h3>
            <div className="space-y-3">
              <InfoRow icon={() => <div className="w-4 h-4 bg-gray-500 rounded-full" />} label="Account" value={user.billingDetails.accountNumber} />
              <InfoRow icon={() => <div className="w-4 h-4 bg-gray-600 rounded-full" />} label="Bank" value={user.billingDetails.bankName} />
              <InfoRow icon={() => <div className="w-4 h-4 bg-gray-400 rounded-full" />} label="IFSC" value={user.billingDetails.ifscCode} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
