import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, Clock, Calendar } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SERVICES_DATA, FAQ_DATA } from "@/lib/data";

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
    const service = SERVICES_DATA.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    return (
        <>
            <Header />
            <main className="min-h-screen bg-[var(--color-off-white)]">
                {/* Hero */}
                <div className="relative h-[40vh] bg-[var(--color-charcoal)] flex items-center overflow-hidden">
                    <div
                        className="absolute inset-0 z-0 opacity-50 bg-cover bg-center"
                        style={{ backgroundImage: `url(${service.image || "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1000"})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)] to-transparent z-10" />
                    <div className="container relative z-20 px-4 md:px-6">
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-bold text-white uppercase bg-[var(--color-red)] rounded-full">
                            {service.category}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
                        <div className="flex items-center text-gray-300 gap-6">
                            <span className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-[var(--color-red)]" />
                                Environ {service.duration_minutes} min
                            </span>
                            <span className="text-xl font-bold text-white">
                                À partir de {service.price_from}€
                            </span>
                        </div>
                    </div>
                </div>

                <Section background="white">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-4 font-manrope">Description</h2>
                                <p className="text-[var(--color-slate-light)] text-lg leading-relaxed">
                                    {service.description}
                                </p>
                                <p className="text-[var(--color-slate-light)] mt-4 leading-relaxed">
                                    Chez AM AUTO, nous utilisons des pièces de qualité d'origine (OEM) pour garantir la performance et la fiabilité de votre véhicule.
                                    Nos techniciens qualifiés suivent scrupuleusement les préconisations des constructeurs.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-4 font-manrope">Ce qui est inclus</h2>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {["Pièces et main d'œuvre", "Garantie pièce 1 an", "Contrôle visuel offert", "Appoint liquides", "Essai routier", "Recyclage pièces usagées"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-gray-600">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="border-t pt-8">
                                <h2 className="text-2xl font-bold mb-4 font-manrope">Questions Fréquentes</h2>
                                <div className="space-y-4">
                                    {FAQ_DATA.slice(0, 2).map((faq, i) => (
                                        <div key={i} className="bg-gray-50 p-4 rounded-lg">
                                            <h3 className="font-bold mb-1">{faq.question}</h3>
                                            <p className="text-sm text-gray-600">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar CTA */}
                        <div className="lg:col-span-1">
                            <div className="bg-white p-6 rounded-[var(--radius-lg)] shadow-lg border border-gray-100 sticky top-24">
                                <h3 className="text-xl font-bold mb-4">Prendre Rendez-vous</h3>
                                <p className="text-sm text-gray-500 mb-6">
                                    Réservez votre créneau en ligne pour cette prestation. Confirmation immédiate par email.
                                </p>

                                <div className="flex flex-col gap-3">
                                    <Link href={`/rendez-vous?service=${service.slug}`} className="w-full">
                                        <Button className="w-full h-12 text-lg">
                                            <Calendar className="mr-2 w-5 h-5" />
                                            Réserver maintenant
                                        </Button>
                                    </Link>
                                    <Link href={`/devis?service=${service.slug}`} className="w-full">
                                        <Button variant="outline" className="w-full">
                                            Demander un devis détaillé
                                        </Button>
                                    </Link>
                                </div>

                                <div className="mt-6 pt-6 border-t text-center">
                                    <p className="text-sm text-gray-500 mb-2">Une question ?</p>
                                    <a href="tel:0634612212" className="text-[var(--color-red)] font-bold text-lg hover:underline">
                                        06 34 61 22 12
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
