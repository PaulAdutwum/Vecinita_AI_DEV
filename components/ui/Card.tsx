import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  darkMode?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
  darkMode = false,
}: CardProps) {
  const baseClasses = "rounded-xl shadow-lg border transition-all duration-500";
  const hoverClasses = hover ? "hover:shadow-xl hover:scale-105" : "";
  const darkClasses = darkMode
    ? "bg-gray-700 border-gray-600"
    : "bg-white border-gray-100";

  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${darkClasses} ${className}`}
    >
      {children}
    </div>
  );
}

