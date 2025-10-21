import NewHeader from "./NewHeader";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    companyName: "",
    location: "",
    role: "",
    message: "",
    details: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Email validation regex
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log("Form submitted:", formData);
    alert("Your message has been sent!");
  };

  return (
    <>
      <NewHeader />
      <div className="pt-22 bg-black text-white px-8 md:px-16 pb-8 md:pb-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Ready to Start Your Quality Inspection Journey?
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
            Contact our experts today to discuss your quality inspection needs
            and discover how Quality.AI can connect you with the best global
            inspectors for your cargo.
          </p>
        </div>
      </div>

      <div className="min-h-screen bg-black text-white flex flex-col md:flex-row md:items-center p-8 md:p-16">
        {/* Left Section - Contact Information */}
        <div className="w-full md:w-1/3 space-y-8 mb-10 md:mb-0 md:pr-8">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

          <div className="space-y-6">
            <a
              href="tel:+919035462042"
              className="flex items-start gap-3 cursor-pointer transition duration-300 hover:opacity-75"
            >
              <Phone className="w-5 h-5 mt-1" />
              <div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-400 text-sm">+91 903 546 2042</p>
                </div>
              </div>
            </a>

            <a
              href="tel:+919035462042"
              className="flex items-start gap-3 cursor-pointer transition duration-300 hover:opacity-75"
            >
              <Mail className="w-5 h-5 mt-1" />
              <div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-400 text-sm">support@qualty.ai</p>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="flex items-start gap-3 cursor-pointer transition duration-300 hover:opacity-75"
            >
              <MapPin className="w-5 h-5 mt-1" />
              <div>
                <div>
                  <p className="font-medium">Office</p>
                  <p className="text-gray-400 text-sm">
                    WeWork-Vaishnavi Signature, Bellandur, Bangalore, 560103
                  </p>
                </div>
              </div>
            </a>

            <div className="flex items-start gap-3 cursor-pointer transition duration-300 hover:opacity-75">
              <Clock className="w-5 h-5 mt-1" />
              <div>
                <p className="font-medium">Hours</p>
                <p className="text-gray-400 text-sm">24/7 Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full md:w-2/3 bg-neutral-900 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm mb-1">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-black border border-gray-700 focus:outline-none focus:border-gray-400"
                  placeholder="Your full name"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-black border border-gray-700 focus:outline-none focus:border-gray-400"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm mb-1">Contact Number *</label>
                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-black border border-gray-700 focus:outline-none focus:border-gray-400"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-black border border-gray-700 focus:outline-none focus:border-gray-400"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">
                  Location of Inspection *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-black border border-gray-700 focus:outline-none focus:border-gray-400"
                  placeholder="City, Country"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">
                  Are you an Importer or Exporter? *
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-black border border-gray-700 focus:outline-none focus:border-gray-400"
                >
                  <option value="">Select your role</option>
                  <option value="Importer">Importer</option>
                  <option value="Exporter">Exporter</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-2 rounded bg-black border border-gray-700 focus:outline-none focus:border-gray-400"
                placeholder="Tell us about your inspection needs..."
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-1">Additional Details</label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                rows="3"
                className="w-full p-2 rounded bg-black border border-gray-700 focus:outline-none focus:border-gray-400"
                placeholder="Any additional info..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-white text-black py-2 rounded font-medium hover:bg-gray-200 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
