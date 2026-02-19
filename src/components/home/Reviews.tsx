'use client';

import { Section } from "@/components/ui/Section";
import { Star, CheckCircle2 } from "lucide-react";
import { REVIEWS_DATA } from "@/lib/data";
import { ScrollReveal } from "@/hooks/useScrollReveal";

export function Reviews() {
    return (
        <Section background="charcoal" className="py-28 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

            <ScrollReveal>
                <div className="text-center mb-16 relative z-10">
                    <span className="text-[var(--color-red)] font-semibold tracking-[0.15em] uppercase text-[11px] mb-3 block">Témoignages</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5 text-white leading-tight">
                        LA CONFIANCE{' '}
                        <span className="text-gray-500">SE MÉRITE</span>
                    </h2>
                    {/* Google badge */}
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] mt-2">
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                            ))}
                        </div>
                        <span className="text-xs text-gray-400">Noté <span className="text-white font-semibold">5.0/5</span> sur Google</span>
                    </div>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 relative z-10 max-w-6xl mx-auto">
                {REVIEWS_DATA.slice(0, 3).map((review, i) => (
                    <ScrollReveal key={review.id} delay={i * 100}>
                        <div className="group p-7 rounded-2xl bg-[#0f0f11] border border-white/[0.06] hover:border-white/[0.1] flex flex-col transition-all duration-400 h-full">
                            {/* Stars */}
                            <div className="flex gap-0.5 mb-5">
                                {[...Array(5)].map((_, starIndex) => (
                                    <Star
                                        key={starIndex}
                                        className={`w-3.5 h-3.5 ${starIndex < review.rating ? "text-amber-400 fill-amber-400" : "text-gray-800"}`}
                                    />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-gray-300 text-[14px] leading-relaxed flex-grow mb-7">
                                &ldquo;{review.text}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center text-white text-[11px] font-bold">
                                        {review.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white text-sm leading-tight">{review.name}</h4>
                                        <p className="text-[11px] text-gray-500 mt-0.5">{review.date}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
                                    <CheckCircle2 className="w-3 h-3" />
                                    <span>Vérifié</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </Section>
    );
}
