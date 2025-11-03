import React from "react";
import Button from "../ui/Button";

interface HeroSectionProps {
  darkMode: boolean;
}

export default function HeroSection({ darkMode }: HeroSectionProps) {
  return (
    <main
      id="hero"
      className={`relative z-10 transition-all duration-500 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            {/* Tagline */}
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide mb-4">
              SECURITY - RELIABILITY - INNOVATION
            </p>

            {/* Main Headline */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-colors ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              AI Chatbots That Know Your Business, Ready To Help Customers 24/7
            </h1>

            {/* Sub-headline */}
            <p
              className={`text-lg sm:text-xl mb-8 leading-relaxed transition-colors ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Train a chatbot agent in minutes using your documents or website.
              Automatically handle customer questions, capture leads, and
              support visitors across your site and social platforms.
            </p>

            {/* CTA Button */}
            <div className="mb-8">
              <Button
                variant="gradient"
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 shadow-xl"
                onClick={() => (window.location.href = "/dashboard")}
              >
                SIGN UP FREE
              </Button>
              <p
                className={`text-sm mt-2 transition-colors ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                NO CREDIT CARD REQUIRED
              </p>
            </div>

            {/* Trust Indicators */}
            <p
              className={`text-sm transition-colors ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Loved by 10,000+ Users
            </p>
          </div>

          {/* Right Column - Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <div
                className={`rounded-2xl shadow-2xl p-8 border transition-all duration-500 ${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                {/* Input Sources */}
                <div className="flex justify-center mb-8">
                  <div className="flex items-center space-x-4">
                    {/* PDF Document */}
                    <div className="flex flex-col items-center group">
                      <div className="w-16 h-20 bg-white border-2 border-gray-300 rounded-lg shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="w-12 h-16 bg-red-100 rounded flex items-center justify-center">
                          <span className="text-red-600 font-bold text-xs">
                            PDF
                          </span>
                        </div>
                      </div>
                      <div className="w-4 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mt-2"></div>
                    </div>

                    {/* DOC Document */}
                    <div className="flex flex-col items-center group">
                      <div className="w-16 h-20 bg-white border-2 border-gray-300 rounded-lg shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="w-12 h-16 bg-blue-100 rounded flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-xs">
                            DOC
                          </span>
                        </div>
                      </div>
                      <div className="w-4 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mt-2"></div>
                    </div>

                    {/* Video Document */}
                    <div className="flex flex-col items-center group">
                      <div className="w-16 h-20 bg-white border-2 border-gray-300 rounded-lg shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="w-12 h-16 bg-red-100 rounded flex items-center justify-center">
                          <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center">
                            <div className="w-0 h-0 border-l-2 border-l-white border-y-2 border-y-transparent ml-0.5"></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-4 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mt-2"></div>
                    </div>
                  </div>
                </div>

                {/* Chat Interface */}
                <div
                  className={`max-w-md mx-auto rounded-2xl p-6 border transition-all duration-500 ${
                    darkMode
                      ? "bg-gray-700 border-gray-600"
                      : "bg-gray-50 border-gray-200"
                  }`}
                >
                  {/* Chatbot Avatar */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">V</span>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="space-y-4">
                    {/* Bot Message */}
                    <div className="flex justify-start">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-2xl rounded-bl-md max-w-xs shadow-lg">
                        Hello! How can I assist you today?
                      </div>
                    </div>

                    {/* User Message */}
                    <div className="flex justify-end">
                      <div
                        className={`px-4 py-2 rounded-2xl rounded-br-md max-w-xs border shadow-lg transition-colors ${
                          darkMode
                            ? "bg-gray-600 text-white border-gray-500"
                            : "bg-white text-gray-900 border-gray-200"
                        }`}
                      >
                        I have a question about your product.
                      </div>
                    </div>

                    {/* Bot Response */}
                    <div className="flex justify-start">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-2xl rounded-bl-md max-w-xs shadow-lg">
                        Sure! I'm here to help with any questions you have.
                      </div>
                    </div>
                  </div>

                  {/* Input Field */}
                  <div
                    className={`mt-6 flex items-center rounded-full border px-4 py-2 transition-colors ${
                      darkMode
                        ? "bg-gray-600 border-gray-500"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className={`flex-1 bg-transparent placeholder-gray-500 focus:outline-none transition-colors ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    />
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                        darkMode ? "bg-gray-500" : "bg-gray-300"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full transition-colors ${
                          darkMode ? "bg-gray-300" : "bg-gray-600"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
