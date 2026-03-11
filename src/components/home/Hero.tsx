'use client';

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Star, Car, Award } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[100svh] w-full flex flex-col justify-center overflow-hidden mesh-gradient pt-32 pb-16 md:pt-48 md:pb-16">
            {/* Cinematic Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/images/hero-video-poster.jpg"
                    className="w-full h-full object-cover opacity-[0.85]"
                >
                    <source
                        src="/hero-video.mp4"
                        type="video/mp4"
                    />
                </video>

                {/* Advanced Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/80 via-[#09090b]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_70%)]" />
            </div>

            <div className="container mx-auto relative z-10 px-6 md:px-8">
                <div className="max-w-4xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-10 animate-fade-up backdrop-blur-md">
                        <span className="flex h-2 w-2 rounded-full bg-[var(--color-red)] shadow-[0_0_10px_var(--color-red)]" />
                        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-300">Entretien & Réparation Multimarques · Floirac</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-[clamp(3rem,8vw,8rem)] font-black tracking-[-0.05em] mb-10 leading-[1.1] animate-fade-up" style={{ animationDelay: '100ms' }}>
                        <span className="block opacity-90">VOTRE ATELIER</span>
                        <span className="text-gradient-light text-glow-white">MÉCANIQUE</span>
                        <span className="text-[var(--color-red)] text-glow">.</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-gray-300/80 max-w-xl mb-14 leading-relaxed animate-fade-up font-medium" style={{ animationDelay: '200ms' }}>
                        Votre garagiste de confiance pour l'entretien, le diagnostic et la réparation de votre véhicule au quotidien.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
                        <Link href="/devis">
                            <Button size="xl" className="w-full sm:w-auto group px-10 rounded-full h-16 shadow-glow">
                                Devis sur mesure
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                        <Link href="/rendez-vous">
                            <Button variant="outline" size="xl" className="w-full sm:w-auto border-white/10 text-white hover:bg-white/[0.06] px-10 rounded-full h-16 backdrop-blur-md">
                                Réserver mon créneau
                            </Button>
                        </Link>
                    </div>
                </div>


                {/* Decorative Divider & Promos - Real centering without breaking vertical align */}
                <div className="w-full mt-16 pt-8 border-t border-white/[0.06] animate-fade-up flex justify-center" style={{ animationDelay: '450ms' }}>
                    <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-8 p-8 md:p-10 rounded-[2rem] bg-[var(--color-red)]/10 border border-[var(--color-red)]/20 shadow-[0_0_40px_rgba(220,38,38,0.2)] text-left">
                        <div className="flex items-center justify-center min-w-20 w-20 h-20 rounded-full bg-[var(--color-red)] text-white font-black text-3xl shadow-glow">
                            %
                        </div>
                        <div>
                            <p className="text-[var(--color-red)] font-black uppercase tracking-tight text-2xl md:text-3xl mb-3 text-glow">
                                Offre du moment : -20%
                            </p>
                            <p className="text-white text-lg md:text-xl font-bold mb-2">
                                Sur le Kit de distribution
                            </p>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-5">
                                <p className="text-gray-400 text-base font-medium">
                                    Valable du 11 mars au 11 avril 2026
                                </p>
                                <Link href="/prestations/distribution">
                                    <Button size="md" className="rounded-full shadow-glow text-sm uppercase tracking-wider font-bold h-11 px-6">
                                        Voir l'offre
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
