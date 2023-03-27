import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { IconType } from "react-icons";

interface InputProps {
  name: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  startIcon?: IconType;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  name,
  type = "text",
  placeholder,
  startIcon: Icon,
  onChange,
  value,
}) => {
  return (
    <div className="relative mt-8 flex items-center">
      {Icon && (
        <span className="absolute left-2">
          <Icon size={24} />
        </span>
      )}

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className="block w-full rounded-lg border bg-white py-3 px-11 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
