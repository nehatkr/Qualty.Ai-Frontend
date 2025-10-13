import { useState } from "react";
import { User, Mail, Phone, MapPin, Upload, CreditCard, FileUp } from "lucide-react";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../../utils/constants";
import { toast } from "react-toastify";

export default function InspectorMyAccount() {
  const user = useSelector((store) => store?.user.user);
  const [aadhaarUrl, setAadhaarUrl] = useState(user?.identityDocuments?.aadhaarCard || null);
  const [billingForm, setBillingForm] = useState({
    accountNumber: "",
    bankName: "",
    ifscCode: "",
  });
  const [billingPreview, setBillingPreview] = useState(user?.billingDetails || {});

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
      if (result?.inspector?.identityDocuments?.aadhaarCard) {
        setAadhaarUrl(result.inspector.identityDocuments.aadhaarCard);
        toast.success("Aadhaar card uploaded successfully!");
      } else {
        toast.error(result.message || "Upload failed");
      }
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("Something went wrong");
    }
  };

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBillingSubmit = async () => {
     const { accountNumber, bankName, ifscCode } = billingForm;

  if (!accountNumber.trim() && !bankName.trim() && !ifscCode.trim()) {
    toast.error("Please fill in at least one billing field before submitting.");
    return;
  }
    const formData = new FormData();
    formData.append("accountNumber", billingForm.accountNumber);
    formData.append("bankName", billingForm.bankName);
    formData.append("ifscCode", billingForm.ifscCode);

    try {
      const response = await fetch(`${BASE_URL}/inspector/profile/updateDocuments`, {
        method: "PATCH",
        credentials: "include",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Billing details updated!");
        setBillingPreview(result.inspector.billingDetails);
        setBillingForm({ accountNumber: "", bankName: "", ifscCode: "" });
      } else {
        toast.error(result.message || "Update failed");
      }
    } catch (error) {
      console.error("Billing update failed:", error);
      toast.error("Something went wrong");
    }
  };

  const InfoRow = ({ icon: Icon, label, value }) => (
    <div className="flex items-center justify-between px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-all duration-200">
      <div className="flex items-center gap-2">
        <Icon size={16} className="text-gray-500" />
        <span className="text-sm text-gray-600">{label}</span>
      </div>
      <span className="text-sm text-black font-medium">{value}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-black">My Account</h1>
          <p className="text-sm text-gray-500">Manage your profile and billing info</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 space-y-6">
          {/* Profile */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
              <User size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-black">{user.name}</h2>
              <p className="text-xs text-gray-500">Inspector</p>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-2">
            <InfoRow icon={Mail} label="Email" value={user.email} />
            <InfoRow icon={Phone} label="Phone" value={user.mobileNumber} />
            <InfoRow icon={MapPin} label="Address" value={user.address || "—"} />
          </div>

          {/* Aadhaar Upload */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-black mb-2">
              <FileUp size={16} className="text-gray-500" />
              Aadhaar Upload
            </h3>
            <label className="flex items-center justify-center gap-2 px-3 py-2 border border-dashed border-gray-300 rounded-md hover:border-black cursor-pointer group">
              <Upload size={16} className="text-gray-500 group-hover:text-black" />
              <span className="text-sm text-gray-500 group-hover:text-black">Choose File</span>
              <input
                type="file"
                className="hidden"
                onChange={handleFileUpload}
                accept="image/*,application/pdf"
              />
            </label>
            {aadhaarUrl && (
              <div className="mt-3 text-center">
                <p className="text-xs text-gray-500 mb-1">Uploaded Aadhaar:</p>
                <img
                  src={aadhaarUrl}
                  alt="Aadhaar Card"
                  className="max-w-[200px] mx-auto rounded border border-gray-300"
                />
              </div>
            )}
          </div>

          {/* Billing Preview */}
          <div className="bg-gray-50 rounded-md p-4">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-black mb-2">
              <CreditCard size={16} className="text-gray-500" />
              Billing Details
            </h3>
            <div className="space-y-2">
              <InfoRow icon={() => <div className="w-3 h-3 bg-gray-400 rounded-full" />} label="Account" value={billingPreview.accountNumber || "—"} />
              <InfoRow icon={() => <div className="w-3 h-3 bg-gray-500 rounded-full" />} label="Bank" value={billingPreview.bankName || "—"} />
              <InfoRow icon={() => <div className="w-3 h-3 bg-gray-600 rounded-full" />} label="IFSC" value={billingPreview.ifscCode || "—"} />
            </div>
          </div>

          {/* Billing Form */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-2">Update Billing Info</h3>
            <div className="space-y-3">
              <input
                type="text"
                name="accountNumber"
                value={billingForm.accountNumber}
                onChange={handleBillingChange}
                placeholder="Account Number"
                className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black"
              />
              <input
                type="text"
                name="bankName"
                value={billingForm.bankName}
                onChange={handleBillingChange}
                placeholder="Bank Name"
                className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black"
              />
              <input
                type="text"
                name="ifscCode"
                value={billingForm.ifscCode}
                onChange={handleBillingChange}
                placeholder="IFSC Code"
                className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black"
              />
              <button
                type="button"
                onClick={handleBillingSubmit}
                className="w-full cursor-pointer hover:bg-gray-700 bg-black py-2 px-4 rounded text-white text-sm font-medium transition-all duration-200 shadow hover:shadow-md"
              >
                Upload Billing Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
