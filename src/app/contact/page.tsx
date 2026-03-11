'use client';

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Clock, Send, CheckCircle2, AlertCircle, Loader2, Navigation } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactPage() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus('loading');

        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "551b3d41-b012-4e86-8c60-9059c58bb316");
        formData.append("subject", "Nouvelle demande de contact depuis le site web");
        formData.append("from_name", "AM AUTO - Site Web");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                setStatus('success');
                (event.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    }

    return (
        <>
            <Header />
            <main className="bg-black min-h-screen pt-32 pb-24 relative overflow-hidden">
                {/* Background effects */}
                <div className="absolute top-0 left-1/2 -top-40 -translate-x-1/2 w-[1000px] h-[500px] bg-[var(--color-red)]/20 rounded-[100%] blur-[120px] opacity-50 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="container px-4 md:px-6 relative z-10">

                    {/* Page Header */}
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <ScrollReveal>
                            <span className="text-[var(--color-red)] font-black tracking-[0.2em] uppercase text-xs mb-4 block">Nous Contacter</span>
                            <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-black tracking-[-0.03em] mb-6 leading-none text-white">
                                NOTRE ÉQUIPE<br />
                                <span className="text-gradient-light">À VOTRE ÉCOUTE</span><span className="text-[var(--color-red)]">.</span>
                            </h1>
                            <p className="text-gray-400 text-lg md:text-xl font-light">
                                Une urgence mécanique, un projet d'entretien ou une simple question ?
                                Remplissez le formulaire ci-dessous ou appelez-nous directement.
                            </p>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                        {/* Info Cards Column */}
                        <div className="lg:col-span-4 flex flex-col gap-6">
                            <ScrollReveal delay={100}>
                                <div className="p-8 rounded-3xl glass border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors">
                                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <Phone className="w-24 h-24" />
                                    </div>
                                    <div className="w-14 h-14 rounded-2xl bg-[var(--color-red)]/10 flex items-center justify-center mb-6 text-[var(--color-red)] border border-[var(--color-red)]/20">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-white font-bold text-xl mb-2">Appelez-nous</h3>
                                    <p className="text-gray-400 mb-6 text-sm">Pour les urgences et prises de rendez-vous immédiates.</p>
                                    <a href="tel:0634612212" className="inline-block text-2xl font-black text-white hover:text-[var(--color-red)] transition-colors tracking-tight">
                                        06 34 61 22 12
                                    </a>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={200}>
                                <div className="p-8 rounded-3xl glass border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-white border border-white/10">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-white font-bold text-xl mb-4">Horaires d'ouverture</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-400">Lundi - Vendredi</span>
                                            <span className="text-white font-semibold">09h00 — 18h00</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-400">Samedi - Dimanche</span>
                                            <span className="text-[var(--color-red)] font-semibold">Fermé</span>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Middle Column: Form */}
                        <div className="lg:col-span-8">
                            <ScrollReveal delay={300} className="h-full">
                                <div className="p-8 md:p-12 rounded-3xl bg-[#0a0a0c] border border-white/5 shadow-2xl h-full relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-red)]/10 rounded-full blur-[100px] pointer-events-none" />

                                    <h2 className="text-2xl font-bold text-white mb-8">Envoyez-nous un message</h2>

                                    {status === 'success' ? (
                                        <div className="flex flex-col items-center justify-center text-center h-[500px] animate-fade-in">
                                            <div className="w-20 h-20 bg-[var(--color-red)]/10 rounded-full flex items-center justify-center mb-6 border border-[var(--color-red)]/20">
                                                <CheckCircle2 className="w-10 h-10 text-[var(--color-red)]" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
                                            <p className="text-gray-400 max-w-sm">Notre équipe a bien reçu votre demande et reviendra vers vous dans les plus brefs délais.</p>
                                            <Button onClick={() => setStatus('idle')} variant="outline" className="mt-8 border-white/10 text-white">
                                                Nouveau message
                                            </Button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="space-y-2">
                                                    <label htmlFor="name" className="text-sm font-bold tracking-wide text-white uppercase ml-1">Nom complet</label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        required
                                                        className="w-full h-14 bg-white/5 border border-white/5 rounded-2xl px-5 text-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-[var(--color-red)]/50 focus:bg-white/10 transition-all font-medium"
                                                        placeholder="Jean Dupont"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label htmlFor="phone" className="text-sm font-bold tracking-wide text-white uppercase ml-1">Téléphone</label>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        name="phone"
                                                        required
                                                        className="w-full h-14 bg-white/5 border border-white/5 rounded-2xl px-5 text-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-[var(--color-red)]/50 focus:bg-white/10 transition-all font-medium"
                                                        placeholder="06 12 34 56 78"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-bold tracking-wide text-white uppercase ml-1">Email</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    className="w-full h-14 bg-white/5 border border-white/5 rounded-2xl px-5 text-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-[var(--color-red)]/50 focus:bg-white/10 transition-all font-medium"
                                                    placeholder="jean.dupont@email.com"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="message" className="text-sm font-bold tracking-wide text-white uppercase ml-1">Votre message</label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    required
                                                    rows={5}
                                                    className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-[var(--color-red)]/50 focus:bg-white/10 transition-all resize-none font-medium"
                                                    placeholder="Décrivez votre besoin (révision, problème moteur, devis...)"
                                                />
                                            </div>

                                            {status === 'error' && (
                                                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-500">
                                                    <AlertCircle className="w-5 h-5 shrink-0" />
                                                    <p className="text-sm">Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter par téléphone.</p>
                                                </div>
                                            )}

                                            <Button
                                                type="submit"
                                                size="xl"
                                                className="w-full shadow-glow !h-14 font-bold"
                                                disabled={status === 'loading'}
                                            >
                                                {status === 'loading' ? (
                                                    <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Envoi en cours...</>
                                                ) : (
                                                    <>Envoyer le message <Send className="ml-2 w-4 h-4" /></>
                                                )}
                                            </Button>
                                        </form>
                                    )}
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>

                    {/* Full Width Map Section */}
                    <ScrollReveal delay={400}>
                        <div className="mt-8 rounded-3xl overflow-hidden glass border border-white/5 relative group">
                            <div className="absolute top-6 left-6 z-20 glass p-6 rounded-2xl border border-white/10 shadow-2xl max-w-sm hidden md:block backdrop-blur-xl bg-black/40">
                                <h3 className="text-white font-bold text-xl mb-2 flex items-center gap-2">
                                    <MapPin className="text-[var(--color-red)] w-5 h-5" />
                                    L'Atelier AM AUTO
                                </h3>
                                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                    Situé au cœur de Floirac, notre atelier est facilement accessible et dispose d'un parking réservé à notre clientèle.
                                </p>
                                <a
                                    href="https://maps.google.com/?q=161+bis+rue+Emile+Combes,+33270+Floirac"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                                >
                                    Itinéraire Maps <Navigation className="w-4 h-4" />
                                </a>
                            </div>

                            <div className="h-[400px] md:h-[500px] w-full relative grayscale invert-[90%] hue-rotate-180 opacity-80 hover:opacity-100 hover:grayscale-0 hover:invert-0 hover:hue-rotate-0 transition-all duration-1000 ease-in-out cursor-pointer pointer-events-auto z-10">
                                <iframe
                                    src="https://maps.google.com/maps?q=161%20bis%20rue%20Emile%20Combes,%2033270%20Floirac&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full object-cover"
                                ></iframe>
                            </div>

                            {/* Mobile Maps Button */}
                            <div className="md:hidden p-4 bg-[#0a0a0c] border-t border-white/5 flex justify-center z-20 relative">
                                <a
                                    href="https://maps.google.com/?q=161+bis+rue+Emile+Combes,+33270+Floirac"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3 glass border border-white/10 text-white font-semibold rounded-xl"
                                >
                                    Ouvrir dans Google Maps <Navigation className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>

                </div>
            </main>
            <Footer />
        </>
    );
}
