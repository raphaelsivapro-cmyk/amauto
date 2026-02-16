'use client';

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const PRICING_PACKAGES = [
    {
        name: "Entretien Essentiel",
        price: "79€",
        description: "L'indispensable pour rouler sereinement.",
        features: ["Vidange huile moteur (5L)", "Remplacement filtre à huile", "20 points de contrôle", "Mise à niveau liquides"],
        recommended: false,
    },
    {
        name: "Révision Complète",
        price: "189€",
        description: "Le choix privilégié pour une longévité maximale.",
        features: ["Vidange huile moteur (5L)", "Remplacement tous filtres", "Diagnostic électronique", "Contrôle freinage complet", "Vidange liquide freins"],
        recommended: true,
    },
    {
        name: "Freinage Avant",
        price: "110€",
        description: "Sécurité optimale pour votre véhicule.",
        features: ["Remplacement plaquettes", "Contrôle disques", "Purge système", "Essai routier"],
        recommended: false,
    },
];

export default function PricingPage() {
    return (
        <>
            <Header />
            <main className="bg-[var(--color-charcoal)] min-h-screen">
                <div className="pt-32 pb-12 px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter mb-4 text-white">
                        Nos <span className="text-[var(--color-red)]">Tarifs</span>
                    </h1>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg font-light">
                        Transparence totale. Aucun coût caché.
                    </p>
                </div>

                <Section background="charcoal" className="pt-0 pb-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {PRICING_PACKAGES.map((pkg, idx) => (
                            <div
                                key={idx}
                                className={`relative p-8 rounded-[var(--radius-xl)] border flex flex-col ${pkg.recommended
                                        ? "bg-[var(--color-charcoal-light)] border-[var(--color-red)] shadow-[0_0_30px_rgba(220,38,38,0.15)] scale-105 z-10"
                                        : "bg-[var(--color-charcoal-lighter)] border-white/5 hover:border-white/10"
                                    }`}
                            >
                                {pkg.recommended && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-[var(--color-red)] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                                        Recommandé
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-2">{pkg.name}</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-sm text-gray-400">à partir de</span>
                                        <span className="text-4xl font-extrabold text-white">{pkg.price}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm mt-4 leading-relaxed">{pkg.description}</p>
                                </div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {pkg.features.map((feat, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                            <div className="mt-1 p-1 rounded-full bg-white/10 text-[var(--color-red)]">
                                                <Check className="w-3 h-3" />
                                            </div>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/devis" className="w-full">
                                    <Button variant={pkg.recommended ? "premium" : "outline"} className="w-full justify-center">
                                        Demander un Devis <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-16 max-w-2xl mx-auto p-6 rounded-[var(--radius-lg)] bg-white/5 border border-white/5">
                        <p className="text-gray-400 text-sm">
                            * Les prix indiqués sont TTC et peuvent varier selon le modèle de votre véhicule.
                            Pour un tarif précis, n'hésitez pas à faire une demande de devis gratuite.
                        </p>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
