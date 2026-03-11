'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';

const SERVICES = [
    { id: 'revision-vidange', label: 'Révision & Vidange' },
    { id: 'freinage', label: 'Freinage (Plaquettes / Disques)' },
    { id: 'pneumatiques', label: 'Pneumatiques (Montage / Équilibrage)' },
    { id: 'distribution', label: 'Kit de distribution & accessoires' },
    { id: 'embrayage', label: 'Kit Embrayage & Transmission' },
    { id: 'echappement', label: 'Échappement & Dépollution' },
    { id: 'suspension', label: 'Suspension & Direction' },
    { id: 'injection', label: 'Injection & Moteur' },
    { id: 'diagnostic', label: 'Diagnostic Électronique' },
    { id: 'autre', label: 'Autre demande' }
];

export function QuoteForm() {
    const searchParams = useSearchParams();
    const servicePreselected = searchParams.get('service');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        vehicle_plate: '',
        service_type: servicePreselected || '',
        message: ''
    });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Nom Prénom</label>
                    <input
                        type="text"
                        required
                        className="w-full bg-black/20 border border-white/10 rounded-lg p-4 text-white placeholder:text-gray-600 focus:border-[var(--color-red)] focus:ring-1 focus:ring-[var(--color-red)] outline-none transition-all"
                        placeholder="Nom Prénom"
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
                        placeholder="Email"
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
                        placeholder="Tél"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Immatriculation</label>
                    <input
                        type="text"
                        required
                        className="w-full bg-black/20 border border-white/10 rounded-lg p-4 text-white placeholder:text-gray-600 focus:border-[var(--color-red)] uppercase focus:ring-1 focus:ring-[var(--color-red)] outline-none transition-all"
                        placeholder="AB-123-CD"
                        value={formData.vehicle_plate}
                        onChange={e => setFormData({ ...formData, vehicle_plate: e.target.value.toUpperCase() })}
                    />
                </div>
            </div>

            <div className="space-y-2 relative z-20">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Type de prestation</label>

                {/* Custom Dropdown to replace native <select> */}
                <div
                    className="relative w-full"
                    tabIndex={0}
                    onBlur={(e) => {
                        // Close dropdown if focus moves outside this component
                        if (!e.currentTarget.contains(e.relatedTarget)) {
                            setIsDropdownOpen(false);
                        }
                    }}
                >
                    <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={cn(
                            "w-full flex items-center justify-between bg-black/20 border border-white/10 rounded-lg p-4 text-left focus:border-[var(--color-red)] outline-none transition-all",
                            formData.service_type ? "text-white" : "text-gray-600",
                            isDropdownOpen && "border-[var(--color-red)] ring-1 ring-[var(--color-red)]"
                        )}
                    >
                        <span className="truncate">
                            {formData.service_type
                                ? SERVICES.find(s => s.id === formData.service_type)?.label || 'Sélectionnez une prestation...'
                                : 'Sélectionnez une prestation...'}
                        </span>
                        <ChevronDown className={cn("w-5 h-5 transition-transform text-white", isDropdownOpen && "rotate-180")} />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute top-full left-0 w-full mt-2 bg-[var(--color-charcoal)] border border-[var(--color-red)]/50 rounded-lg shadow-2xl z-50 overflow-hidden animate-fade-down animate-duration-150">
                            <div className="max-h-60 overflow-y-auto custom-scrollbar">
                                {SERVICES.map((service) => (
                                    <button
                                        key={service.id}
                                        type="button"
                                        onClick={() => {
                                            setFormData({ ...formData, service_type: service.id });
                                            setIsDropdownOpen(false);
                                        }}
                                        className={cn(
                                            "w-full text-left px-4 py-3 text-sm transition-colors",
                                            formData.service_type === service.id
                                                ? "bg-[var(--color-red)] text-white font-bold"
                                                : "text-gray-300 hover:bg-white/10 hover:text-white"
                                        )}
                                    >
                                        {service.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="space-y-2 relative z-10">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Détails de la demande</label>
                <textarea
                    rows={4}
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-lg p-4 text-white placeholder:text-gray-600 focus:border-[var(--color-red)] focus:ring-1 focus:ring-[var(--color-red)] outline-none transition-all relative z-10"
                    placeholder="Ex: Pièces spécifiques souhaitées, détails de l'entretien..."
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
