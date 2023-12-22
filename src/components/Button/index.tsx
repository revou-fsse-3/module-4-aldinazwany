import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    label: string;
}

const Button = ({ label, ...props}: Props) => {
    return (
        <button
        {...props}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
        {label}
        </button>
    );

}

export default Button;