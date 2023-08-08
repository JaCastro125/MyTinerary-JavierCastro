import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex justify-center items-center">
        <div>
          <p className="text-sm">&copy; 2023 MyTinerary. MindHub C4.</p>
        </div>
        <div className="container mx-auto mt-4">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-300 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/cities" className="text-gray-300 hover:text-white">
                Cities
              </a>
            </li>
          </ul>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">
            <FaWhatsapp size={20} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
