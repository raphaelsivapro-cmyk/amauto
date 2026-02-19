'use client';

import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
}

export function useScrollReveal<T extends HTMLElement>(
    options: ScrollRevealOptions = {}
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const { threshold = 0.15, rootMargin = '0px 0px -50px 0px' } = options;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        // Also reveal children with reveal class
                        entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach((child) => {
                            child.classList.add('revealed');
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [options.threshold, options.rootMargin]);

    return ref;
}

export function ScrollReveal({
    children,
    className = '',
    variant = 'up',
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    variant?: 'up' | 'left' | 'scale';
    delay?: number;
}) {
    const ref = useScrollReveal<HTMLDivElement>();

    const variantClass = {
        up: 'reveal',
        left: 'reveal-left',
        scale: 'reveal-scale',
    }[variant];

    return (
        <div
            ref= { ref }
    className = {`${variantClass} ${className}`
}
style = {{ transitionDelay: `${delay}ms` }}
        >
    { children }
    </div>
    );
}
