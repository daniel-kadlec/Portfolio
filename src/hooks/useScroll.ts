"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            wrapper: document.documentElement,
            content: document.body,
            smoothWheel: true,
            // @ts-expect-error smoothTouch exists at runtime
            smoothTouch: false,
            duration: 0.8,
            wheelMultiplier: 1.1,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);
}