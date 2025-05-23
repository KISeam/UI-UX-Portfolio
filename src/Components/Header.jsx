import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-red-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center py-4 gap-x-8">
          {/* Desktop Navigation (Left) */}
          <nav className="hidden md:flex space-x-6">
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-red-300"
            >
              HOME
            </a>
            <a
              href="#portfolio"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-red-300"
            >
              PORTFOLIO
            </a>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-red-300"
            >
              ABOUT
            </a>
          </nav>

          {/* Center Logo / Signature */}
          <h1 className="hidden md:block text-2xl font-bold tracking-wider font-[Pacifico]">
            Zayed Uddin
          </h1>

          {/* Desktop Navigation (Right) */}
          <nav className="hidden md:flex space-x-6">
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-red-300"
            >
              SERVICES
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-red-300"
            >
              CONTACT
            </a>
            <a
              href="#blog"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-red-300"
            >
              BLOG
            </a>
          </nav>

          {/* Mobile Signature and Menu Button in Flex Row */}
          <div className="md:hidden flex justify-between items-center w-full">
            <h1 className="text-2xl font-bold tracking-wider font-[Pacifico]">
              Zayed Uddin
            </h1>

            <button
              className="p-2 cursor-pointer"
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
        </div>

        {isMenuOpen && (
          <nav className="md:hidden absolute top-18 left-0 z-50 w-full bg-red-900 text-white shadow-lg border-t border-red-800">
            <ul className="flex flex-col items-center py-4 space-y-4 text-lg font-medium">
              <li>
                <a
                  href="#home"
                  onClick={() => setIsMenuOpen(false)}
                  className="transition-colors duration-200 hover:text-red-300"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={() => setIsMenuOpen(false)}
                  className="transition-colors duration-200 hover:text-red-300"
                >
                  PORTFOLIO
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setIsMenuOpen(false)}
                  className="transition-colors duration-200 hover:text-red-300"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => setIsMenuOpen(false)}
                  className="transition-colors duration-200 hover:text-red-300"
                >
                  SERVICES
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="transition-colors duration-200 hover:text-red-300"
                >
                  CONTACT
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  onClick={() => setIsMenuOpen(false)}
                  className="transition-colors duration-200 hover:text-red-300"
                >
                  BLOG
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
