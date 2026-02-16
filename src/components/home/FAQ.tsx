'use client';

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { FAQ_DATA } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FAQ() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    return (
        <Section background="charcoal" className="py-24 relative overflow-hidden">
            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Left Content */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit text-left">
                        <span className="text-[var(--color-red)] font-bold tracking-widest uppercase text-sm mb-2 block">Support</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white">
                            QUESTIONS<br />FRÉQUENTES
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
                            Les réponses à vos interrogations les plus courantes.
                        </p>

                        <div className="p-8 rounded-[var(--radius-xl)] bg-[var(--color-charcoal-light)] border border-white/10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-red)] rounded-full blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity" />

                            <MessageCircle className="w-8 h-8 text-[var(--color-red)] mb-4" />
                            <h4 className="font-bold text-xl mb-2 text-white uppercase tracking-tight">Besoin d'aide ?</h4>
                            <p className="text-gray-500 text-sm mb-6">Notre équipe est disponible pour vous répondre.</p>
                            <a href="tel:0634612212" className="inline-flex items-center justify-center w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors uppercase tracking-wide text-sm">
                                06 34 61 22 12
                            </a>
                        </div>
                    </div>

                    {/* Right Accordion */}
                    <div className="lg:col-span-8 space-y-4">
                        {FAQ_DATA.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className={cn(
                                        "group rounded-xl transition-all duration-300 overflow-hidden border",
                                        isOpen
                                            ? "bg-[var(--color-charcoal-light)] border-[var(--color-red)]/50"
                                            : "bg-[var(--color-charcoal-lighter)] border-white/5 hover:border-white/10"
                                    )}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="w-full flex items-center justify-between p-6 text-left"
                                    >
                                        <span className={cn("font-bold text-lg uppercase tracking-wide transition-colors", isOpen ? "text-white" : "text-gray-400 group-hover:text-white")}>
                                            {item.question}
                                        </span>
                                        <span className={cn(
                                            "flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300",
                                            isOpen ? "bg-[var(--color-red)] text-white rotate-180" : "bg-white/5 text-gray-500 group-hover:bg-white/10 group-hover:text-white"
                                        )}>
                                            {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                        </span>
                                    </button>

                                    <div className={cn(
                                        "transition-all duration-500 ease-[var(--ease-out-expo)] px-6 overflow-hidden",
                                        isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                                    )}>
                                        <p className="text-gray-400 leading-relaxed border-t border-white/5 pt-4 font-light">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Section>
    );
}
