import React from "react";
import Card from "../ui/Card";

interface UseCasesSectionProps {
  darkMode: boolean;
}

export default function UseCasesSection({ darkMode }: UseCasesSectionProps) {
  const useCases = [
    {
      title: "Customer Support",
      description:
        "Provide 24/7 customer support with instant responses to common questions and issues.",
      icon: "🎧",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Lead Generation",
      description:
        "Capture and qualify leads automatically through intelligent conversations.",
      icon: "🎯",
      color: "from-green-500 to-green-600",
    },
    {
      title: "E-commerce Assistant",
      description:
        "Help customers find products, answer questions, and guide them through purchases.",
      icon: "🛒",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Content Creation",
      description:
        "Generate content ideas, write copy, and assist with creative projects.",
      icon: "✍️",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Training & Onboarding",
      description:
        "Train new employees and onboard customers with interactive learning experiences.",
      icon: "🎓",
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Data Collection",
      description:
        "Gather feedback, conduct surveys, and collect valuable user insights.",
      icon: "📋",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section
      id="use-cases"
      className={`relative z-10 py-20 transition-all duration-500 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide mb-4">
            USE CASES
          </p>
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-6 transition-colors ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Transform Your Business with AI
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto transition-colors ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Discover how businesses across industries are using Vecinita to
            automate processes, improve customer experience, and drive growth.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              darkMode={darkMode}
              className="p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <span className="text-white text-2xl">{useCase.icon}</span>
                </div>
                <h3
                  className={`text-xl font-bold mb-4 transition-colors ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {useCase.title}
                </h3>
                <p
                  className={`mb-6 transition-colors ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {useCase.description}
                </p>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3
            className={`text-2xl font-bold mb-4 transition-colors ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Ready to get started?
          </h3>
          <p
            className={`mb-8 transition-colors ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Join thousands of businesses already using Vecinita to transform
            their operations.
          </p>
        </div>
      </div>
    </section>
  );
}





