import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#3e1f0e] text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Logo or Name */}
        <div className="text-2xl font-bold mb-4 md:mb-0">
          UI/UX Portfolio
        </div>

        <div className="text-xs opacity-60 text-right">
          &copy; 2025 All rights reserved.
        </div>

        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
