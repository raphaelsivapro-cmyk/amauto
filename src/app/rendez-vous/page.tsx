'use client';

import { Suspense } from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingForm } from "@/components/booking/BookingForm";
import { Section } from "@/components/ui/Section";

export default function BookingPage() {
    return (
        <>
            <Header />
            <main className="bg-[var(--color-charcoal)] min-h-screen">
                <div className="pt-32 pb-12 px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter mb-4 text-white">
                        Prendre <span className="text-[var(--color-red)]">Rendez-vous</span>
                    </h1>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg font-light">
                        Choisissez le créneau qui vous convient. Simple et rapide.
                    </p>
                </div>

                <Section background="charcoal" className="pt-0 pb-24">
                    <div className="max-w-4xl mx-auto">
                        <Suspense fallback={<div className="text-white text-center">Chargement...</div>}>
                            <BookingForm />
                        </Suspense>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
