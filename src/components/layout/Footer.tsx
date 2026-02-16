import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#050505] text-white pt-24 pb-12 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="inline-block">
                            <h2 className="text-3xl font-extrabold font-manrope tracking-tighter">
                                AM <span className="text-[var(--color-red)]">AUTO</span>
                            </h2>
                            <div className="h-1 w-1/3 bg-[var(--color-red)] mt-2 rounded-full"></div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            L'excellence automobile à Floirac. Entretien, réparation et expertise technique pour tous vos véhicules.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-[var(--color-red)] transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-[var(--color-red)] transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-8 text-white">Navigation</h3>
                        <ul className="space-y-4">
                            {['Accueil', 'Prestations', 'Tarifs', 'Galerie', 'Avis'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(' ', '-') === 'accueil' ? '' : item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-[var(--color-red)] transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-red)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-8 text-white">Nous Trouver</h3>
                        <ul className="space-y-6 text-sm text-gray-400">
                            <li className="flex items-start gap-4 group">
                                <div className="p-2 rounded bg-white/5 group-hover:bg-[var(--color-red)] transition-colors shrink-0">
                                    <MapPin className="w-5 h-5 text-white" />
                                </div>
                                <span>161 bis rue Emile Combes,<br />33270 Floirac</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2 rounded bg-white/5 group-hover:bg-[var(--color-red)] transition-colors shrink-0">
                                    <Phone className="w-5 h-5 text-white" />
                                </div>
                                <a href="tel:0634612212" className="hover:text-white transition-colors">06 34 61 22 12</a>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2 rounded bg-white/5 group-hover:bg-[var(--color-red)] transition-colors shrink-0">
                                    <Mail className="w-5 h-5 text-white" />
                                </div>
                                <a href="mailto:contact@am-auto.fr" className="hover:text-white transition-colors">contact@am-auto.fr</a>
                            </li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h3 className="text-lg font-bold mb-8 text-white">Horaires</h3>
                        <div className="space-y-3 text-sm text-gray-400 bg-white/5 p-6 rounded-[var(--radius-lg)] border border-white/5">
                            <div className="flex justify-between">
                                <span>Lundi - Vendredi</span>
                                <span className="text-white font-medium">09:00 - 18:00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Samedi</span>
                                <span className="text-white font-medium">09:00 - 18:00</span>
                            </div>
                            <div className="flex justify-between pt-2 border-t border-white/10">
                                <span>Dimanche</span>
                                <span className="text-[var(--color-red)] font-bold">Fermé</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} AM AUTO. Fait avec passion à Bordeaux.</p>
                    <div className="flex gap-8">
                        <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link>
                        <Link href="/confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
                        <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
