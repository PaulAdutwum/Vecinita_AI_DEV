import React from "react";

interface IconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost";
}

export default function IconButton({
  children,
  onClick,
  className = "",
  size = "md",
  variant = "secondary",
}: IconButtonProps) {
  const baseClasses =
    "rounded flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none";

  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-700 hover:bg-gray-600 text-white",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-600 hover:text-gray-900",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

