'use client';

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Search, Filter, MoreHorizontal } from "lucide-react";

const APPOINTMENTS = [
    { id: 1, date: "2023-11-20", time: "09:00", customer: "Jean Dupont", vehicle: "Renault Clio IV", service: "Vidange", status: "Confirmé", phone: "06 12 34 56 78" },
    { id: 2, date: "2023-11-20", time: "10:30", customer: "Marie Martin", vehicle: "Peugeot 208", service: "Pneus", status: "En cours", phone: "06 98 76 54 32" },
    { id: 3, date: "2023-11-20", time: "14:00", customer: "Paul Durand", vehicle: "VW Golf 7", service: "Freinage", status: "Nouveau", phone: "06 11 22 33 44" },
    { id: 4, date: "2023-11-21", time: "09:00", customer: "Sophie Leroy", vehicle: "Citroën C3", service: "Distribution", status: "Nouveau", phone: "06 55 66 77 88" },
    { id: 5, date: "2023-11-21", time: "11:00", customer: "Lucas Petit", vehicle: "Audi A3", service: "Diagnostic", status: "Annulé", phone: "06 44 55 66 77" },
];

export default function AppointmentsPage() {
    const [filter, setFilter] = React.useState("Tout");

    const filtered = filter === "Tout" ? APPOINTMENTS : APPOINTMENTS.filter(a => a.status === filter);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold font-manrope">Rendez-vous</h1>
                <Button>Nouveau RDV</Button>
            </div>

            <Card className="p-4">
                <div className="flex gap-4 mb-6">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <input placeholder="Rechercher un client..." className="pl-10 p-2 border rounded w-full" />
                    </div>
                    <select
                        className="p-2 border rounded bg-white"
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                    >
                        <option value="Tout">Tout voir</option>
                        <option value="Nouveau">Nouveaux</option>
                        <option value="Confirmé">Confirmés</option>
                        <option value="En cours">En cours</option>
                        <option value="Annulé">Annulés</option>
                    </select>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b text-gray-500 text-sm">
                                <th className="p-4">Date / Heure</th>
                                <th className="p-4">Client</th>
                                <th className="p-4">Véhicule</th>
                                <th className="p-4">Prestation</th>
                                <th className="p-4">Statut</th>
                                <th className="p-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((rdv) => (
                                <tr key={rdv.id} className="border-b last:border-0 hover:bg-gray-50 transition-colors">
                                    <td className="p-4">
                                        <div className="font-bold">{rdv.date}</div>
                                        <div className="text-sm text-gray-500">{rdv.time}</div>
                                    </td>
                                    <td className="p-4">
                                        <div className="font-bold">{rdv.customer}</div>
                                        <div className="text-xs text-gray-500">{rdv.phone}</div>
                                    </td>
                                    <td className="p-4">{rdv.vehicle}</td>
                                    <td className="p-4">{rdv.service}</td>
                                    <td className="p-4">
                                        <Badge variant={
                                            rdv.status === "Différé" ? "destructive" :
                                                rdv.status === "Confirmé" ? "success" :
                                                    "secondary"
                                        }>
                                            {rdv.status}
                                        </Badge>
                                    </td>
                                    <td className="p-4">
                                        <Button size="sm" variant="ghost">
                                            <MoreHorizontal className="w-4 h-4" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
}
