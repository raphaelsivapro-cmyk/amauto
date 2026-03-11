'use client';

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Phone, Clock, MapPin } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="bg-black min-h-screen pt-32 pb-24 relative overflow-hidden flex flex-col items-center justify-center">
                {/* Background effects */}
                <div className="absolute top-0 left-1/2 -top-40 -translate-x-1/2 w-[1000px] h-[500px] bg-[var(--color-red)]/20 rounded-[100%] blur-[120px] opacity-50 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                
                <div className="container px-4 md:px-6 relative z-10 w-full max-w-5xl">
                    
                    {/* Page Header */}
                    <div className="text-center mb-16">
                        <ScrollReveal>
                            <span className="text-[var(--color-red)] font-black tracking-[0.2em] uppercase text-xs mb-4 block">Nous Contacter</span>
                            <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-black tracking-[-0.03em] mb-6 leading-none text-white">
                                NOTRE ÉQUIPE<br/>
                                <span className="text-gradient-light">À VOTRE ÉCOUTE</span><span className="text-[var(--color-red)]">.</span>
                            </h1>
                            <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
                                Une urgence mécanique ou un projet d'entretien ? 
                                Retrouvez-nous directement à l'atelier ou appelez-nous.
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* Info Cards Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        
                        <ScrollReveal delay={100} className="h-full">
                            <div className="p-8 rounded-3xl glass border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors h-full flex flex-col justify-between">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Phone className="w-32 h-32" />
                                </div>
                                <div>
                                    <div className="w-14 h-14 rounded-2xl bg-[var(--color-red)]/10 flex items-center justify-center mb-6 text-[var(--color-red)] border border-[var(--color-red)]/20">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-white font-bold text-xl mb-2">Appelez-nous</h3>
                                    <p className="text-gray-400 mb-6 text-sm">Pour les prises de rendez-vous immédiates.</p>
                                </div>
                                <a href="tel:0634612212" className="inline-block text-2xl font-black text-white hover:text-[var(--color-red)] transition-colors tracking-tight mt-auto">
                                    06 34 61 22 12
                                </a>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={200} className="h-full">
                            <div className="p-8 rounded-3xl glass border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors h-full flex flex-col justify-between">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Clock className="w-32 h-32" />
                                </div>
                                <div>
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-white border border-white/10">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-white font-bold text-xl mb-4">Horaires d'ouverture</h3>
                                </div>
                                <div className="space-y-3 mt-auto">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-400">Lundi - Vendredi</span>
                                        <span className="text-white font-semibold flex-1 text-right">09h00 — 18h00</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-400">Samedi - Dimanche</span>
                                        <span className="text-[var(--color-red)] font-semibold flex-1 text-right">Fermé</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={300} className="h-full">
                            <div className="p-8 rounded-3xl glass border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors h-full flex flex-col justify-between">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <MapPin className="w-32 h-32" />
                                </div>
                                <div>
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-white border border-white/10">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-white font-bold text-xl mb-2">L'Atelier</h3>
                                    <p className="text-gray-400 mb-6 text-sm">161 bis rue Emile Combes, 33270 Floirac</p>
                                </div>
                                <a 
                                    href="https://maps.google.com/?q=161+bis+rue+Emile+Combes,+33270+Floirac" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="inline-block text-lg font-bold text-white hover:text-[var(--color-red)] transition-colors mt-auto underline underline-offset-4 decoration-white/20 hover:decoration-[var(--color-red)]"
                                >
                                    Itinéraire Google Maps →
                                </a>
                            </div>
                        </ScrollReveal>
                        
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
