'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Calendar, CheckCircle2, User, Car } from 'lucide-react';
import { cn } from '@/lib/utils';

const STEPS = [
    { number: 1, title: "Prestation", icon: Car },
    { number: 2, title: "Créneau", icon: Calendar },
    { number: 3, title: "Infos", icon: User },
];

export function BookingForm() {
    const [step, setStep] = useState(1);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
    const [formData, setFormData] = useState({
        service: '',
        date: '',
        slot: '',
        vehicle: '',
        name: '',
        phone: '',
        email: ''
    });

    const handleSubmit = async () => {
        setStatus('loading');
        await new Promise(r => setTimeout(r, 2000));
        setStatus('success');
    };

    if (status === 'success') {
        return (
            <div className="text-center p-12 bg-[var(--color-charcoal-light)] rounded-[var(--radius-xl)] border border-[var(--color-red)]/50 animate-fade-up">
                <div className="w-20 h-20 bg-[var(--color-red)] rounded-full flex items-center justify-center mx-auto mb-8 shadow-glow">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-tight">Rendez-vous Confirmé</h3>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    Un email de confirmation a été envoyé à {formData.email}.
                </p>
                <Button onClick={() => window.location.href = '/'} variant="outline">
                    Retour
                </Button>
            </div>
        );
    }

    return (
        <div className="bg-[var(--color-charcoal-light)] rounded-[var(--radius-xl)] border border-white/5 shadow-2xl overflow-hidden animate-fade-up">
            {/* Minimalist Stepper */}
            <div className="grid grid-cols-3 border-b border-white/5">
                {STEPS.map((s) => (
                    <div
                        key={s.number}
                        className={cn(
                            "py-6 text-center transition-colors duration-300 relative",
                            step === s.number ? "bg-white/5" : "bg-transparent"
                        )}
                    >
                        <div className={cn(
                            "text-xs font-bold uppercase tracking-widest mb-1 transition-colors",
                            step >= s.number ? "text-white" : "text-gray-600"
                        )}>
                            0{s.number}
                        </div>
                        <div className={cn(
                            "text-xs font-bold uppercase tracking-widest transition-colors",
                            step >= s.number ? "text-[var(--color-red)]" : "text-gray-600"
                        )}>
                            {s.title}
                        </div>
                        {/* Active Bottom Line */}
                        {step === s.number && (
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-red)]" />
                        )}
                    </div>
                ))}
            </div>

            <div className="p-6 md:p-10">
                {step === 1 && (
                    <div className="space-y-8 animate-fade-up">
                        <h3 className="text-xl font-bold text-white uppercase tracking-wide">Sélectionnez votre prestation</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {['Révision', 'Freinage', 'Pneumatiques', 'Distribution', 'Embrayage', 'Échappement', 'Climatisation', 'Amortisseurs', 'Batterie / Alternateur', 'Diagnostic', 'Autre'].map((service) => (
                                <button
                                    key={service}
                                    onClick={() => setFormData({ ...formData, service })}
                                    className={cn(
                                        "p-4 rounded-lg border text-left transition-all",
                                        formData.service === service
                                            ? "bg-white/10 border-[var(--color-red)] text-white"
                                            : "bg-black/20 border-white/5 text-gray-400 hover:bg-white/5"
                                    )}
                                >
                                    <span className="font-bold text-sm uppercase tracking-wide">{service}</span>
                                </button>
                            ))}
                        </div>
                        <div className="flex justify-end pt-4">
                            <Button onClick={() => setStep(2)} disabled={!formData.service} className="w-full md:w-auto">Suivant</Button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-8 animate-fade-up">
                        <h3 className="text-xl font-bold text-white uppercase tracking-wide">Date et Heure</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 block">Date</label>
                                <input
                                    type="date"
                                    className="w-full bg-black/20 border border-white/10 rounded-lg p-4 text-white focus:border-[var(--color-red)] outline-none transition-colors"
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 block">Heure</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'].map(slot => (
                                        <button
                                            key={slot}
                                            onClick={() => setFormData({ ...formData, slot })}
                                            className={cn(
                                                "py-3 rounded-lg border text-sm font-bold transition-colors",
                                                formData.slot === slot
                                                    ? "bg-[var(--color-red)] border-[var(--color-red)] text-white"
                                                    : "bg-black/20 border-white/5 text-gray-400 hover:text-white"
                                            )}
                                        >
                                            {slot}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between pt-8 border-t border-white/5">
                            <Button variant="ghost" onClick={() => setStep(1)} className="text-gray-400 hover:text-white">Retour</Button>
                            <Button onClick={() => setStep(3)} disabled={!formData.date || !formData.slot}>Suivant</Button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="space-y-8 animate-fade-up">
                        <h3 className="text-xl font-bold text-white uppercase tracking-wide">Vos informations</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Nom</label>
                                <input
                                    type="text"
                                    className="w-full bg-black/20 border border-white/10 rounded-lg p-4 text-white focus:border-[var(--color-red)] outline-none"
                                    placeholder="Votre Nom"
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Véhicule</label>
                                <input
                                    type="text"
                                    className="w-full bg-black/20 border border-white/10 rounded-lg p-4 text-white focus:border-[var(--color-red)] outline-none"
                                    placeholder="Modèle"
                                    onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-black/20 border border-white/10 rounded-lg p-4 text-white focus:border-[var(--color-red)] outline-none"
                                    placeholder="Email"
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Téléphone</label>
                                <input
                                    type="tel"
                                    className="w-full bg-black/20 border border-white/10 rounded-lg p-4 text-white focus:border-[var(--color-red)] outline-none"
                                    placeholder="Tél"
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="flex justify-between pt-8 border-t border-white/5">
                            <Button variant="ghost" onClick={() => setStep(2)} className="text-gray-400 hover:text-white">Retour</Button>
                            <Button onClick={handleSubmit} disabled={!formData.name || !formData.email}>
                                Confirmer
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
