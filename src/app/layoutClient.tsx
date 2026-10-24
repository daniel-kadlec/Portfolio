"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/utils/LanguageContext";
import { usePathname } from "next/navigation";

function BackgroundLayers() {
    return (
        <div
            className="absolute inset-0 z-0"
            style={{
                background:
                    "linear-gradient(120deg, #070708 0%, #0C0C0E 50%, #070708 100%)",
            }}
        />
    );
}


export default function ClientRoot({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const shouldHideNav =
        /^\/(?!portfolio$)[^/]+$/.test(pathname) || // "/slug" but NOT "/portfolio"
        /^\/portfolio\/[^/]+$/.test(pathname);      // "/portfolio/slug"

    return (
        <LanguageProvider>
                    <div className="relative min-h-screen overflow-x-hidden antialiased">
                        <BackgroundLayers />
                        <div className="relative z-10 transition-all duration-500">
                            {!shouldHideNav && <Navbar />}
                            {children}
                            {!shouldHideNav && <Footer />}
                        </div>
                    </div>
        </LanguageProvider>
    );
}
