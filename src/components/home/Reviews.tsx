'use client';

import { Section } from "@/components/ui/Section";
import { Star, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect } from "react";

export function Reviews() {
    return (
        <Section background="charcoal" className="py-28 relative overflow-hidden">
            <style dangerouslySetInnerHTML={{
                __html: `
                /* Attempt to hide Elfsight branding links globally without hiding the widget */
                a[href*="elfsight"], .eapps-link { display: none !important; }
            `}} />

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
                        <span className="text-xs text-gray-400">Vos avis sur <span className="text-white font-semibold">Google</span></span>
                    </div>
                </div>
            </ScrollReveal>

            <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-0">
                <ScrollReveal delay={200}>
                    {/* Elfsight Google Reviews Widget */}
                    <script src="https://static.elfsight.com/platform/platform.js" async></script>
                    <div className="elfsight-app-861e8a1e-f281-417f-b963-ccf72903d836" data-elfsight-app-lazy></div>
                </ScrollReveal>
            </div>
        </Section>
    );
}
