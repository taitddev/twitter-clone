import React from "react";

interface IButtonProps {
  label: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<IButtonProps> = ({ label, disabled, fullWidth }) => {
  return (
    <button
      disabled={disabled}
      className={`rounded-full border-2 font-semibold transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-70 ${
        fullWidth ? "w-full" : "w-fit"
      } px-4 py-2`}
    >
      {label}
    </button>
  );
};

export default Button;
