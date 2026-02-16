'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function QuoteForm() {
    const searchParams = useSearchParams();
    const servicePreselected = searchParams.get('service');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        vehicle_model: '',
        service_type: servicePreselected || '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API call
        console.log("Submitting quote:", formData);
        await new Promise(r => setTimeout(r, 1500));
        setStatus('success');
    };

    if (status === 'success') {
        return (
            <div className="text-center p-12 bg-[var(--color-charcoal-light)] rounded-[var(--radius-xl)] border border-[var(--color-red)]/50 animate-fade-up">
                <div className="w-20 h-20 bg-[var(--color-red)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 uppercase">Demande Reçue</h3>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    Merci {formData.name}. Notre équipe va étudier votre demande et vous répondra sous 24h ouvrées.
                </p>
                <Button onClick={() => setStatus('idle')} variant="outline">
                    Nouvelle demande
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-[var(--color-charcoal-light)] p-8 md:p-12 rounded-[var(--radius-xl)] border border-white/5 shadow-2xl space-y-8 animate-fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Nom Complet</label>
                    <input
                        type="text"
                        required
                        className="w-full bg-black/20 border border-white/10 rounded-lg p-4 text-white placeholder:text-gray-600 focus:border-[var(--color-red)] focus:ring-1 focus:ring-[var(--color-red)] outline-none transition-all"
                        placeholder="Jean Dupont"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email</label>
                    <input
                        type="email"
                        required
                        className="w-full bg-black/20 border border-white/10 rounded-lg p-4 text-white placeholder:text-gray-600 focus:border-[var(--color-red)] focus:ring-1 focus:ring-[var(--color-red)] outline-none transition-all"
                        placeholder="jean@exemple.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Téléphone</label>
                    <input
                        type="tel"
                        required
                        className="w-full bg-black/20 border border-white/10 rounded-lg p-4 text-white placeholder:text-gray-600 focus:border-[var(--color-red)] focus:ring-1 focus:ring-[var(--color-red)] outline-none transition-all"
                        placeholder="06 00 00 00 00"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Modèle Véhicule</label>
                    <input
                        type="text"
                        required
                        className="w-full bg-black/20 border border-white/10 rounded-lg p-4 text-white placeholder:text-gray-600 focus:border-[var(--color-red)] focus:ring-1 focus:ring-[var(--color-red)] outline-none transition-all"
                        placeholder="Ex: Peugeot 308, BMW Série 3..."
                        value={formData.vehicle_model}
                        onChange={e => setFormData({ ...formData, vehicle_model: e.target.value })}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Type de prestation</label>
                <select
                    className="w-full bg-black/20 border border-white/10 rounded-lg p-4 text-white focus:border-[var(--color-red)] focus:ring-1 focus:ring-[var(--color-red)] outline-none transition-all appearance-none"
                    value={formData.service_type}
                    onChange={e => setFormData({ ...formData, service_type: e.target.value })}
                >
                    <option value="" className="text-black">Sélectionnez une prestation...</option>
                    <option value="revision" className="text-black">Révision / Vidange</option>
                    <option value="freinage" className="text-black">Freinage</option>
                    <option value="pneus" className="text-black">Pneumatiques</option>
                    <option value="distribution" className="text-black">Distribution</option>
                    <option value="diag" className="text-black">Diagnostic Électronique</option>
                    <option value="autre" className="text-black">Autre demande</option>
                </select>
            </div>

            <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Message (Facultatif)</label>
                <textarea
                    rows={4}
                    className="w-full bg-black/20 border border-white/10 rounded-lg p-4 text-white placeholder:text-gray-600 focus:border-[var(--color-red)] focus:ring-1 focus:ring-[var(--color-red)] outline-none transition-all"
                    placeholder="Précisions sur votre demande..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                />
            </div>

            <div className="pt-4">
                <Button size="lg" className="w-full group" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Envoi en cours...' : 'Envoyer la demande'}
                    {!status.startsWith('load') && <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </Button>
                <p className="text-center text-xs text-gray-500 mt-4">
                    En soumettant ce formulaire, vous acceptez d'être recontacté par AM AUTO.
                </p>
            </div>
        </form>
    );
}
