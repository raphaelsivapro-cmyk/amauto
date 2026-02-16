'use client';

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Search, FileText, CheckCircle, XCircle } from "lucide-react";

const QUOTES = [
    { id: 1, date: "2023-11-20", customer: "Marc Petit", vehicle: "Peugeot 3008", request: "Bruit suspect courroie", status: "Nouveau", urgency: "Urgent" },
    { id: 2, date: "2023-11-19", customer: "Sophie Dubois", vehicle: "Renault Twingo", request: "Remplacement embrayage", status: "Envoyé", urgency: "Normal" },
    { id: 3, date: "2023-11-18", customer: "Jean Valjean", vehicle: "Ford Fiesta", request: "Révision complète + CT", status: "Accepté", urgency: "Normal" },
];

export default function AdminQuotesPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold font-manrope">Demandes de Devis</h1>

            <Card className="p-4">
                <div className="flex gap-4 mb-6">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <input placeholder="Rechercher..." className="pl-10 p-2 border rounded w-full" />
                    </div>
                    <select className="p-2 border rounded bg-white">
                        <option value="Tout">Tout voir</option>
                        <option value="Nouveau">Nouveaux</option>
                        <option value="Envoyé">Envoyés</option>
                        <option value="Accepté">Acceptés</option>
                    </select>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b text-gray-500 text-sm">
                                <th className="p-4">Date</th>
                                <th className="p-4">Client / Véhicule</th>
                                <th className="p-4">Demande</th>
                                <th className="p-4">Urgence</th>
                                <th className="p-4">Statut</th>
                                <th className="p-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {QUOTES.map((quote) => (
                                <tr key={quote.id} className="border-b last:border-0 hover:bg-gray-50 transition-colors">
                                    <td className="p-4 text-sm">{quote.date}</td>
                                    <td className="p-4">
                                        <div className="font-bold">{quote.customer}</div>
                                        <div className="text-xs text-gray-500">{quote.vehicle}</div>
                                    </td>
                                    <td className="p-4 text-sm max-w-xs truncate">{quote.request}</td>
                                    <td className="p-4">
                                        {quote.urgency === "Urgent" && (
                                            <Badge variant="destructive" className="flex w-fit items-center gap-1">
                                                Urgent
                                            </Badge>
                                        )}
                                        {quote.urgency === "Normal" && <span className="text-gray-500 text-sm">Normal</span>}
                                    </td>
                                    <td className="p-4">
                                        <Badge variant={
                                            quote.status === "Nouveau" ? "secondary" :
                                                quote.status === "Accepté" ? "success" :
                                                    "outline"
                                        }>
                                            {quote.status}
                                        </Badge>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex gap-2">
                                            <Button size="sm" variant="outline">
                                                <FileText className="w-4 h-4" />
                                            </Button>
                                            <Button size="sm" variant="ghost" className="text-green-600">
                                                <CheckCircle className="w-4 h-4" />
                                            </Button>
                                            <Button size="sm" variant="ghost" className="text-red-500">
                                                <XCircle className="w-4 h-4" />
                                            </Button>
                                        </div>
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
