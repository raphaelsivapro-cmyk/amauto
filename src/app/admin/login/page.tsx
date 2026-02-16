'use client';

import * as React from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export default function AdminLoginPage() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple mock auth
        if (email === "admin@am-auto.fr" && password === "admin123") {
            document.cookie = "admin_token=valid; path=/";
            router.push("/admin");
        } else {
            setError("Identifiants invalides");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <Card className="w-full max-w-md p-8">
                <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-[var(--color-charcoal)] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                        <Lock className="w-6 h-6" />
                    </div>
                    <h1 className="text-2xl font-bold font-manrope">Administration AM AUTO</h1>
                    <p className="text-gray-500">Connectez-vous pour gérer le garage</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    {error && (
                        <div className="bg-red-50 text-[var(--color-red)] p-3 rounded text-sm text-center">
                            {error}
                        </div>
                    )}
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full p-3 border rounded"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="admin@am-auto.fr"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Mot de passe</label>
                        <input
                            type="password"
                            className="w-full p-3 border rounded"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                        />
                    </div>
                    <Button className="w-full h-12">Se connecter</Button>
                </form>
            </Card>
        </div>
    );
}
