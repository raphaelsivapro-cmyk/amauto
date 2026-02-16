'use client';

import { Suspense } from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { Section } from "@/components/ui/Section";

export default function QuotePage() {
    return (
        <>
            <Header />
            <main className="bg-[var(--color-charcoal)] min-h-screen">
                <div className="pt-32 pb-12 px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter mb-4 text-white">
                        Demande de <span className="text-[var(--color-red)]">Devis</span>
                    </h1>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg font-light">
                        Gratuit et sans engagement. Réponse sous 24h.
                    </p>
                </div>

                <Section background="charcoal" className="pt-0 pb-24">
                    <div className="max-w-3xl mx-auto">
                        <Suspense fallback={<div className="text-white text-center">Chargement...</div>}>
                            <QuoteForm />
                        </Suspense>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
