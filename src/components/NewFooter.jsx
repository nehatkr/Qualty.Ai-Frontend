import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NewFooter() {
  return (
    <footer className="bg-black text-white py-10 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-700 pb-10">
        <div>
          <h3 className="text-xl font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/about" className="hover:text-white">Company</Link></li>
            <li><Link to="/team" className="hover:text-white">Team</Link></li>
            <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/inspections" className="hover:text-white">Inspections</Link></li>
            <li><Link to="/marketplace" className="hover:text-white">Marketplace</Link></li>
            <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>
            <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/cookies" className="hover:text-white">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center pt-6">
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Qualty.ai. (in association with CargoFirst QAHO Corporation Pvt. Ltd.) All rights reserved. | CIN: U51909KA2022PTC161277</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="https://www.linkedin.com/company/qualty-ai-inspection/ " target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl">
            <FaInstagram />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}
