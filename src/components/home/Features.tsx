'use client';

import { Section } from "@/components/ui/Section";
import { Clock, ShieldCheck, Wrench } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const FEATURES = [
    {
        icon: Clock,
        title: "Rapidité",
        stat: "24h",
        statLabel: "max d'immobilisation",
        description: "Interventions traitées rapidement pour minimiser le temps sans votre véhicule.",
    },
    {
        icon: ShieldCheck,
        title: "Transparence",
        stat: "0",
        statLabel: "surprise sur la facture",
        description: "Devis clair et détaillé avant toute intervention. Aucun coût caché.",
    },
    {
        icon: Wrench,
        title: "Expertise",
        stat: "100%",
        statLabel: "des marques couvertes",
        description: "Formés aux dernières technologies pour entretenir tous types de véhicules.",
    },
];

export function Features() {
    return (
        <Section background="charcoal" className="relative z-10 py-24">
            <ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
                    {FEATURES.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative p-10 bg-[var(--color-charcoal)] hover:bg-[#0f0f11] transition-colors duration-500"
                        >
                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-8 group-hover:border-[var(--color-red)]/30 transition-colors duration-500">
                                    <feature.icon className="w-4.5 h-4.5 text-[var(--color-red)]" strokeWidth={1.5} />
                                </div>

                                {/* Stat */}
                                <div className="mb-5">
                                    <span className="text-4xl font-extrabold text-white tracking-tight leading-none">{feature.stat}</span>
                                    <span className="block text-[10px] text-gray-500 uppercase tracking-[0.2em] font-semibold mt-1.5">{feature.statLabel}</span>
                                </div>

                                {/* Content */}
                                <p className="text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed text-[13px]">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollReveal>
        </Section>
    );
}
