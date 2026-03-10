'use client';

import { Section } from "@/components/ui/Section";
import { Star, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect } from "react";

export function Reviews() {
    useEffect(() => {
        // Prevent layout shift/flashing by injecting CSS into the shadow DOM directly before showing
        const checkWidget = () => {
            const widgetContainers = document.querySelectorAll('div[class*="elfsight-app"]');
            let foundShadowRoot = false;

            widgetContainers.forEach(container => {
                const hosts = container.querySelectorAll('*');
                hosts.forEach(host => {
                    if (host.shadowRoot) {
                        foundShadowRoot = true;
                        if (!host.shadowRoot.querySelector('#hide-elfsight-badge')) {
                            const style = document.createElement('style');
                            style.id = 'hide-elfsight-badge';
                            style.innerHTML = `
                                a[href*="elfsight"], 
                                .eapps-link,
                                [class*="Badge__Container"],
                                [class*="WidgetBackground__Container"] a { 
                                    display: none !important; 
                                    opacity: 0 !important;
                                    pointer-events: none !important;
                                }
                            `;
                            host.shadowRoot.appendChild(style);
                        }
                    }
                });

                // Add class to make it visible only after shadow DOM is processed
                if (foundShadowRoot && !container.classList.contains('widget-ready')) {
                    container.classList.add('widget-ready');
                }
            });

            if (foundShadowRoot) {
                // Return true to clear the interval
                return true;
            }
            return false;
        };

        const interval = setInterval(() => {
            if (checkWidget()) {
                clearInterval(interval);
            }
        }, 50);

        // Fallback: show widget anyway after 3 seconds
        const timeout = setTimeout(() => {
            document.querySelectorAll('div[class*="elfsight-app"]').forEach(el => el.classList.add('widget-ready'));
        }, 3000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <Section background="charcoal" className="py-28 relative overflow-hidden">
            <style dangerouslySetInnerHTML={{
                __html: `
                .elfsight-app-861e8a1e-f281-417f-b963-ccf72903d836 {
                    visibility: hidden;
                    opacity: 0;
                }
                .elfsight-app-861e8a1e-f281-417f-b963-ccf72903d836.widget-ready {
                    visibility: visible;
                    opacity: 1;
                    transition: opacity 1s ease-in-out;
                }
                a[href*="elfsight"], .eapps-link { display: none !important; }
            `}} />

            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

            <ScrollReveal>
                <div className="text-center mb-16 relative z-10">
                    <span className="text-[var(--color-red)] font-semibold tracking-[0.15em] uppercase text-[11px] mb-3 block">Témoignages</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5 text-white leading-tight">
                        LA CONFIANCE{' '}
                        <span className="text-gray-500">SE MÉRITE</span>
                    </h2>
                    {/* Google badge */}
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] mt-2">
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                            ))}
                        </div>
                        <span className="text-xs text-gray-400">Vos avis sur <span className="text-white font-semibold">Google</span></span>
                    </div>
                </div>
            </ScrollReveal>

            <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-0">
                <ScrollReveal delay={200}>
                    {/* Elfsight Google Reviews Widget */}
                    <div className="elfsight-app-861e8a1e-f281-417f-b963-ccf72903d836" data-elfsight-app-lazy></div>
                    <script src="https://elfsightcdn.com/platform.js" async></script>
                </ScrollReveal>
            </div>
        </Section>
    );
}
