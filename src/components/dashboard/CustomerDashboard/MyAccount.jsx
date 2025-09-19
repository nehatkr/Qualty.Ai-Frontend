import React from "react";
import { User, Mail, Phone, MapPin, FileText, Camera } from "lucide-react";
import { useUser } from "../../../context/userContext";

const Account = () => {
  const { user } = useUser();

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          <div className="text-slate-300 text-lg">Loading profile...</div>
        </div>
      </div>
    );
  }

  const { name, email, mobileNumber, address, profilePhoto, documents } = user;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Account
          </h2>
          <p className="text-slate-400">Manage your profile information</p>
        </div>

        {/* Main Profile Card */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 mb-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Profile Photo */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative group">
                {profilePhoto ? (
                  <img
                    src={profilePhoto}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-xl transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center text-slate-400 border-4 border-slate-500 shadow-xl group-hover:shadow-blue-500/20 transition-all duration-300">
                    <Camera size={48} />
                  </div>
                )}
              </div>
              <p className="text-sm text-slate-400 font-medium">Profile Photo</p>
            </div>

            {/* Basic Info */}
            <div className="space-y-6">
              <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30 hover:border-blue-500/50 transition-all duration-200">
                <div className="flex items-center space-x-3 mb-2">
                  <User className="text-blue-400" size={20} />
                  <label className="block text-sm text-slate-400 font-medium">Name</label>
                </div>
                <p className="text-white font-semibold text-lg ml-8">{name}</p>
              </div>

              <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30 hover:border-green-500/50 transition-all duration-200">
                <div className="flex items-center space-x-3 mb-2">
                  <Mail className="text-green-400" size={20} />
                  <label className="block text-sm text-slate-400 font-medium">Email</label>
                </div>
                <p className="text-white font-semibold text-lg ml-8 break-all">{email}</p>
              </div>

              <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30 hover:border-purple-500/50 transition-all duration-200">
                <div className="flex items-center space-x-3 mb-2">
                  <Phone className="text-purple-400" size={20} />
                  <label className="block text-sm text-slate-400 font-medium">Phone Number</label>
                </div>
                <p className="text-white font-semibold text-lg ml-8">{mobileNumber}</p>
              </div>

              <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30 hover:border-orange-500/50 transition-all duration-200">
                <div className="flex items-center space-x-3 mb-2">
                  <MapPin className="text-orange-400" size={20} />
                  <label className="block text-sm text-slate-400 font-medium">Address</label>
                </div>
                <p className="text-white font-semibold text-lg ml-8 whitespace-pre-line leading-relaxed">{address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center space-x-3 mb-8">
            <FileText className="text-blue-400" size={28} />
            <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Certificates
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group">
              <label className="block text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <FileText className="text-blue-400" size={20} />
                <span>Trade License</span>
              </label>
              <div className="bg-slate-700/30 rounded-xl border border-slate-600/30 overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                {documents?.tradeLicense ? (
                  <img
                    src={documents.tradeLicense}
                    alt="Trade License"
                    className="w-full h-64 object-contain hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="h-64 flex flex-col items-center justify-center text-slate-500 space-y-3">
                    <FileText size={48} className="text-slate-600" />
                    <p className="font-medium">No trade license uploaded</p>
                  </div>
                )}
              </div>
            </div>

            <div className="group">
              <label className="block text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <FileText className="text-green-400" size={20} />
                <span>Import/Export Certificate</span>
              </label>
              <div className="bg-slate-700/30 rounded-xl border border-slate-600/30 overflow-hidden hover:border-green-500/50 transition-all duration-300">
                {documents?.importExportCertificate ? (
                  <img
                    src={documents.importExportCertificate}
                    alt="Import/Export Certificate"
                    className="w-full h-64 object-contain hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="h-64 flex flex-col items-center justify-center text-slate-500 space-y-3">
                    <FileText size={48} className="text-slate-600" />
                    <p className="font-medium">No import/export certificate uploaded</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;