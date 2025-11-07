import React from "react";

interface FooterProps {
  darkMode?: boolean;
}

export default function Footer({ darkMode = false }: FooterProps) {
  const footerLinks = {
    product: [
      "Home",
      "Training",
      "Blog",
      "Vecinita Reviews",
      "Case Studies",
      "Vecinita Agency Program",
    ],
    information: [
      "About us",
      "Terms",
      "Privacy",
      "Data Processing Agreement",
      "Refund Policy",
    ],
    resources: ["Affiliate Program", "Chatbots By Industry", "AI Glossary"],
    integrations: [
      "Facebook Messenger",
      "Slack",
      "WhatsApp",
      "Instagram",
      "Telegram",
      "WordPress",
    ],
    contact: ["Contact Us", "Support", "Login"],
  };

  const socialIcons = ["f", "X", "📷", "in", "▶"];

  return (
    <footer className="relative z-10 bg-gradient-to-br from-blue-950 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Product */}
          <div>
            <h3 className="font-bold text-sm mb-4">PRODUCT</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.product.map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-bold text-sm mb-4">INFORMATION</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.information.map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-sm mb-4">RESOURCES</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.resources.map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Integrations */}
          <div>
            <h3 className="font-bold text-sm mb-4">INTEGRATIONS</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.integrations.map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm mb-4">CONTACT</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.contact.map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center space-x-4">
          {socialIcons.map((icon, index) => (
            <a
              key={index}
              href="#"
              className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-800 transition-all duration-300 hover:scale-110"
            >
              <span className="text-white font-bold">{icon}</span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>© Copyright 2025 - Vecinita.ai - Made In Great Britain 🇬🇧</p>
        </div>
      </div>
    </footer>
  );
}





