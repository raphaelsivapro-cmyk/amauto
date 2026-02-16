'use client';

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";

const IMAGES = [
    { src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=1000", alt: "Vidange moteur" },
    { src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1000", alt: "Mécanique moteur" },
    { src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1000", alt: "Véhicule sport" },
    { src: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&q=80&w=1000", alt: "Atelier mécanique" },
    { src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1000", alt: "Freinage" },
    { src: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&q=80&w=1000", alt: "Pneus et roues" },
];

export default function GalleryPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                <div className="pt-32 pb-12 px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter mb-4 text-white">
                        Notre <span className="text-[var(--color-red)]">Atelier</span>
                    </h1>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg font-light">
                        Immersion au cœur de notre expertise technique.
                    </p>
                </div>

                <Section background="charcoal" className="pt-0 pb-24">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {IMAGES.map((img, idx) => (
                            <div key={idx} className="break-inside-avoid relative group rounded-[var(--radius-xl)] overflow-hidden border border-white/5">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <span className="text-white font-bold uppercase tracking-widest text-xs">{img.alt}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
