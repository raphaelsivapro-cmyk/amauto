import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "rounded-[var(--radius-xl)] border border-gray-100 bg-white shadow-[var(--shadow-sm)] transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:-translate-y-1 relative overflow-hidden group",
                className
            )}
            {...props}
        >
            {/* Subtle gradient border effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-red)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="relative z-10">
                {props.children}
            </div>
        </div>
    )
);
Card.displayName = "Card";

export { Card };
