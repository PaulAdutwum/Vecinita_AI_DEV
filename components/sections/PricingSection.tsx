import React from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";

interface PricingSectionProps {
  darkMode: boolean;
}

export default function PricingSection({ darkMode }: PricingSectionProps) {
  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "1 chatbot",
        "50 messages per month",
        "Basic templates",
        "Email support",
        "Standard integrations",
      ],
      cta: "Get Started Free",
      popular: false,
      color: "from-gray-500 to-gray-600",
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "For growing businesses",
      features: [
        "5 chatbots",
        "1,000 messages per month",
        "Advanced templates",
        "Priority support",
        "All integrations",
        "Analytics dashboard",
        "Custom branding",
      ],
      cta: "Start Pro Trial",
      popular: true,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations",
      features: [
        "Unlimited chatbots",
        "Unlimited messages",
        "Custom templates",
        "Dedicated support",
        "Custom integrations",
        "Advanced analytics",
        "White-label solution",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
      popular: false,
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section
      id="pricing"
      className={`relative z-10 py-20 transition-all duration-500 ${
        darkMode ? "bg-gray-800" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide mb-4">
            PRICING
          </p>
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-6 transition-colors ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Choose Your Plan
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto transition-colors ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Start free and scale as you grow. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              darkMode={darkMode}
              className={`p-8 relative transition-all duration-300 ${
                plan.popular
                  ? "ring-2 ring-blue-500 scale-105 shadow-2xl"
                  : "hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3
                  className={`text-2xl font-bold mb-2 transition-colors ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span
                    className={`text-4xl font-bold transition-colors ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm transition-colors ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    /{plan.period}
                  </span>
                </div>
                <p
                  className={`text-sm transition-colors ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div
                      className={`w-5 h-5 bg-gradient-to-br ${plan.color} rounded-full flex items-center justify-center mr-3 flex-shrink-0`}
                    >
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span
                      className={`text-sm transition-colors ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "gradient" : "outline"}
                size="lg"
                className="w-full"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h3
            className={`text-2xl font-bold mb-8 transition-colors ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card darkMode={darkMode} className="p-6 text-left">
              <h4
                className={`font-semibold mb-2 transition-colors ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Can I change plans anytime?
              </h4>
              <p
                className={`text-sm transition-colors ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Yes, you can upgrade or downgrade your plan at any time. Changes
                take effect immediately.
              </p>
            </Card>
            <Card darkMode={darkMode} className="p-6 text-left">
              <h4
                className={`font-semibold mb-2 transition-colors ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Is there a free trial?
              </h4>
              <p
                className={`text-sm transition-colors ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Yes, all paid plans come with a 14-day free trial. No credit
                card required.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}





