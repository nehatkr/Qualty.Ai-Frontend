import React, { useState } from "react";
import NewHeader from "./NewHeader";

const SectionLayout = ({ title, children }) => (
  <section className="space-y-4 pt-4 border-t border-gray-300">
    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black">{title}</h2>
    <div className="space-y-4 text-gray-800 text-sm sm:text-base">{children}</div>
  </section>
);

const EmailModal = ({ isOpen, onClose, email }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-sm w-full text-center transition-all duration-300">
        <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">Contact Us</h3>
        <p className="text-sm sm:text-base text-gray-700 mb-6">
          For questions or concerns about your privacy, please send an email to:
        </p>
        <a
          href={`mailto:${email}`}
          className="text-sm sm:text-base font-bold text-black border-2 border-black py-2 px-4 rounded-lg block hover:bg-black hover:text-white transition duration-300 cursor-pointer"
          onClick={onClose}
        >
          {email}
        </a>
        <button
          onClick={onClose}
          className="mt-6 text-sm text-gray-600 hover:text-black transition duration-300 underline cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default function PrivacyPolicy() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const contactEmail = "support@qualty.ai";

  const handleEmailClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white text-black min-h-screen py-20 px-4 sm:px-8 lg:px-16 text-sm sm:text-base">
      <NewHeader />
      <EmailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        email={contactEmail}
      />

      <div className="max-w-4xl mx-auto p-6 sm:p-12 bg-white rounded-xl shadow-xl border border-gray-300">
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Privacy Policy</h1>
          <p className="text-sm sm:text-lg text-gray-600 mt-2">
            Personal Data Protection Policy of Qualty.ai
          </p>
        </header>

        <div className="space-y-12">
          {/* Introduction */}
          <section className="space-y-6 border-b border-gray-300 pb-8">
            <p className="leading-relaxed">
              Thank you for visiting our corporate website at{" "}
              <a
                href="http://www.qualty.ai"
                className="underline hover:text-black transition duration-300 cursor-pointer"
              >
                www.qualty.ai
              </a>
              . (“We” refers to Qualty.ai Corporation Private Limited, also referred to as “us”, or “our”). This Privacy Policy shall be referred and read as an integral part of the <strong>Terms of Use</strong> of our Website.
            </p>

            <p className="leading-relaxed">
              Your privacy is important to us, and this Policy explains how we collect and use information that personally identifies you (“personal information”) as well as non-personal information about your interaction with the Qualty.ai website. We want you to be confident that we are looking after your interests, which is why we’ve set out our practices clearly.
            </p>

            <p className="leading-relaxed">
              We encourage you to review updates to this Personal Data Protection Policy regularly at{" "}
              <a
                href="http://www.qualty.ai"
                className="underline hover:text-black transition duration-300 cursor-pointer"
              >
                www.qualty.ai
              </a>
              .
            </p>

            <p className="leading-relaxed font-medium">
              We process your Personal Data in compliance with all applicable laws and regulations, including the Digital Personal Data Protection Act, 2023.
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
              <li>Obtain and process your Personal Data fairly and lawfully</li>
              <li>Use your data only for specified, explicit, and legitimate purposes</li>
              <li>Ensure data is adequate, relevant, and not excessive</li>
              <li>Keep your data accurate and up-to-date</li>
              <li>Store data only as long as necessary and in accordance with legal requirements</li>
            </ul>
          </section>

          {/* Sections */}
          <SectionLayout title="1. Data Collection During Signup">
            <p>
              To access expert services, you may need to sign up or log in. At that stage, we collect personal data such as your name, email, address, mobile number, and company name. These are securely stored within the Qualty.ai organization.
            </p>
            <p className="font-medium border-l-4 border-black pl-4 py-1 bg-gray-100">
              We ask for your consent before collecting, using, or disclosing your data. You may withdraw consent anytime via the opt-out mechanism or by contacting us.
            </p>
          </SectionLayout>

          <SectionLayout title="2. General Website Usage">
            <p>
              You can browse our website without revealing personal information. We may collect non-identifiable data to improve our services unless you submit personal details via forms or email.
            </p>
          </SectionLayout>

          <SectionLayout title="3. Usage Monitoring">
            <p>
              Information collected during normal use may be used to monitor site usage and improve our offerings, unless you request otherwise in writing.
            </p>
          </SectionLayout>

          <SectionLayout title="4. How We Use Your Information">
            <ul className="list-disc list-inside space-y-2 pl-4 text-gray-800">
              <li>Operate and maintain our website</li>
              <li>Improve and personalize your experience</li>
              <li>Analyze usage patterns</li>
              <li>Develop new features and services</li>
              <li>Communicate updates and marketing</li>
              <li>Send you emails</li>
            </ul>
          </SectionLayout>

          <SectionLayout title="5. Data Sharing">
            <p>
              We do not share your personal data with third parties unless required to deliver a service you’ve requested and with your explicit consent.
            </p>
            <p>
              Exceptions include legal obligations or violations of our terms.
            </p>
          </SectionLayout>

          <SectionLayout title="6. Third-Party Advertisers">
            <p>
              Advertisers may use cookies, JavaScript, or web beacons to personalize ads and measure effectiveness. Qualty.ai has no control over these cookies.
            </p>
            <p>
              Google uses DART cookies to serve ads based on your visits. You can opt out at:
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-black ml-2 transition duration-300 cursor-pointer"
              >
                Google Ads Privacy Policy
              </a>
            </p>
          </SectionLayout>

          <SectionLayout title="7. Data Security">
            <p>
              We take all reasonable precautions to protect your data from unauthorized access, modification, or loss. Our service providers are contractually bound to do the same.
            </p>
          </SectionLayout>

          <SectionLayout title="8. Contact Us">
            <p>
              If you have questions or concerns about your privacy, please contact us at:
            </p>
            <button
              onClick={handleEmailClick}
              className="text-black font-bold text-sm sm:text-base mt-2 bg-white hover:bg-black hover:text-white transition duration-300 p-3 rounded-lg border border-black cursor-pointer"
              aria-label={`Contact us at ${contactEmail}`}
            >
              Click to Reveal Contact Email
            </button>
          </SectionLayout>
        </div>
      </div>
    </div>
  );
}
