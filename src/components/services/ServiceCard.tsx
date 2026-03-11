import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

interface ServiceCardProps {
    service: {
        title: string;
        slug: string;
        description: string;
        price_from?: number;
        old_price?: number;
        promo_badge?: string;
        promo_desc?: string;
        duration_minutes?: number;
        image?: string;
        category: string;
    };
}

export function ServiceCard({ service }: ServiceCardProps) {
    return (
        <Link
            href={`/prestations/${service.slug}`}
            className="group flex flex-col h-full rounded-[var(--radius-xl)] bg-[var(--color-charcoal-light)] border border-white/5 overflow-hidden hover:border-[var(--color-red)]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-card)]"
        >
            <div className="aspect-video relative overflow-hidden">
                {service.image ? (
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full bg-[var(--color-charcoal-lighter)] flex items-center justify-center">
                        <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">AM AUTO</span>
                    </div>
                )}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-bold text-white uppercase tracking-wider border border-white/10">
                    {service.category}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[var(--color-red)] transition-colors uppercase tracking-tight">
                    {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                    {service.description}
                </p>

                {/* This flex-grow div pushes the footer to the bottom */}
                <div className="flex-grow">
                    {service.promo_badge && (
                        <div className="p-4 rounded-2xl bg-[var(--color-red)]/10 border border-[var(--color-red)]/20">
                            <p className="text-[var(--color-red)] font-black text-sm uppercase tracking-tight mb-1 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[var(--color-red)] animate-pulse" />
                                Offre du moment : {service.promo_badge}
                            </p>
                            {service.promo_desc && (
                                <p className="text-white/80 text-xs font-medium">{service.promo_desc}</p>
                            )}
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500 uppercase">{service.price_from ? "À partir de" : "Tarif"}</span>
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-white">{service.price_from ? `${service.price_from}€` : "Sur devis"}</span>
                            {service.old_price && (
                                <span className="text-sm text-gray-500 line-through decoration-[var(--color-red)]">{service.old_price}€</span>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {service.duration_minutes && (
                            <div className="flex items-center gap-1 text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                                <Clock className="w-3 h-3" />
                                {service.duration_minutes} min
                            </div>
                        )}
                        <div className="w-8 h-8 rounded-full bg-[var(--color-red)] text-white flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
