'use client';

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="bg-[var(--color-charcoal)] min-h-screen">
                <div className="pt-32 pb-12 px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter mb-4 text-white">
                        Contactez <span className="text-[var(--color-red)]">Nous</span>
                    </h1>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg font-light">
                        Une question ? Un rendez-vous ? Notre équipe est à votre écoute pour vous accompagner.
                    </p>
                </div>

                <Section background="charcoal" className="pt-0 pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
                        {/* Contact Info Card */}
                        <div className="bg-[var(--color-charcoal-light)] border border-white/5 rounded-[var(--radius-xl)] p-10 flex flex-col justify-center shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-red)] rounded-full blur-[100px] opacity-10 pointer-events-none" />

                            <div className="space-y-10 relative z-10">
                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-red)] transition-colors duration-300 shrink-0">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Adresse</h3>
                                        <p className="text-gray-400 hover:text-white transition-colors">
                                            161 bis rue Emile Combes<br />33270 Floirac
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-red)] transition-colors duration-300 shrink-0">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Téléphone</h3>
                                        <a href="tel:0634612212" className="text-2xl font-bold text-white hover:text-[var(--color-red)] transition-colors">
                                            06 34 61 22 12
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-red)] transition-colors duration-300 shrink-0">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Email</h3>
                                        <a href="mailto:contact@am-auto.fr" className="text-gray-400 hover:text-[var(--color-red)] transition-colors">
                                            contact@am-auto.fr
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-red)] transition-colors duration-300 shrink-0">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Horaires</h3>
                                        <div className="text-gray-400 space-y-1">
                                            <p className="flex justify-between w-48"><span>Lun - Ven :</span> <span className="text-white">09:00 - 18:00</span></p>
                                            <p className="flex justify-between w-48"><span>Samedi :</span> <span className="text-white">09:00 - 18:00</span></p>
                                            <p className="flex justify-between w-48"><span>Dimanche :</span> <span className="text-[var(--color-red)] font-bold">Fermé</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="rounded-[var(--radius-xl)] overflow-hidden border border-white/5 shadow-2xl h-[500px] lg:h-auto grayscale hover:grayscale-0 transition-all duration-500 relative group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.467339794503!2d-0.5367896842445897!3d44.83244297909874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55263a23800001%3A0x629531980314050b!2sAM%20AUTO!5e0!3m2!1sen!2sfr!4v1677685654321!5m2!1sen!2sfr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            ></iframe>
                            <div className="absolute inset-0 bg-[var(--color-charcoal)]/20 pointer-events-none group-hover:bg-transparent transition-colors" />
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
