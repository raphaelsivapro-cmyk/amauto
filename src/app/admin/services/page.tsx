'use client';

import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Plus, Edit, Trash2 } from "lucide-react";
import { SERVICES_DATA } from "@/lib/data";

export default function AdminServicesPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold font-manrope">Prestations</h1>
                <Button>
                    <Plus className="w-4 h-4 mr-2" /> Ajouter
                </Button>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {SERVICES_DATA.map((service) => (
                    <Card key={service.id} className="p-4 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-4 flex-1">
                            {service.image && (
                                <img src={service.image} alt="" className="w-16 h-16 object-cover rounded" />
                            )}
                            <div>
                                <h3 className="font-bold text-lg">{service.title}</h3>
                                <p className="text-sm text-gray-500">{service.category} • {service.duration_minutes} min • Dès {service.price_from}€</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                                <Edit className="w-4 h-4 mr-2" /> Modifier
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                                <Trash2 className="w-4 h-4" />
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
