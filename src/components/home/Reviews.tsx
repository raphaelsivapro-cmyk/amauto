'use client';

import { Section } from "@/components/ui/Section";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { REVIEWS_DATA } from "@/lib/data";

export function Reviews() {
    return (
        <Section background="charcoal" className="py-32 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--color-charcoal-light)] to-transparent pointer-events-none" />

            <div className="text-center mb-20 animate-fade-up relative z-10">
                <span className="text-[var(--color-red)] font-bold tracking-widest uppercase text-sm mb-4 block">Témoignages</span>
                <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white leading-tight">
                    LA CONFIANCE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">SE MÉRITE</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 max-w-7xl mx-auto">
                {REVIEWS_DATA.slice(0, 3).map((review, i) => (
                    <div
                        key={review.id}
                        className="p-10 rounded-[var(--radius-xl)] bg-[var(--color-charcoal-light)] border border-white/5 flex flex-col relative group backdrop-blur-sm transition-all duration-500 hover:border-white/10 hover:bg-white/5"
                        style={{ animationDelay: `${i * 100}ms` }}
                    >
                        <div className="flex gap-1 mb-8">
                            {[...Array(5)].map((_, starIndex) => (
                                <Star
                                    key={starIndex}
                                    className={`w-4 h-4 ${starIndex < review.rating ? "text-[var(--color-red)] fill-current" : "text-gray-700"}`}
                                />
                            ))}
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed flex-grow relative z-10 font-light mb-8">
                            "{review.text}"
                        </p>

                        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                            <div>
                                <h4 className="font-bold text-white uppercase tracking-wide text-sm mb-1">{review.name}</h4>
                                <p className="text-xs text-gray-500 font-medium">{review.date}</p>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider font-bold opacity-50">
                                <CheckCircle2 className="w-4 h-4" />
                                <span>Vérifié</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
