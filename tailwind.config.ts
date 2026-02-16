import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                charcoal: {
                    DEFAULT: "#09090b",
                    light: "#18181b",
                    lighter: "#27272a",
                },
                red: {
                    DEFAULT: "#dc2626",
                    dark: "#b91c1c",
                    glow: "rgba(220, 38, 38, 0.5)",
                },
            },
            fontFamily: {
                // Force system sans-serif stack to avoid "blog" serif look
                sans: [
                    "Inter",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "Helvetica Neue",
                    "Arial",
                    "sans-serif"
                ],
                // Technical/Display font
                display: [
                    "Manrope",
                    "Montserrat",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "sans-serif"
                ],
            },
            animation: {
                "fade-up": "fadeInUp 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards",
                "scale-in": "scaleIn 0.5s cubic-bezier(0.19, 1, 0.22, 1) forwards",
            },
            keyframes: {
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                scaleIn: {
                    "0%": { opacity: "0", transform: "scale(0.95)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                }
            }
        },
    },
    plugins: [],
};
export default config;
