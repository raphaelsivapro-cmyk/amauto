import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center overflow-hidden noise">

            {/* Layered Background */}
            <div className="absolute inset-0 z-0">
                {/* Image */}
                <img
                    src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&q=80&w=2400"
                    alt="Atelier mécanique professionnel"
                    className="w-full h-full object-cover opacity-30"
                />
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.12),transparent_60%)]" />
            </div>

            <div className="container relative z-10 px-4">
                <div className="max-w-4xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass mb-10 animate-fade-up">
                        <span className="flex h-2 w-2 rounded-full bg-[var(--color-red)] shadow-[0_0_10px_var(--color-red)] animate-pulse" />
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-300">Atelier Mécanique · Floirac</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-[clamp(3rem,8vw,8rem)] font-extrabold tracking-[-0.04em] mb-8 leading-[0.9] animate-fade-up" style={{ animationDelay: '100ms' }}>
                        VOTRE ATELIER<br />
                        <span className="text-gradient-light">MÉCANIQUE</span>
                        <span className="text-[var(--color-red)]">.</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-12 leading-relaxed animate-fade-up font-light" style={{ animationDelay: '200ms' }}>
                        Expertise technique sans compromis. <br className="hidden md:block" />
                        Nous prenons soin de votre véhicule comme si c'était le nôtre.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
                        <Link href="/rendez-vous">
                            <Button size="xl" className="w-full sm:w-auto shadow-glow group px-8">
                                Prendre Rendez-vous
                                <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                        <Link href="/devis">
                            <Button variant="outline" size="xl" className="w-full sm:w-auto border-white/15 text-white hover:bg-white/10 px-8">
                                Demander un Devis
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll hint */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 animate-bounce">
                <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">Découvrir</span>
                <ChevronDown className="w-4 h-4" />
            </div>
        </section>
    );
}
