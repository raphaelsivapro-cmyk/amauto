'use client';

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Star, Car, Award } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[100svh] w-full flex flex-col justify-center overflow-hidden mesh-gradient pt-32 pb-16 md:py-32">
            {/* Cinematic Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60 grayscale-[0.3] contrast-[1.2]"
                >
                    <source
                        src="https://cdn.pixabay.com/video/2020/10/20/52943-471336849_large.mp4"
                        type="video/mp4"
                    />
                </video>

                {/* Advanced Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_70%)]" />
            </div>

            <div className="container relative z-10 px-6 md:px-8">
                <div className="max-w-4xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-10 animate-fade-up backdrop-blur-md">
                        <span className="flex h-2 w-2 rounded-full bg-[var(--color-red)] shadow-[0_0_10px_var(--color-red)]" />
                        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-300">Atelier Haute Performance · Floirac</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-[clamp(3rem,8vw,8rem)] font-black tracking-[-0.05em] mb-10 leading-[1.1] animate-fade-up" style={{ animationDelay: '100ms' }}>
                        <span className="block opacity-90">VOTRE ATELIER</span>
                        <span className="text-gradient-light text-glow-white">MÉCANIQUE</span>
                        <span className="text-[var(--color-red)] text-glow">.</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-gray-300/80 max-w-xl mb-14 leading-relaxed animate-fade-up font-medium" style={{ animationDelay: '200ms' }}>
                        L&apos;excellence technique au service de votre passion.
                        Entretien, diagnostic et performance pour conducteurs exigeants.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
                        <Link href="/rendez-vous">
                            <Button size="xl" className="w-full sm:w-auto group px-10 rounded-full h-16 shadow-glow">
                                Réserver mon créneau
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                        <Link href="/devis">
                            <Button variant="outline" size="xl" className="w-full sm:w-auto border-white/10 text-white hover:bg-white/[0.06] px-10 rounded-full h-16 backdrop-blur-md">
                                Devis Flash
                            </Button>
                        </Link>
                    </div>

                    {/* Decorative Divider & Promos */}
                    <div className="mt-20 pt-10 border-t border-white/[0.06] animate-fade-up" style={{ animationDelay: '450ms' }}>
                        <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 md:p-8 rounded-3xl bg-[var(--color-red)]/10 border border-[var(--color-red)]/20 shadow-[0_0_30px_rgba(220,38,38,0.15)]">
                            <div className="flex items-center justify-center min-w-16 w-16 h-16 rounded-full bg-[var(--color-red)] text-white font-black text-2xl shadow-glow">
                                %
                            </div>
                            <div>
                                <p className="text-[var(--color-red)] font-black uppercase tracking-tight text-xl md:text-2xl mb-2 text-glow">
                                    Offre du moment : -20%
                                </p>
                                <p className="text-white text-base md:text-lg font-bold mb-1">
                                    Sur le Kit de distribution & kit d'accessoires
                                </p>
                                <p className="text-gray-400 text-sm font-medium">
                                    Valable du 11 mars au 11 avril
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
