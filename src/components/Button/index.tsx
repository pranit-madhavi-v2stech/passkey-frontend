import React from "react";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  children,
  type = "button",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-md py-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
