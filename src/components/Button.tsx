import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   title: string;
   buttonStyle: "transparent" | "color";
}

export const Button = ({title,buttonStyle, ...props}: ButtonProps) => {
   return (
      <button className="bg-background p-2 pr-4 pl-4 text-sm rounded-2xl border-none text-bg-header cursor-pointer" {...props}>
         {title}
      </button>
      
   );
}