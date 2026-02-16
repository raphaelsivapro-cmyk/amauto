import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "secondary" | "destructive" | "outline" | "success"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
    const variants = {
        default: "border-transparent bg-[var(--color-charcoal)] text-white hover:bg-[var(--color-charcoal-light)]",
        secondary: "border-transparent bg-[var(--color-slate-lighter)] text-[var(--color-charcoal)] hover:bg-[var(--color-slate-light)]/20",
        destructive: "border-transparent bg-[var(--color-red)] text-white hover:bg-[var(--color-red-dark)]",
        outline: "text-[var(--color-charcoal)] border-[var(--color-slate-light)]",
        success: "border-transparent bg-green-100 text-green-800"
    }

    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                variants[variant],
                className
            )}
            {...props}
        />
    )
}

export { Badge }
