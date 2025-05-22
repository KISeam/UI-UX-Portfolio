import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-red-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo / Title */}
          <h1 className="text-xl font-bold uppercase tracking-wider">
            UI/UX Portfolio
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-red-300">
              HOME
            </a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="hover:text-red-300">
              PORTFOLIO
            </a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-red-300">
              ABOUT
            </a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-red-300">
              SERVICES
            </a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-red-300">
              CONTACT
            </a>
            <a href="#blog" onClick={() => setIsMenuOpen(false)} className="hover:text-red-300">
              BLOG
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation (Collapsible) */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col space-y-3">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-red-300">
              HOME
            </a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="hover:text-red-300">
              PORTFOLIO
            </a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-red-300">
              ABOUT
            </a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-red-300">
              SERVICES
            </a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-red-300">
              CONTACT
            </a>
            <a href="#blog" onClick={() => setIsMenuOpen(false)} className="hover:text-red-300">
              BLOG
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
