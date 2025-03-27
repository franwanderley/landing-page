import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   title: string;
   buttonStyle: "transparent" | "color" | "border";
}

export const Button = ({title,buttonStyle, ...props}: ButtonProps) => {
   const createStyleButton = () => {
      switch (buttonStyle) {
        case 'color':
          return "bg-background p-2 pr-4 pl-4 text-sm rounded-4xl border-none text-bg-header cursor-pointer";
        case 'transparent':
          return "bg-transparent p-2 pr-4 pl-4 text-sm rounded-4xl text-white cursor-pointer";
        case 'border':
            return "bg-transparent p-2 pr-4 pl-4 text-sm rounded-4xl text-white cursor-pointer border-white border-1";
        default:
          return "";
      }
    };

   return (
      <button className={createStyleButton()} {...props}>
         {title}
      </button>
      
   );
}