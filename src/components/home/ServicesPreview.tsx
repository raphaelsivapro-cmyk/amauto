import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const SERVICES = [
    {
        number: "01",
        title: "Entretien & Révision",
        description: "Vidange, filtres, diagnostic électronique. Le suivi rigoureux pour la longévité de votre moteur.",
        href: "/prestations",
    },
    {
        number: "02",
        title: "Freinage & Sécurité",
        description: "Disques, plaquettes, amortisseurs. Votre sécurité ne tolère aucun compromis.",
        href: "/prestations",
    },
    {
        number: "03",
        title: "Pneumatiques",
        description: "Montage, équilibrage, réparation. Des pneus adaptés pour une tenue de route optimale.",
        href: "/prestations",
    },
];

export function ServicesPreview() {
    return (
        <Section background="charcoal" className="py-32 relative overflow-hidden">
            {/* Subtle BG */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(220,38,38,0.06),transparent_50%)] pointer-events-none" />

            <div className="container relative z-10">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <div>
                        <span className="text-[var(--color-red)] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Ce que nous faisons</span>
                        <h2 className="text-4xl md:text-6xl font-extrabold leading-[0.95]">
                            NOS <span className="text-gradient-light">SERVICES</span>
                        </h2>
                    </div>
                    <Link href="/prestations">
                        <Button variant="outline" className="border-white/10 text-white hover:bg-white/10 group">
                            <span>Tout voir</span>
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>

                {/* Service Items */}
                <div className="space-y-2">
                    {SERVICES.map((service, index) => (
                        <Link key={index} href={service.href} className="group block">
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 md:p-8 rounded-[var(--radius-xl)] border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all duration-300">
                                <div className="flex items-start md:items-center gap-6 md:gap-10">
                                    <span className="text-sm font-bold text-gray-600 font-mono">{service.number}</span>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[var(--color-red)] transition-colors mb-1">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm md:max-w-md">{service.description}</p>
                                    </div>
                                </div>
                                <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-[var(--color-red)] group-hover:translate-x-1 transition-all shrink-0" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Section>
    );
}
