import * as React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "premium";
    size?: "sm" | "md" | "lg" | "xl";
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, children, disabled, ...props }, ref) => {
        const variants = {
            primary: "bg-[var(--color-red)] text-white hover:bg-[var(--color-red-dark)] shadow-lg shadow-red-500/20",
            secondary: "bg-[var(--color-charcoal)] text-white hover:bg-[var(--color-charcoal-light)]",
            outline: "border border-[var(--color-slate-light)] text-[var(--color-charcoal)] hover:border-[var(--color-charcoal)] bg-transparent",
            ghost: "hover:bg-gray-100 text-[var(--color-charcoal)]",
            premium: "bg-white text-[var(--color-charcoal)] hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-white/20",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
            xl: "px-10 py-5 text-xl tracking-wide",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-[var(--radius-full)] disabled:opacity-50 disabled:pointer-events-none active:scale-95",
                    variants[variant],
                    sizes[size],
                    className
                )}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button };
