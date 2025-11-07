import React from "react";
import Card from "../ui/Card";

interface ReviewsSectionProps {
  darkMode: boolean;
}

export default function ReviewsSection({ darkMode }: ReviewsSectionProps) {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content:
        "Vecinita has revolutionized our customer support. Response times dropped by 80% and customer satisfaction increased significantly.",
      rating: 5,
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, GrowthCo",
      content:
        "The lead generation capabilities are incredible. We've seen a 300% increase in qualified leads since implementing Vecinita.",
      rating: 5,
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, E-commerce Plus",
      content:
        "Setting up our first chatbot was so easy. The templates and customization options made it perfect for our brand.",
      rating: 5,
      avatar: "ER",
    },
    {
      name: "David Thompson",
      role: "Operations Manager, ServicePro",
      content:
        "The analytics dashboard gives us insights we never had before. We can now optimize our customer interactions in real-time.",
      rating: 5,
      avatar: "DT",
    },
    {
      name: "Lisa Wang",
      role: "Head of Sales, InnovateCorp",
      content:
        "Integration was seamless with our existing tools. The team was up and running within hours, not days.",
      rating: 5,
      avatar: "LW",
    },
    {
      name: "James Wilson",
      role: "CTO, StartupHub",
      content:
        "The API is robust and well-documented. We've built custom integrations that work flawlessly with Vecinita.",
      rating: 5,
      avatar: "JW",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section
      id="reviews"
      className={`relative z-10 py-20 transition-all duration-500 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide mb-4">
            REVIEWS
          </p>
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-6 transition-colors ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            What Our Customers Say
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto transition-colors ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Join thousands of satisfied customers who have transformed their
            business with Vecinita.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card
              key={index}
              darkMode={darkMode}
              className="p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">
                    {review.avatar}
                  </span>
                </div>
                <div>
                  <h4
                    className={`font-semibold transition-colors ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {review.name}
                  </h4>
                  <p
                    className={`text-sm transition-colors ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {review.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {renderStars(review.rating)}
              </div>

              <p
                className={`text-sm leading-relaxed transition-colors ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                "{review.content}"
              </p>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div
              className={`text-4xl font-bold mb-2 transition-colors ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              10,000+
            </div>
            <p
              className={`text-sm transition-colors ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Happy Customers
            </p>
          </div>
          <div>
            <div
              className={`text-4xl font-bold mb-2 transition-colors ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              4.9/5
            </div>
            <p
              className={`text-sm transition-colors ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Average Rating
            </p>
          </div>
          <div>
            <div
              className={`text-4xl font-bold mb-2 transition-colors ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              99.9%
            </div>
            <p
              className={`text-sm transition-colors ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Uptime
            </p>
          </div>
          <div>
            <div
              className={`text-4xl font-bold mb-2 transition-colors ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              24/7
            </div>
            <p
              className={`text-sm transition-colors ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}





