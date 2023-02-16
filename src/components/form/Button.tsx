import { ButtonProps } from "@/types";

const className = {
  indigo: `bg-indigo-500 hover:bg-blue-600 focus:ring-blue-300`,
  yellow: `bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300`,
  pink: `bg-pink-500 hover:bg-pink-600 focus:ring-pink-300`
}

const Button = ({ Icon, label, onClick, type, color }: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    className={`text-white focus:ring-4 focus:outline-none font-medium text-base px-6 py-2 flex items-center space-x-2 ${className[color]}`}
  >
    {Icon && <Icon />} <div>{label}</div>
  </button>
);
export default Button;
