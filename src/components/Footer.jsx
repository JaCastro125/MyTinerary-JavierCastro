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
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">&copy; 2023 MyTinerary. MindHub C4.</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              About Us
            </a>
            <a href="/" className="text-gray-300 hover:text-white">
              Home
            </a>
            <a href="/cities" className="text-gray-300 hover:text-white">
              Cities
            </a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
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
      </div>
    </footer>
  );
};

export default Footer;
