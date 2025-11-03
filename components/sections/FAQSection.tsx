import React, { useState } from "react";
import Card from "../ui/Card";

interface FAQSectionProps {
  darkMode: boolean;
}

export default function FAQSection({ darkMode }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly can I set up my first chatbot?",
      answer:
        "You can create your first chatbot in under 5 minutes using our intuitive drag-and-drop interface. Simply choose a template, customize the responses, and deploy to your website or messaging platforms.",
    },
    {
      question: "What platforms can I integrate with?",
      answer:
        "Vecinita integrates with over 50 platforms including WhatsApp, Facebook Messenger, Slack, Discord, Telegram, and most websites. We also provide APIs for custom integrations.",
    },
    {
      question: "Is there a limit to the number of conversations?",
      answer:
        "Our Free plan includes 50 messages per month. Pro plans start with 1,000 messages per month, and Enterprise plans offer unlimited messages. You can always purchase additional message credits as needed.",
    },
    {
      question: "Can I customize the chatbot's appearance?",
      answer:
        "Yes! You can fully customize your chatbot's appearance including colors, fonts, positioning, and branding. Pro and Enterprise plans include advanced customization options and white-label solutions.",
    },
    {
      question: "How does the AI training work?",
      answer:
        "You can train your chatbot by uploading documents, providing website URLs, or manually adding Q&A pairs. Our AI automatically processes this information to provide accurate responses to your customers.",
    },
    {
      question: "What kind of analytics do you provide?",
      answer:
        "We provide comprehensive analytics including conversation volume, response accuracy, user satisfaction scores, popular questions, and conversion tracking. Advanced analytics are available in Pro and Enterprise plans.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and GDPR compliance. Your data is never shared with third parties and is stored in secure, encrypted databases.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes! Free plan users get email support, Pro users get priority support, and Enterprise customers get dedicated support with guaranteed response times and phone support.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className={`relative z-10 py-20 transition-all duration-500 ${
        darkMode ? "bg-gray-800" : "bg-gray-50"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide mb-4">
            FAQ
          </p>
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-6 transition-colors ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Frequently Asked Questions
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto transition-colors ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Find answers to common questions about Vecinita. Can't find what
            you're looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} darkMode={darkMode} className="overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full p-6 text-left transition-colors ${
                  darkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
                }`}
              >
                <div className="flex justify-between items-center">
                  <h3
                    className={`text-lg font-semibold transition-colors ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <div className="ml-4 flex-shrink-0">
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                      } ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              {openIndex === index && (
                <div
                  className={`px-6 pb-6 transition-all duration-300 ${
                    darkMode ? "bg-gray-700" : "bg-gray-50"
                  }`}
                >
                  <p
                    className={`text-sm leading-relaxed transition-colors ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <Card darkMode={darkMode} className="p-8">
            <h3
              className={`text-2xl font-bold mb-4 transition-colors ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Still have questions?
            </h3>
            <p
              className={`mb-6 transition-colors ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Our support team is here to help. Get in touch and we'll get back
              to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@vecinita.ai"
                className={`px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
              >
                Contact Support
              </a>
              <a
                href="#"
                className={`px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
              >
                View Documentation
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}


