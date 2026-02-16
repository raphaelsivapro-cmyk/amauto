'use client';

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Target, Users, Shield } from "lucide-react";

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="bg-[var(--color-charcoal)] min-h-screen">
                {/* Dynamic Hero */}
                <div className="relative pt-32 pb-32 px-4 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-charcoal)] via-[var(--color-charcoal)] to-black z-0" />
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.15),transparent_70%)] opacity-50 pointer-events-none" />

                    <div className="container mx-auto relative z-10 text-center">
                        <span className="text-[var(--color-red)] font-bold tracking-widest uppercase text-sm mb-4 block animate-fade-up">Notre Histoire</span>
                        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-8 tracking-tighter uppercase animate-fade-up animate-delay-100">
                            Passionnés de <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Mécanique</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed animate-fade-up animate-delay-200">
                            Fondé sur des valeurs de transparence et d'expertise, AM AUTO redéfinit l'expérience du garage automobile à Floirac.
                        </p>
                    </div>
                </div>

                {/* Values Grid */}
                <Section background="charcoal" className="pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Target, title: "Précision", desc: "Chaque diagnostic est réalisé avec des outils de pointe pour une intervention ciblée." },
                            { icon: Users, title: "Proximité", desc: "Un garage à taille humaine où chaque client est connu et accompagné personnellement." },
                            { icon: Shield, title: "Qualité", desc: "Nous n'utilisons que des pièces de rechange de qualité équivalente ou supérieure à l'origine." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 rounded-[var(--radius-xl)] bg-[var(--color-charcoal-light)] border border-white/5 hover:border-[var(--color-red)]/50 transition-all duration-300 group">
                                <div className="w-16 h-16 rounded-2xl bg-[var(--color-charcoal-lighter)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-red)] transition-colors duration-300 text-white shadow-lg">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Story Section */}
                <Section background="charcoal" className="py-24 border-t border-white/5">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <div className="relative rounded-[var(--radius-xl)] overflow-hidden aspect-square border border-white/5 shadow-2xl group">
                                <img
                                    src="https://images.unsplash.com/photo-1542851241-1191d4e022f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVjaGFuaWN8fHx8fHwxNjc3Njg1NjU0&ixlib=rb-4.0.3&q=80&w=1080"
                                    alt="Atelier AM Auto"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 space-y-8">
                            <h2 className="text-4xl font-extrabold text-white uppercase tracking-tight">Plus qu'un simple garage</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Chez AM AUTO, nous croyons que l'entretien de votre véhicule ne devrait pas être une source de stress. C'est pourquoi nous avons mis en place un processus clair, de la prise de rendez-vous à la restitution des clés.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Notre atelier à Floirac est équipé pour accueillir tous types de véhicules, des citadines aux berlines de luxe, en passant par les utilitaires.
                            </p>
                            <div className="h-1 w-24 bg-[var(--color-red)] mt-8 rounded-full" />
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
