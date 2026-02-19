'use client';

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { FAQ_DATA } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/hooks/useScrollReveal";

export function FAQ() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    return (
        <Section background="charcoal" className="py-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0c0c0e]" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Left */}
                    <ScrollReveal className="lg:col-span-4 lg:sticky lg:top-32 h-fit" variant="left">
                        <span className="text-[var(--color-red)] font-semibold tracking-[0.15em] uppercase text-[11px] mb-3 block">Support</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight text-white">
                            QUESTIONS<br />FRÉQUENTES
                        </h2>
                        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                            Les réponses aux questions les plus courantes.
                        </p>

                        <div className="p-7 rounded-2xl bg-[var(--color-charcoal)] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300">
                            <MessageCircle className="w-6 h-6 text-[var(--color-red)] mb-4" strokeWidth={1.5} />
                            <h4 className="font-bold text-base mb-1.5 text-white">Besoin d&apos;aide ?</h4>
                            <p className="text-gray-500 text-xs mb-5">Notre équipe est là pour vous répondre.</p>
                            <a href="tel:0634612212" className="flex items-center justify-center w-full py-3 bg-[var(--color-red)] text-white font-semibold rounded-xl hover:bg-[var(--color-red-dark)] transition-colors text-sm">
                                06 34 61 22 12
                            </a>
                        </div>
                    </ScrollReveal>

                    {/* Right */}
                    <div className="lg:col-span-8 space-y-2">
                        {FAQ_DATA.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <ScrollReveal key={index} delay={index * 60}>
                                    <div
                                        className={cn(
                                            "rounded-xl transition-all duration-300 border",
                                            isOpen
                                                ? "bg-[#0f0f11] border-white/[0.1]"
                                                : "bg-transparent border-white/[0.04] hover:border-white/[0.08]"
                                        )}
                                    >
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                            className="w-full flex items-center justify-between p-5 text-left"
                                        >
                                            <span className={cn(
                                                "font-semibold text-sm transition-colors pr-4",
                                                isOpen ? "text-white" : "text-gray-400 group-hover:text-gray-300"
                                            )}>
                                                {item.question}
                                            </span>
                                            <span className={cn(
                                                "flex items-center justify-center w-7 h-7 rounded-lg transition-all duration-300 shrink-0",
                                                isOpen ? "bg-[var(--color-red)] text-white" : "bg-white/[0.04] text-gray-600"
                                            )}>
                                                {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                                            </span>
                                        </button>

                                        <div className={cn(
                                            "transition-all duration-500 ease-[var(--ease-out-expo)] px-5 overflow-hidden",
                                            isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
                                        )}>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Section>
    );
}
