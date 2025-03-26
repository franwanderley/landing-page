import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   title: string;
   buttonStyle: "transparent" | "color";
}

export const Button = ({title,buttonStyle, ...props}: ButtonProps) => {
   return (
      <button {...props}>{title}</button>
   );
}