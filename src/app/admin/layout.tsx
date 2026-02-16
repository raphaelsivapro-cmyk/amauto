'use client';

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    LayoutDashboard,
    Calendar,
    FileText,
    Wrench,
    MessageSquare,
    Image as ImageIcon,
    Settings,
    LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { title: "Vue d'ensemble", href: "/admin", icon: LayoutDashboard },
    { title: "Rendez-vous", href: "/admin/appointments", icon: Calendar },
    { title: "Devis", href: "/admin/quotes", icon: FileText },
    { title: "Prestations", href: "/admin/services", icon: Wrench },
    { title: "Avis Clients", href: "/admin/reviews", icon: MessageSquare },
    { title: "Galerie", href: "/admin/gallery", icon: ImageIcon },
    { title: "Paramètres", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();

    // Bypass layout for login page
    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    const handleLogout = () => {
        document.cookie = "admin_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
        router.push("/admin/login");
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-[var(--color-charcoal)] text-white flex flex-col hidden md:flex">
                <div className="p-6 border-b border-gray-800">
                    <span className="text-xl font-bold font-manrope">AM <span className="text-[var(--color-red)]">ADMIN</span></span>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium",
                                pathname === item.href
                                    ? "bg-[var(--color-red)] text-white"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.title}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-800">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 w-full text-sm font-medium transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        Déconnexion
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6 md:hidden">
                    <span className="font-bold">AM ADMIN</span>
                    {/* Mobile Menu Trigger would go here */}
                </header>
                <main className="flex-1 overflow-y-auto p-6 md:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
