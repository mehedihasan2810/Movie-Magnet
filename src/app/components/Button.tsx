import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={cn(
        "rounded-md border border-tg-btn-color px-2 text-sm text-tg-btn-color hover:bg-tg-btn-color hover:text-tg-btn-text-color",
        className,
      )}
    >
      {children}
    </button>
  );
}
