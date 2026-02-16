import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean;
    background?: "white" | "off-white" | "charcoal" | "black";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, container = true, background = "off-white", children, ...props }, ref) => {
        const backgrounds = {
            white: "bg-white",
            "off-white": "bg-[var(--color-off-white)]",
            charcoal: "bg-[var(--color-charcoal)] text-white",
            black: "bg-black text-white",
        };

        return (
            <section
                ref={ref}
                className={cn(
                    "py-20 md:py-32 relative overflow-hidden",
                    backgrounds[background],
                    className
                )}
                {...props}
            >
                {container ? (
                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        {children}
                    </div>
                ) : (
                    children
                )}
            </section>
        );
    }
);
Section.displayName = "Section";

export { Section };
