import React from "react";

interface ISubmitButtonProps {
  label: string;
}
const SubmitButton = ({ label }: ISubmitButtonProps) => {
  return (
    <button
      type="submit"
      className="w-full transform rounded-lg bg-blue-500 px-6 py-4 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
    >
      {label}
    </button>
  );
};

export default SubmitButton;
