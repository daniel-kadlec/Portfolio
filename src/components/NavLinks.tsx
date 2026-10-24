"use client";

import { useLanguage } from "@/utils/LanguageContext";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

interface NavLinksProps {
    className?: string;
    onLinkClick?: () => void;
}

export default function NavLinks({ className, onLinkClick }: NavLinksProps) {
    const { dict } = useLanguage();
    const router = useRouter();
    const pathname = usePathname();
    const [hovered, setHovered] = useState<string | null>(null);

    const goHome = (hash?: string, e?: React.MouseEvent) => {
        e?.preventDefault();
        if (pathname === "/") {
            if (hash)
                document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
            else window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            router.push(hash ? `/#${hash}` : "/");
        }
        onLinkClick?.();
    };

    useEffect(() => {
        if (pathname === "/" && window.location.hash) {
            const id = window.location.hash.slice(1);
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
    }, [pathname]);

    const links = [
        { id: "home", label: dict.nav.Home, hash: undefined, href: "/" },
        { id: "about", label: dict.nav.About, hash: "about", href: "/#about" },
        { id: "portfolio", label: dict.nav.Portfolio, hash: "portfolio", href: "/#portfolio" },
        { id: "contact", label: dict.nav.Contact, hash: "contact", href: "/#contact" },
    ];

    const baseClasses =
        "cursor-pointer transition-all duration-600 ease-out text-offblack dark:text-offwhite";

    const getStyle = (id: string) => {
        const isHovered = hovered === id;
        const isOther = hovered !== null && !isHovered;

        return `
            ${baseClasses}
            ${isHovered ? "scale-[102%] opacity-100" : isOther ? "opacity-[40%] scale-[100%]" : "opacity-100 scale-[102%]"}
        `;
    };

    return (
        <ul
            className={`gap-[clamp(15px,_2vw,_48px)] font-secondary font-bold text-md hidden md:flex ${className}`}
        >
            {links.map(({ id, label, hash, href }) => (
                <li
                    key={id}
                    onMouseEnter={() => setHovered(id)}
                    onMouseLeave={() => setHovered(null)}
                    className="transition-all"
                >
                    <Link
                        href={href}
                        className={getStyle(id)}
                        onClick={(e) => goHome(hash, e)}
                    >
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
