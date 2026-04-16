'use client';

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Star, Car, Award, Clock, Settings, Shield } from "lucide-react";

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


                {/* Decorative Divider & Promos */}
                <div className="w-full mt-16 pt-8 border-t border-white/[0.06] animate-fade-up flex justify-center px-4" style={{ animationDelay: '450ms' }}>
                    <div className="w-full max-w-6xl lg:max-w-7xl p-6 md:p-10 rounded-[2.5rem] bg-gradient-to-b from-white/[0.04] to-black/60 border border-white/[0.08] shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden backdrop-blur-xl">
                        {/* Soft Glow Background */}
                        <div className="absolute -top-[150px] -right-[100px] w-[300px] h-[300px] bg-red-500/15 blur-[120px] rounded-full pointer-events-none" />
                        
                        {/* Header Box */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-white/[0.06] pb-6 relative z-10">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 md:gap-6">
                                <div className="flex flex-shrink-0 items-center justify-center min-w-[4rem] w-16 h-16 md:w-20 md:h-20 md:text-4xl rounded-2xl bg-red-600 border border-red-400/50 text-white font-black text-3xl shadow-[0_0_30px_rgba(239,68,68,0.4)]">
                                    %
                                </div>
                                <div className="flex flex-col items-center sm:items-start">
                                    <h3 className="text-white font-black uppercase tracking-tight text-2xl md:text-4xl mb-3 sm:mb-2 flex flex-wrap justify-center sm:justify-start items-center gap-x-3 gap-y-3">
                                        Offre du <span className="text-red-500 text-glow">moment</span>
                                        <span className="inline-flex px-4 md:px-5 py-1.5 md:py-2 bg-red-600 text-white shadow-[0_0_20px_rgba(239,68,68,0.5)] border border-red-400/80 rounded-xl font-black tracking-widest text-lg md:text-2xl md:translate-y-[-2px]">
                                            -20%
                                        </span>
                                    </h3>
                                    <div className="inline-flex items-center justify-center sm:justify-start gap-2 px-3.5 py-1.5 bg-black/40 border border-white/5 rounded-full shadow-inner">
                                        <Clock className="w-3.5 h-3.5 text-[var(--color-red)] animate-pulse flex-shrink-0" />
                                        <span className="text-gray-300 text-sm font-semibold tracking-wide">
                                            Valable du 15 avril au 15 mai
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Offers Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 relative z-10">
                            {/* Offer 1 */}
                            <div className="flex flex-col h-full bg-black/40 border border-white/5 hover:border-[var(--color-red)]/30 rounded-[1.5rem] p-6 md:p-8 hover:bg-white/[0.02] transition-all duration-300 group hover:shadow-[0_0_30px_rgba(220,38,38,0.1)]">
                                <div className="flex items-start gap-4 mb-6 md:mb-8">
                                    <div className="w-12 h-12 rounded-[1rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:bg-red-500/10 group-hover:border-red-500/30 transition-all duration-500">
                                        <Settings className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-red-500 font-black text-[1.1rem] md:text-xl uppercase tracking-tight mb-1">Kit de distribution</h4>
                                        <p className="text-sm md:text-base text-gray-400 font-medium leading-snug">Pompe à eau incluse</p>
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    <Link href="/prestations/distribution" className="block">
                                        <Button size="sm" variant="outline" className="w-full h-12 md:h-14 flex justify-between items-center bg-transparent border-white/10 text-gray-300 hover:text-white hover:border-red-500 hover:bg-red-600 group-hover:border-red-500/50 rounded-xl transition-all duration-300 font-bold uppercase tracking-wider text-xs md:text-sm">
                                            Voir l'offre
                                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Offer 2 */}
                             <div className="flex flex-col h-full bg-black/40 border border-white/5 hover:border-[var(--color-red)]/30 rounded-[1.5rem] p-6 md:p-8 hover:bg-white/[0.02] transition-all duration-300 group hover:shadow-[0_0_30px_rgba(220,38,38,0.1)]">
                                <div className="flex items-start gap-4 mb-6 md:mb-8">
                                    <div className="w-12 h-12 rounded-[1rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:bg-red-500/10 group-hover:border-red-500/30 transition-all duration-500">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-red-500 font-black text-[1.1rem] md:text-xl uppercase tracking-tight mb-1">Disques & Plaquettes</h4>
                                        <p className="text-sm md:text-base text-gray-400 font-medium leading-snug">Système de freinage</p>
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    <Link href="/prestations/freinage" className="block">
                                        <Button size="sm" variant="outline" className="w-full h-12 md:h-14 flex justify-between items-center bg-transparent border-white/10 text-gray-300 hover:text-white hover:border-red-500 hover:bg-red-600 group-hover:border-red-500/50 rounded-xl transition-all duration-300 font-bold uppercase tracking-wider text-xs md:text-sm">
                                            Voir l'offre
                                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
