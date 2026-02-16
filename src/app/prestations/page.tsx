'use client';

import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SERVICES_DATA } from "@/lib/data";
import { Section } from "@/components/ui/Section";

const CATEGORIES = [
    { label: "Tout voir", value: "all" },
    { label: "Entretien", value: "entretien" },
    { label: "Pneumatiques", value: "pneumatiques" },
    { label: "Réparations", value: "reparations" },
    { label: "Autres", value: "autres" },
];

export default function ServicesPage() {
    const [activeCategory, setActiveCategory] = React.useState("all");

    const filteredServices = activeCategory === "all"
        ? SERVICES_DATA
        : SERVICES_DATA.filter(s => s.category === activeCategory);

    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Header */}
                <div className="pt-32 pb-12 px-4 text-center relative">
                    <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter mb-4">
                        Nos <span className="text-[var(--color-red)]">Prestations</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
                        Performance, sécurité et esthétique. Découvrez l'expertise AM AUTO.
                    </p>
                </div>

                {/* Filters */}
                <div className="sticky top-[72px] z-40 glass border-y border-white/5 py-4 mb-8">
                    <div className="container mx-auto px-4 overflow-x-auto">
                        <div className="flex gap-2 justify-center min-w-max">
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat.value}
                                    onClick={() => setActiveCategory(cat.value)}
                                    className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 ${activeCategory === cat.value
                                        ? "bg-[var(--color-red)] text-white shadow-glow"
                                        : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <Section background="charcoal" className="pt-0 min-h-[50vh]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredServices.map(service => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                    {filteredServices.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">Aucun service dans cette catégorie.</p>
                        </div>
                    )}
                </Section>
            </main>
            <Footer />
        </>
    );
}
