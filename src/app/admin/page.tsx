import { Card } from "@/components/ui/Card";
import { Users, Calendar, ShoppingBag, TrendingUp, FileText } from "lucide-react";

export default function AdminDashboardPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold font-manrope text-[var(--color-charcoal)]">Tableau de bord</h1>
                <p className="text-gray-500">Bienvenue sur votre espace de gestion.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "RDV du jour", value: "8", icon: Calendar, color: "text-blue-500", bg: "bg-blue-50" },
                    { label: "Nouveaux Devis", value: "3", icon: FileText, color: "text-orange-500", bg: "bg-orange-50" },
                    { label: "Clients (Mois)", value: "+12%", icon: TrendingUp, color: "text-green-500", bg: "bg-green-50" },
                    { label: "Avis à modérer", value: "2", icon: Users, color: "text-purple-500", bg: "bg-purple-50" },
                ].map((stat, i) => (
                    <Card key={i} className="p-6 flex items-center gap-4">
                        <div className={`p-3 rounded-full ${stat.bg} ${stat.color}`}>
                            <stat.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                            <p className="text-2xl font-bold text-[var(--color-charcoal)]">{stat.value}</p>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-6">
                    <h2 className="text-xl font-bold mb-4">Derniers Rendez-vous</h2>
                    <div className="space-y-4">
                        {[
                            { time: "09:00", client: "M. Dupont", car: "Clio IV", action: "Vidange", status: "Confirmé" },
                            { time: "10:30", client: "Mme. Martin", car: "208", action: "Pneus", status: "En cours" },
                            { time: "14:00", client: "M. Durand", car: "Golf 7", action: "Freinage", status: "Nouveau" },
                        ].map((rdv, i) => (
                            <div key={i} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded border-b last:border-0 transition-colors">
                                <div className="flex items-center gap-4">
                                    <span className="font-mono font-bold text-[var(--color-slate)]">{rdv.time}</span>
                                    <div>
                                        <p className="font-bold text-sm">{rdv.client}</p>
                                        <p className="text-xs text-gray-500">{rdv.car} - {rdv.action}</p>
                                    </div>
                                </div>
                                <span className={`text-xs px-2 py-1 rounded-full font-bold ${rdv.status === "Nouveau" ? "bg-blue-100 text-blue-700" :
                                        rdv.status === "Confirmé" ? "bg-green-100 text-green-700" :
                                            "bg-orange-100 text-orange-700"
                                    }`}>
                                    {rdv.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className="p-6">
                    <h2 className="text-xl font-bold mb-4">Devis Récents</h2>
                    <div className="space-y-4">
                        {[
                            { date: "Hier", client: "Sophie L.", car: "Twingo", price: "Devis #420", status: "Envoyé" },
                            { date: "Hier", client: "Marc P.", car: "3008", price: "Devis #419", status: "Nouveau" },
                        ].map((quote, i) => (
                            <div key={i} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded border-b last:border-0 transition-colors">
                                <div>
                                    <p className="font-bold text-sm">{quote.client}</p>
                                    <p className="text-xs text-gray-500">{quote.car} - {quote.date}</p>
                                </div>
                                <span className="text-xs font-bold text-gray-500">{quote.status}</span>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
}
