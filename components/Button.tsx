import React from "react";

interface IButtonProps {
  label: string;
  disabled?: boolean;
  fullWidth?: boolean;
  primary?: boolean;
  large?: boolean;
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({
  label,
  disabled,
  fullWidth,
  primary,
  large,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      className={`rounded-full border-2 font-semibold transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-70 ${
        fullWidth ? "w-full" : "w-fit"
      } px-4 py-2 ${
        primary
          ? "border-black bg-white text-black"
          : "border-sky-500 bg-sky-500 text-white"
      } ${large ? "px-5 py-3 text-xl" : "text-md px-4 py-2"}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
