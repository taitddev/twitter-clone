import { FC } from "react";

interface IButtonProps {
  label: string;
  disabled?: boolean;
  fullWidth?: boolean;
  primary?: boolean;
  large?: boolean;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({
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
      className={`transform rounded-lg font-semibold capitalize tracking-wide transition hover:opacity-80 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-70 ${
        fullWidth ? "w-full" : "w-fit"
      } px-4 py-2 ${
        primary
          ? "border-2 border-bluePrimary bg-white text-bluePrimary"
          : "bg-bluePrimary text-white"
      } ${large ? "px-5 py-3 text-xl" : "text-md px-4 py-2"}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
