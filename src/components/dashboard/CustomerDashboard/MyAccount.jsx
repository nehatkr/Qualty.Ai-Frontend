import React, { useState } from "react";
import { User, Mail, Phone, MapPin, FileText } from "lucide-react";
import { BASE_URL } from "../../../utils/constants";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const MyAccount = () => {
  const [tradeLicenseFile, setTradeLicenseFile] = useState(null);
  const [importExportFile, setImportExportFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const user = useSelector((store) => store?.user?.user);
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 mx-auto mb-4 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
          <div className="text-gray-600 text-sm">Loading profile...</div>
        </div>
      </div>
    );
  }

  const { name, email, mobileNumber, address, profilePhoto, documents } = user;

  const handleUpload = async () => {
    if (!tradeLicenseFile && !importExportFile) return;

    const formData = new FormData();
    if (tradeLicenseFile) formData.append("tradeLicense", tradeLicenseFile);
    if (importExportFile) formData.append("importExportCertificate", importExportFile);

    try {
      setUploading(true);
      const response = await fetch(`${BASE_URL}/customer/profile/updateDocuments`, {
        method: "PATCH",
        credentials: "include",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        toast.success(data.message);
      }
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4 text-black">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-1 bg-gradient-to-r from-black via-gray-800 to-black text-transparent bg-clip-text">
            My Account
          </h2>
          <p className="text-sm text-gray-500">Manage your profile information</p>
        </div>

        {/* Profile Info */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Profile Photo */}
            <div className="flex flex-col items-center space-y-2">
              {profilePhoto ? (
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover border border-black"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 border border-gray-300">
                  <User size={32} />
                </div>
              )}
              <p className="text-xs text-gray-500">Profile Photo</p>
            </div>

            {/* Info Fields */}
            <div className="space-y-3">
              <InfoBlock icon={<User size={16} />} label="Name" value={name} />
              <InfoBlock icon={<Mail size={16} />} label="Email" value={email} />
              <InfoBlock icon={<Phone size={16} />} label="Phone" value={mobileNumber} />
              <InfoBlock icon={<MapPin size={16} />} label="Address" value={address} multiline />
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <FileText size={20} />
            <h3 className="text-lg font-semibold">Certificates</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CertificateBlock
              label="Trade License"
              fileUrl={documents?.tradeLicense}
              onFileChange={(file) => setTradeLicenseFile(file)}
            />
            <CertificateBlock
              label="Import/Export Certificate"
              fileUrl={documents?.importExportCertificate}
              onFileChange={(file) => setImportExportFile(file)}
            />
          </div>

          <div className="mt-4 text-center">
            <button
              onClick={handleUpload}
              disabled={uploading}
              className="px-4 py-1 text-sm bg-black cursor-pointer text-white rounded hover:bg-gray-900 transition disabled:opacity-50"
            >
              {uploading ? "Uploading..." : "Update Certificates"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Compact Info Block
const InfoBlock = ({ icon, label, value, multiline }) => (
  <div className="bg-gray-50 rounded border border-gray-200 px-3 py-2 text-sm">
    <div className="flex items-center gap-2 mb-1 text-gray-600">
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </div>
    <p className={`text-black ml-6 ${multiline ? "whitespace-pre-line leading-snug" : ""}`}>
      {value}
    </p>
  </div>
);

// Certificate Block with PDF support
const CertificateBlock = ({ label, fileUrl, onFileChange }) => {
  const isPDF = fileUrl?.toLowerCase().endsWith(".pdf");

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="bg-gray-50 border border-gray-200 rounded overflow-hidden h-40 flex items-center justify-center">
        {fileUrl ? (
          isPDF ? (
            <iframe src={fileUrl} title={label} className="w-full h-full" />
          ) : (
            <img src={fileUrl} alt={label} className="max-h-full max-w-full object-contain" />
          )
        ) : (
          <div className="text-gray-400 text-xs text-center">
            <FileText size={32} className="mx-auto mb-1" />
            No {label.toLowerCase()} uploaded
          </div>
        )}
      </div>
      <input
        type="file"
        accept="image/*,application/pdf"
        onChange={(e) => onFileChange(e.target.files[0])}
        className="mt-2 text-xs text-gray-600 file:bg-black file:text-white file:px-3 file:py-1 file:rounded file:border-none file:cursor-pointer"
      />
    </div>
  );
};

export default MyAccount;
