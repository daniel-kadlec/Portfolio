"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingOverlay from "@/components/LoadingOverlay";
import { ThemeProvider, useTheme } from "@/utils/ThemeContext";
import { LanguageProvider } from "@/utils/LanguageContext";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import useScroll from "@/hooks/useScroll";

function BackgroundLayers() {
    const { theme } = useTheme();
    const [darkOpacity, setDarkOpacity] = useState(theme === "dark" ? 1 : 0);

    useEffect(() => {
        setDarkOpacity(theme === "dark" ? 1 : 0);
    }, [theme]);

    return (
        <div className="absolute inset-0 z-0">
            {/* Light gradient */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(120deg, #F5F5F5 0%, #EAEAEA 50%, #F5F5F5 100%)",
                }}
            />

            {/* Dark gradient overlay */}
            <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                    background:
                        "linear-gradient(120deg, #070708 0%, #0C0C0E 50%, #070708 100%)",
                    opacity: darkOpacity,
                }}
            />
        </div>
    );
}


export default function ClientRoot({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    useScroll();

    const shouldHideNav =
        /^\/(?!portfolio$)[^/]+$/.test(pathname) || // "/slug" but NOT "/portfolio"
        /^\/portfolio\/[^/]+$/.test(pathname);      // "/portfolio/slug"

    return (
        <ThemeProvider>
            <LanguageProvider>
                <LoadingOverlay>
                    <div className="relative min-h-screen overflow-x-hidden antialiased">
                        <BackgroundLayers />
                        <div className="relative z-10 transition-all duration-500">
                            {!shouldHideNav && <Navbar />}
                            {children}
                            {!shouldHideNav && <Footer />}
                        </div>
                    </div>
                </LoadingOverlay>
            </LanguageProvider>
        </ThemeProvider>
    );
}
