import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { SERVICES_DATA } from "@/lib/data";

export function ServicesPreview() {
    // We take the first 4 services for the preview
    const services = SERVICES_DATA.slice(0, 4);

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                        <ScrollReveal key={service.id} delay={index * 100}>
                            <Link href={`/prestations/${service.slug}`} className="group block">
                                <div className="relative h-[350px] rounded-3xl overflow-hidden border border-white/5 hover:border-red-500/30 transition-all duration-700 bg-black/40 backdrop-blur-sm">
                                    {/* Image */}
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0 opacity-60 group-hover:opacity-80"
                                    />

                                    {/* Advanced Overlays */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-700 group-hover:opacity-80" />
                                    <div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    {/* Content */}
                                    <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                                        {/* Top row */}
                                        <div className="flex items-start justify-between">
                                            <span className="text-[10px] font-black text-white/30 tracking-[0.3em] uppercase">0{index + 1}</span>
                                            <div className="w-12 h-12 rounded-full border border-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500 transform group-hover:rotate-45">
                                                <ArrowUpRight className="w-5 h-5 text-white group-hover:text-black transition-colors duration-500" />
                                            </div>
                                        </div>

                                        {/* Bottom */}
                                        <div className="transform transition-transform duration-700 group-hover:-translate-y-2">
                                            <span className="text-[10px] font-bold text-[var(--color-red)] uppercase tracking-widest mb-2 block">{service.category}</span>
                                            <h3 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tighter uppercase">{service.title}</h3>
                                            <p className="text-gray-400 text-sm max-w-sm font-medium line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottom Glow */}
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </Section>
    );
}
