import React from "react";
import Card from "../ui/Card";

interface FeaturesSectionProps {
  darkMode: boolean;
}

export default function FeaturesSection({ darkMode }: FeaturesSectionProps) {
  const features = [
    {
      title: "Chat History",
      description:
        "Take a look at each and every conversation that's taken place within any of your chatbots.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      gradient: "from-pink-400 to-pink-600",
    },
    {
      title: "Bot Personas",
      description:
        "Change the bot prompt to change the character and purpose of the chatbot for your needs.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
      ),
      gradient: "from-purple-400 to-purple-600",
    },
    {
      title: "Choose Your AI",
      description:
        "Select from OpenAI, Anthropic, or Google's language models, depending on your requirements.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      gradient: "from-orange-400 to-orange-600",
    },
  ];

  return (
    <section
      id="features"
      className={`relative z-10 py-20 transition-all duration-500 ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide mb-4">
            SECURITY - RELIABILITY - INNOVATION
          </p>
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-6 transition-colors ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Why Choose Vecinita?
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto transition-colors ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            We pride ourselves on making it easy for individuals and business
            owners around the world to use artificial intelligence to become
            more productive.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} darkMode={darkMode} className="p-8">
              <div
                className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-full mb-6 shadow-lg`}
              >
                {feature.icon}
              </div>
              <h3
                className={`text-xl font-bold mb-4 transition-colors ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`mb-6 transition-colors ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {feature.description}
              </p>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

