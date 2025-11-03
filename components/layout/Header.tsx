"use client";

import React, { useState } from "react";
import Button from "../ui/Button";

interface HeaderProps {
  darkMode: boolean;
  isLoggedIn: boolean;
  onScrollToSection: (sectionId: string) => void;
  onToggleLogin: () => void;
}

export default function Header({
  darkMode,
  isLoggedIn,
  onScrollToSection,
  onToggleLogin,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    onScrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`relative z-50 transition-all duration-500 ${
        darkMode
          ? "bg-gray-900/95 backdrop-blur-md"
          : "bg-white/95 backdrop-blur-md shadow-lg"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Vecinita
              </span>
              <span className="text-xs text-gray-400">™</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              "features",
              "use-cases",
              "pricing",
              "training",
              "reviews",
              "faq",
            ].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? "text-white hover:text-blue-400"
                    : "text-gray-700 hover:text-blue-600"
                } font-medium`}
              >
                {section.toUpperCase().replace("-", " ")}
              </button>
            ))}
            <button
              onClick={onToggleLogin}
              className={`transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "text-white hover:text-blue-400"
                  : "text-gray-700 hover:text-blue-600"
              } font-medium`}
            >
              {isLoggedIn ? "DASHBOARD" : "LOGIN"}
            </button>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => (window.location.href = "/dashboard")}
              variant="gradient"
              size="md"
            >
              SIGN UP FREE
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              darkMode ? "text-white" : "text-gray-700"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden border-t transition-all duration-300 ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                "features",
                "use-cases",
                "pricing",
                "training",
                "reviews",
                "faq",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-3 py-2 transition-colors ${
                    darkMode
                      ? "text-white hover:text-blue-400"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {section.charAt(0).toUpperCase() +
                    section.slice(1).replace("-", " ")}
                </button>
              ))}
              <button
                onClick={onToggleLogin}
                className={`block w-full text-left px-3 py-2 transition-colors ${
                  darkMode
                    ? "text-white hover:text-blue-400"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {isLoggedIn ? "Dashboard" : "Login"}
              </button>
              <Button
                onClick={() => (window.location.href = "/dashboard")}
                variant="gradient"
                size="md"
                className="w-full mt-4"
              >
                Sign Up Free
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
