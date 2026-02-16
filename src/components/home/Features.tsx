import { Section } from "@/components/ui/Section";
import { Clock, ShieldCheck, Wrench } from "lucide-react";

const FEATURES = [
    {
        icon: Clock,
        title: "Rapidité",
        stat: "24h",
        statLabel: "max d'immobilisation",
        description: "Vos interventions sont traitées rapidement pour minimiser le temps sans votre véhicule.",
    },
    {
        icon: ShieldCheck,
        title: "Transparence",
        stat: "0",
        statLabel: "surprise sur la facture",
        description: "Devis clair et détaillé avant toute intervention. Aucun coût caché, jamais.",
    },
    {
        icon: Wrench,
        title: "Expertise",
        stat: "100%",
        statLabel: "des marques couvertes",
        description: "Équipe formée aux dernières technologies pour entretenir tous types de véhicules.",
    },
];

export function Features() {
    return (
        <Section background="charcoal" className="relative z-10 py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-[var(--radius-2xl)] overflow-hidden">
                {FEATURES.map((feature, index) => (
                    <div
                        key={index}
                        className="group p-10 bg-[var(--color-charcoal)] hover:bg-[var(--color-charcoal-light)] transition-colors duration-500 relative"
                    >
                        <div className="relative z-10">
                            <feature.icon className="w-6 h-6 text-[var(--color-red)] mb-8" />

                            <div className="mb-6">
                                <span className="text-4xl font-extrabold text-white">{feature.stat}</span>
                                <span className="block text-xs text-gray-500 uppercase tracking-widest font-bold mt-1">{feature.statLabel}</span>
                            </div>

                            <h3 className="text-lg font-bold mb-3 text-white">{feature.title}</h3>
                            <p className="text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
