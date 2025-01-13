import React from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Pizza House</h3>
            <p className="text-gray-400">
              The best pizza in town. Made fresh and delivered to your door!
            </p>
            <div className="mt-4">
              <p className="text-gray-400">Address: 123 Pizza Street, Food City, FC 98765</p>
              <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
              <p className="text-gray-400">Email: contact@pizzahouse.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/menu" className="text-gray-400 hover:text-white">
                  Menu
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-2xl cursor-pointer">
            <FaFacebook />
            <FaYoutube />
            <FaInstagramSquare />
            <FaLinkedin />
            <FaTwitter />
             
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pizza House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
