import React, { useState } from 'react';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#templates" className="text-gray-700 hover:text-blue-600 font-medium">
              Resume Templates
            </a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">
              Features
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium">
              Pricing
            </a>
            <a href="#blog" className="text-gray-700 hover:text-blue-600 font-medium">
              Blog
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#login" className="text-blue-600 font-medium hover:text-blue-800">
              Log in
            </a>
            <a
              href="#getstarted"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-5 py-2.5 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#templates" className="text-gray-700 hover:text-blue-600 font-medium">
                Resume Templates
              </a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">
                Features
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium">
                Pricing
              </a>
              <a href="#blog" className="text-gray-700 hover:text-blue-600 font-medium">
                Blog
              </a>
              <div className="flex flex-col space-y-3 pt-3 border-t border-gray-200">
                <a href="#login" className="text-blue-600 font-medium hover:text-blue-800">
                  Log in
                </a>
                <a
                  href="#getstarted"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-5 py-2.5 transition-colors text-center"
                >
                  Get Started
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;