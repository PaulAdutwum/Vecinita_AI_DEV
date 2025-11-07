import React from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";

interface TrainingSectionProps {
  darkMode: boolean;
}

export default function TrainingSection({ darkMode }: TrainingSectionProps) {
  const trainingTopics = [
    {
      title: "Getting Started",
      description: "Learn the basics of creating your first chatbot",
      icon: "🚀",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Advanced Features",
      description: "Explore advanced chatbot capabilities and integrations",
      icon: "⚡",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "API Integration",
      description: "Connect your chatbot to external services and APIs",
      icon: "🔗",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Analytics & Insights",
      description: "Track performance and optimize your chatbot",
      icon: "📊",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Customization",
      description: "Personalize your chatbot's appearance and behavior",
      icon: "🎨",
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Troubleshooting",
      description: "Common issues and how to resolve them",
      icon: "🔧",
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <section
      id="training"
      className={`relative z-10 py-20 transition-all duration-500 ${
        darkMode ? "bg-gray-800" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-6 transition-colors ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Hi, how can we help you?
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto mb-8 transition-colors ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Get the most out of Vecinita with our comprehensive training
            resources and support.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help..."
                className={`w-full px-4 py-3 pl-12 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <svg
                  className={`w-5 h-5 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Training Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingTopics.map((topic, index) => (
            <Card
              key={index}
              darkMode={darkMode}
              className="p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${topic.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-white text-xl">{topic.icon}</span>
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-lg font-semibold mb-2 transition-colors ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {topic.title}
                  </h3>
                  <p
                    className={`text-sm transition-colors ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {topic.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <Card darkMode={darkMode} className="p-8 max-w-2xl mx-auto">
            <h3
              className={`text-2xl font-bold mb-4 transition-colors ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Still need help?
            </h3>
            <p
              className={`mb-6 transition-colors ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Our support team is here to help you succeed. Get in touch with us
              for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="md">
                Contact Support
              </Button>
              <Button variant="outline" size="md">
                View Documentation
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}





