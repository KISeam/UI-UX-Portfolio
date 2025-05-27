import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#3e1f0e] to-[#2c130a] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <h1 className="text-2xl font-[Pacifico] text-white mb-4">Zayed Uddin</h1>
            <p className="text-sm leading-relaxed">
              Passionate about creating elegant and effective digital solutions. Let's work together to bring your ideas to life.
            </p>
            <div className="flex space-x-4 mt-5">
              <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
              <a href="#" className="hover:text-white transition"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-white transition"><FaGithub /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="#portfolio" className="hover:text-white transition">Portfolio</Link></li>
              <li><Link to="#services" className="hover:text-white transition">Services</Link></li>
              <li><Link to="/success-stories" className="hover:text-white transition">Success Stories</Link></li>
            </ul>
          </div>

          {/* Payment Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Payment Methods</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <p className="font-medium text-white">Bkash</p>
                <a href="tel:+8801234567890" className="flex items-center space-x-2 hover:text-white transition">
                  <FaPhoneAlt /> <span>+880 1234 567890</span>
                </a>
              </li>
              <li>
                <p className="font-medium text-white">Nagad</p>
                <a href="tel:+8801234567891" className="flex items-center space-x-2 hover:text-white transition">
                  <FaPhoneAlt /> <span>+880 1234 567891</span>
                </a>
              </li>
              <li>
                <p className="font-medium text-white">Rocket</p>
                <a href="tel:+8801234567892" className="flex items-center space-x-2 hover:text-white transition">
                  <FaPhoneAlt /> <span>+880 1234 567892</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / CTA */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Let's Connect</h4>
            <p className="text-sm mb-3">Open to collaborations and freelance opportunities. Reach out any time.</p>
            <a
              href="mailto:youremail@example.com"
              className="inline-block mt-2 px-4 py-2 bg-white text-black text-sm font-medium rounded hover:bg-gray-100 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          &copy; 2025 <span className="text-white font-semibold">Zayed Uddin</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
