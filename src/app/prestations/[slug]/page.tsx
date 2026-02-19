import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, Clock, Calendar, ArrowLeft, ShieldCheck, Zap, Gauge } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SERVICES_DATA, FAQ_DATA } from "@/lib/data";

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = SERVICES_DATA.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <>
            <Header />
            <main className="min-h-screen bg-[#09090b]">
                {/* Hero section specifically for details */}
                <div className="relative h-[60vh] flex items-center overflow-hidden mesh-gradient">
                    <div
                        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center grayscale-[0.2]"
                        style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent z-10" />

                    <div className="container relative z-20 px-6">
                        <Link href="/prestations" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group font-bold text-xs uppercase tracking-widest">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Retour aux prestations
                        </Link>

                        <div className="max-w-3xl">
                            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black text-white uppercase tracking-[0.2em] bg-[var(--color-red)] rounded-full shadow-glow">
                                {service.category}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
                                {service.title}
                                <span className="text-[var(--color-red)] text-glow">.</span>
                            </h1>

                            <div className="flex flex-wrap items-center gap-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10">
                                        <Clock className="w-6 h-6 text-[var(--color-red)]" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Durée estimée</p>
                                        <p className="text-white font-bold">{service.duration_minutes} min</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10">
                                        <Gauge className="w-6 h-6 text-[var(--color-red)]" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Investissement</p>
                                        <p className="text-white font-bold">À partir de {service.price_from}€</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Section className="pb-32 -mt-20" background="black">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-30">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-16">
                            <div className="bg-white/5 backdrop-blur-xl rounded-[40px] p-10 md:p-14 border border-white/10">
                                <h2 className="text-3xl font-black mb-8 tracking-tight flex items-center gap-4 text-white">
                                    <Zap className="w-8 h-8 text-[var(--color-red)]" />
                                    L'EXPERTISE AM AUTO
                                </h2>
                                <div className="prose prose-invert max-w-none">
                                    <p className="text-gray-300 text-xl leading-relaxed font-medium">
                                        {service.description}
                                    </p>
                                    <div className="h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent my-10" />
                                    <p className="text-gray-400 leading-relaxed italic border-l-2 border-[var(--color-red)] pl-6">
                                        Chaque intervention chez AM AUTO est réalisée avec une précision chirurgicale.
                                        Nous n'utilisons que des composants certifiés et suivons les protocoles les plus rigoureux du secteur.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { title: "Pièces Certifiées", icon: ShieldCheck, desc: "Composants d'origine ou qualité supérieure." },
                                    { title: "Garantie Totale", icon: CheckCircle, desc: "Interventions garanties 1 an pièces et main d'œuvre." },
                                    { title: "Transparence", icon: Gauge, desc: "Devis clair sans surprise avant chaque début de travaux." },
                                    { title: "Rapidité", icon: Zap, desc: "Respect strict des délais annoncés pour votre confort." }
                                ].map((item, i) => (
                                    <div key={i} className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-red-500/20 transition-colors group">
                                        <item.icon className="w-8 h-8 text-[var(--color-red)] mb-6 group-hover:scale-110 transition-transform" />
                                        <h3 className="text-lg font-black text-white mb-2">{item.title}</h3>
                                        <p className="text-gray-500 text-sm font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-8">
                                <h2 className="text-3xl font-black tracking-tight text-white">QUESTIONS FRÉQUENTES</h2>
                                <div className="space-y-4">
                                    {FAQ_DATA.slice(0, 3).map((faq, i) => (
                                        <details key={i} className="group glass rounded-2xl border border-white/5">
                                            <summary className="p-6 cursor-pointer list-none flex items-center justify-between">
                                                <span className="font-bold text-gray-200">{faq.question}</span>
                                                <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center transition-transform group-open:rotate-180">
                                                    <Calendar className="w-3 h-3" />
                                                </span>
                                            </summary>
                                            <div className="px-6 pb-6 text-gray-400 text-sm font-medium">
                                                {faq.answer}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-32 p-1 rounded-[40px] bg-gradient-to-br from-red-500/20 to-transparent">
                                <div className="bg-[#111113] p-10 rounded-[38px] border border-white/10 shadow-2xl">
                                    <h3 className="text-2xl font-black mb-4 tracking-tight uppercase">SÉCURISEZ VOTRE CRÉNEAU</h3>
                                    <p className="text-sm text-gray-500 mb-10 font-medium">
                                        Nos experts sont à votre disposition. Réservez en 2 minutes ou demandez une estimation immédiate.
                                    </p>

                                    <div className="space-y-4">
                                        <Link href={`/rendez-vous?service=${service.slug}`} className="block">
                                            <Button className="w-full h-16 text-sm font-black uppercase tracking-widest rounded-3xl shadow-glow">
                                                RÉSERVER MAINTENANT
                                            </Button>
                                        </Link>
                                        <Link href={`/devis?service=${service.slug}`} className="block">
                                            <Button variant="outline" className="w-full h-16 text-sm font-black uppercase tracking-widest rounded-3xl border-white/10 hover:bg-white/5">
                                                DEVIS DÉTAILLÉ
                                            </Button>
                                        </Link>
                                    </div>

                                    <div className="mt-12 pt-8 border-t border-white/5 text-center">
                                        <p className="text-[10px] uppercase font-bold text-gray-500 tracking-[0.2em] mb-4">LIGNE DIRECTE</p>
                                        <a href="tel:0634612212" className="text-2xl font-black text-white hover:text-[var(--color-red)] transition-colors text-glow">
                                            06 34 61 22 12
                                        </a>
                                    </div>
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
