import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

interface ServiceCardProps {
    service: {
        title: string;
        slug: string;
        description: string;
        price_from: number;
        duration_minutes: number;
        image?: string;
        category: string;
    };
}

export function ServiceCard({ service }: ServiceCardProps) {
    return (
        <Link
            href={`/prestations/${service.slug}`}
            className="group block rounded-[var(--radius-xl)] bg-[var(--color-charcoal-light)] border border-white/5 overflow-hidden hover:border-[var(--color-red)]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-card)]"
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

            <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[var(--color-red)] transition-colors uppercase tracking-tight">
                    {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                    {service.description}
                </p>

                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500 uppercase">À partir de</span>
                        <span className="text-xl font-bold text-white">{service.price_from}€</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                            <Clock className="w-3 h-3" />
                            {service.duration_minutes} min
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[var(--color-red)] text-white flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
