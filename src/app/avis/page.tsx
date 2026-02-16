'use client';

import * as React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Star, MessageSquarePlus, Quote } from "lucide-react";
import { REVIEWS_DATA } from "@/lib/data";

export default function ReviewsPage() {
    const [showForm, setShowForm] = React.useState(false);

    return (
        <>
            <Header />
            <main className="bg-[var(--color-charcoal)] min-h-screen">
                {/* Header */}
                <div className="pt-32 pb-12 px-4 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
                    <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter mb-4 text-white relative z-10">
                        Avis <span className="text-[var(--color-red)]">Clients</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light relative z-10">
                        La satisfaction de nos clients est notre meilleure publicité. Découvrez leurs retours d'expérience.
                    </p>
                </div>

                {/* CTA */}
                <div className="text-center mb-16 relative z-10">
                    <Button
                        onClick={() => setShowForm(!showForm)}
                        size="xl"
                        variant="premium"
                        className="shadow-[var(--shadow-glow)]"
                    >
                        <MessageSquarePlus className="mr-2 w-5 h-5" />
                        Laisser un avis
                    </Button>
                </div>

                {/* Form (Hidden/Shown) */}
                {showForm && (
                    <Section background="charcoal" className="py-8 animate-fade-up">
                        <div className="max-w-xl mx-auto p-8 rounded-[var(--radius-xl)] border border-white/10 bg-white/5 backdrop-blur-md">
                            <h3 className="text-2xl font-bold text-white mb-6 uppercase">Votre Expérience</h3>
                            <form className="space-y-4">
                                <input type="text" placeholder="Votre Nom" className="w-full p-4 rounded-lg bg-black/20 border border-white/10 text-white placeholder:text-gray-500 focus:border-[var(--color-red)] outline-none transition-colors" />
                                <div className="flex gap-2 text-gray-400">
                                    <span>Note :</span>
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-6 h-6 hover:text-[var(--color-red)] cursor-pointer transition-colors" />)}
                                </div>
                                <textarea placeholder="Votre message..." rows={4} className="w-full p-4 rounded-lg bg-black/20 border border-white/10 text-white placeholder:text-gray-500 focus:border-[var(--color-red)] outline-none transition-colors" />
                                <Button className="w-full">Publier</Button>
                            </form>
                        </div>
                    </Section>
                )}

                {/* Reviews Grid */}
                <Section background="charcoal" className="pt-0 pb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {REVIEWS_DATA.map((review, i) => (
                            <div
                                key={review.id}
                                className="p-8 rounded-[var(--radius-xl)] bg-[var(--color-charcoal-light)] border border-white/5 relative group hover:border-[var(--color-red)]/30 transition-all duration-300 hover:-translate-y-1"
                            >
                                <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-[var(--color-red)]/10 transition-colors" />

                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, starIndex) => (
                                        <Star
                                            key={starIndex}
                                            className={`w-4 h-4 ${starIndex < review.rating ? "text-[var(--color-red)] fill-current" : "text-gray-700"}`}
                                        />
                                    ))}
                                </div>

                                <p className="text-gray-300 italic mb-8 leading-relaxed relative z-10">"{review.text}"</p>

                                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-charcoal-lighter)] to-black flex items-center justify-center font-bold text-white border border-white/10">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white uppercase tracking-wide text-sm">{review.name}</h4>
                                        <p className="text-xs text-gray-500">{review.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
