'use client';

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Prestations', href: '/prestations' },
    { name: 'Tarifs', href: '/tarifs' },
    { name: 'Avis', href: '/avis' },
    { name: 'Contact', href: '/contact' },
];

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-500",
                scrolled
                    ? "py-3 glass shadow-lg"
                    : "py-5 bg-gradient-to-b from-black/60 to-transparent"
            )}
        >
            <div className="container px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-[var(--color-red)] rounded-xl flex items-center justify-center text-white font-extrabold text-lg shadow-glow group-hover:scale-110 transition-transform duration-300">
                        AM
                    </div>
                    <span className="text-xl font-extrabold tracking-tight text-white">
                        AUTO
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "px-4 py-2 text-sm font-semibold tracking-wide rounded-lg transition-all duration-300 relative",
                                    isActive
                                        ? "text-white"
                                        : "text-gray-400 hover:text-white"
                                )}
                            >
                                {item.name}
                                {isActive && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[var(--color-red)] rounded-full" />
                                )}
                            </Link>
                        )
                    })}
                </nav>

                {/* Actions */}
                <div className="hidden lg:flex items-center gap-4">
                    <a href="tel:0634612212" className="flex items-center gap-2 text-white font-semibold group">
                        <div className="p-2 rounded-lg bg-white/10 group-hover:bg-[var(--color-red)] transition-colors">
                            <Phone className="w-4 h-4" />
                        </div>
                        <span className="hidden xl:inline text-sm">06 34 61 22 12</span>
                    </a>
                    <Link href="/rendez-vous">
                        <Button size="sm" className="shadow-glow">
                            Rendez-vous
                        </Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2.5 rounded-lg bg-white/10 text-white backdrop-blur-sm border border-white/10"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full glass border-t border-white/5 lg:hidden animate-fade-up">
                    <nav className="container p-4 flex flex-col gap-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "p-4 rounded-xl font-semibold text-lg transition-colors",
                                    pathname === item.href
                                        ? "bg-white/10 text-[var(--color-red)]"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-3">
                            <Link href="/rendez-vous" onClick={() => setIsOpen(false)}>
                                <Button className="w-full justify-center">RDV</Button>
                            </Link>
                            <a href="tel:0634612212">
                                <Button variant="outline" className="w-full justify-center border-white/10 text-white hover:bg-white/10">Appeler</Button>
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
