import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={cn(
        "border border-tg-btn-color rounded-md px-2 text-tg-btn-color text-sm hover:bg-tg-btn-color hover:text-tg-btn-text-color",
        className
      )}
    >
      {children}
    </button>
  );
}
