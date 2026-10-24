"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/utils/LanguageContext";
import { usePathname } from "next/navigation";
import useScroll from "@/hooks/useScroll";


export default function ClientRoot({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    useScroll();

    const shouldHideNav =
        /^\/(?!portfolio$)[^/]+$/.test(pathname) || // "/slug" but NOT "/portfolio"
        /^\/portfolio\/[^/]+$/.test(pathname);      // "/portfolio/slug"

    return (
        <LanguageProvider>
            <div className="relative min-h-screen overflow-x-hidden antialiased">
                {/*main background*/}
                <div
                    className="absolute inset-0 z-0 bg-offblack"
                />
                <div className="relative z-10 transition-all duration-500">
                    {!shouldHideNav && <Navbar />}
                    {children}
                    {!shouldHideNav && <Footer />}
                </div>
            </div>
        </LanguageProvider>
    );
}
