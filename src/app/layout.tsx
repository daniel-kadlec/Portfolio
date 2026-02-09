import "./globals.css";
import type { Metadata } from "next";
import ClientRoot from "./layoutClient";

export const metadata: Metadata = {
    title: "Daniel Kadlec",
    description: "Vítejte v mém osobním portfoliu, které představuje projekty z oblasti designu a vývoje.",
    icons: {
        icon: '/icon.svg',
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
            <noscript>
                <style>{`
                    .app-loader{display:none!important}
                    .app-content{opacity:1!important}
                    [style*="opacity: 0"]{opacity:1!important}
                    [style*="filter: blur"]{filter:none!important}
                    [style*="transform:"]{transform:none!important}
                `}</style>
            </noscript>
            <ClientRoot>{children}</ClientRoot>
        </body>
        </html>
    );
}
