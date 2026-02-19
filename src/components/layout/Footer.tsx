import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative bg-[#050506] text-white pt-16 pb-6 border-t border-white/[0.06]">
            <div className="container mx-auto px-6 md:px-8">
                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-14">

                    {/* Map — 4 cols */}
                    <div className="lg:col-span-4 rounded-2xl overflow-hidden border border-white/[0.06] h-[260px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.8!2d-0.5!3d44.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDUwJzEwLjgiTiAwwrAzMScwMC4wIlc!5e0!3m2!1sfr!2sfr!4v1"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.85) contrast(1.1)' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="AM AUTO Floirac"
                        />
                    </div>

                    {/* Brand — 3 cols */}
                    <div className="lg:col-span-3 space-y-5">
                        <Link href="/" className="flex items-center gap-2.5">
                            <div className="w-8 h-8 bg-[var(--color-red)] rounded-lg flex items-center justify-center text-white font-extrabold text-xs">
                                AM
                            </div>
                            <span className="text-lg font-extrabold tracking-tight text-white">AUTO</span>
                        </Link>
                        <p className="text-gray-500 text-xs leading-relaxed max-w-[220px]">
                            L&apos;excellence automobile à Floirac. Entretien, réparation et expertise technique.
                        </p>
                        <div className="flex gap-2">
                            <a href="#" className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center transition-colors">
                                <Facebook className="w-3.5 h-3.5 text-gray-400" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center transition-colors">
                                <Instagram className="w-3.5 h-3.5 text-gray-400" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation — 2 cols */}
                    <div className="lg:col-span-2">
                        <h3 className="text-[11px] font-semibold mb-4 text-gray-400 uppercase tracking-[0.15em]">Navigation</h3>
                        <ul className="space-y-2.5">
                            {['Accueil', 'Prestations', 'Tarifs', 'Avis', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase() === 'accueil' ? '' : item.toLowerCase()}`} className="text-gray-500 hover:text-white transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact + Hours — 3 cols */}
                    <div className="lg:col-span-3 space-y-6">
                        <div>
                            <h3 className="text-[11px] font-semibold mb-4 text-gray-400 uppercase tracking-[0.15em]">Contact</h3>
                            <ul className="space-y-3 text-sm text-gray-500">
                                <li className="flex items-start gap-2.5">
                                    <MapPin className="w-3.5 h-3.5 text-gray-600 mt-0.5 shrink-0" />
                                    <span>161 bis rue Emile Combes, 33270 Floirac</span>
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <Phone className="w-3.5 h-3.5 text-gray-600 shrink-0" />
                                    <a href="tel:0634612212" className="hover:text-white transition-colors">06 34 61 22 12</a>
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <Mail className="w-3.5 h-3.5 text-gray-600 shrink-0" />
                                    <a href="mailto:contact@am-auto.fr" className="hover:text-white transition-colors">contact@am-auto.fr</a>
                                </li>
                            </ul>
                        </div>

                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-2 text-xs">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Lun — Ven</span>
                                <span className="text-gray-300 font-medium">09:00 – 18:00</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Samedi</span>
                                <span className="text-gray-300 font-medium">09:00 – 18:00</span>
                            </div>
                            <div className="flex justify-between pt-1.5 border-t border-white/[0.04]">
                                <span className="text-gray-600">Dimanche</span>
                                <span className="text-[var(--color-red)] font-semibold">Fermé</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/[0.04] pt-5 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-gray-600">
                    <p>&copy; {new Date().getFullYear()} AM AUTO. Tous droits réservés.</p>
                    <div className="flex gap-6">
                        <Link href="/mentions-legales" className="hover:text-gray-400 transition-colors">Mentions Légales</Link>
                        <Link href="/confidentialite" className="hover:text-gray-400 transition-colors">Confidentialité</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
