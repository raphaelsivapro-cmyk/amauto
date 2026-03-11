import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { SERVICES_DATA } from "@/lib/data";
import { ServiceCard } from "@/components/services/ServiceCard";

export function ServicesPreview() {
    // Show all 6 services on the homepage
    const services = SERVICES_DATA.slice(0, 6);

    return (
        <Section background="charcoal" className="py-32 relative overflow-hidden mesh-gradient">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

            <div className="container relative z-10">
                {/* Header */}
                <ScrollReveal className="mb-16">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                        <div>
                            <span className="text-[var(--color-red)] font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">Expertise Technique</span>
                            <h2 className="text-4xl md:text-6xl font-black leading-[0.9] tracking-tighter">
                                NOS <span className="text-gradient-light">PRESTATIONS</span>
                                <span className="text-[var(--color-red)] text-glow">.</span>
                            </h2>
                        </div>
                        <Link href="/prestations">
                            <Button variant="outline" className="border-white/10 text-gray-400 hover:text-white hover:bg-white/5 text-xs font-bold uppercase tracking-widest px-8 rounded-full h-12 group backdrop-blur-md">
                                Voir tous nos services
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </ScrollReveal>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ScrollReveal key={service.id} delay={index * 100}>
                            <ServiceCard service={service} />
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </Section>
    );
}
