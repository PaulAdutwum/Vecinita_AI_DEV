"use client";

import { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import HeroSection from "../components/sections/HeroSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import UseCasesSection from "../components/sections/UseCasesSection";
import TrainingSection from "../components/sections/TrainingSection";
import PricingSection from "../components/sections/PricingSection";
import ReviewsSection from "../components/sections/ReviewsSection";
import FAQSection from "../components/sections/FAQSection";
import Footer from "../components/layout/Footer";
import IconButton from "../components/ui/IconButton";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState("normal");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    // Redirect to dashboard
    window.location.href = "/dashboard";
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleFontSize = () => {
    const sizes = ["small", "normal", "large"];
    const currentIndex = sizes.indexOf(fontSize);
    const nextIndex = (currentIndex + 1) % sizes.length;
    setFontSize(sizes[nextIndex]);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.style.fontSize =
      fontSize === "small" ? "14px" : fontSize === "large" ? "18px" : "16px";
  }, [fontSize]);

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
      }`}
    >
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <Header
        darkMode={darkMode}
        isLoggedIn={isLoggedIn}
        onScrollToSection={scrollToSection}
        onToggleLogin={handleLogin}
      />

      {/* Hero Section */}
      <HeroSection darkMode={darkMode} />

      {/* Features Section */}
      <FeaturesSection darkMode={darkMode} />

      {/* Use Cases Section */}
      <UseCasesSection darkMode={darkMode} />

      {/* Training Section */}
      <TrainingSection darkMode={darkMode} />

      {/* Pricing Section */}
      <PricingSection darkMode={darkMode} />

      {/* Reviews Section */}
      <ReviewsSection darkMode={darkMode} />

      {/* FAQ Section */}
      <FAQSection darkMode={darkMode} />

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* Cookie Consent Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 text-sm z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          <p className="mb-2 sm:mb-0">
            We use cookies and similar technologies to improve your experience,
            analyze site usage, and assist in our marketing efforts. By using
            our site, you consent to the placement of cookies. You can withdraw
            your consent at any time by adjusting your browser settings.{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300 underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>

      {/* Floating Chat Widget */}
      <div className="fixed bottom-20 right-6 z-50">
        <div className="bg-white rounded-full shadow-lg p-4 border border-gray-200 hover:scale-110 transition-transform duration-300">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">V</span>
          </div>
        </div>
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-3 border border-gray-200 max-w-xs">
          <p className="text-gray-900 text-sm">
            Welcome! How can I help you today? 😊
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <IconButton
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 left-6 w-12 h-12 bg-gray-700 hover:bg-gray-600 text-white rounded-full z-50"
        size="lg"
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
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </IconButton>

      {/* Right Sidebar Utility Bar */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-l-lg space-y-2 z-40">
        <IconButton onClick={toggleDarkMode} variant="secondary" size="md">
          <span className="text-xs">{darkMode ? "☀️" : "🌙"}</span>
        </IconButton>
        <IconButton onClick={toggleFontSize} variant="secondary" size="md">
          <span className="text-xs">Aa</span>
        </IconButton>
      </div>
    </div>
  );
}
