'use client'

import LanguageSwitcher from './LanguageSwicther';
import { useRouter, usePathname } from 'next/navigation';
import {useEffect, useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import { TbMenuDeep } from "react-icons/tb";
import HamburgerMenu from "@/components/HamburgerMenu";
import NavLinks from "@/components/NavLinks";


const LogoPrimary = "/logo/logomark-primary.svg";

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const goHome = (hash?: string, e?: React.MouseEvent) => {
        e?.preventDefault();
        if (pathname === '/') {
            if (hash) document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
            else window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            router.push(hash ? `/#${hash}` : '/');
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMenuOpen = () => {
        setIsMenuOpen(true);
    };

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);


    return (
        <header className="section w-full fixed top-0 left-1/2 -translate-x-1/2 z-[99]">

        <HamburgerMenu isOpen={isMenuOpen} onClose={handleMenuClose} />

            <nav
                className={`nav-section h-20 flex items-center justify-between transition-all duration-500 rounded-full
                    ${scrolled
                    ? 'w-[95%] px-[42px] mt-4 border border-neutral-300/100 dark:border-neutral-700/100 bg-offwhite/95 dark:bg-offblack/95 backdrop-blur-sm shadow-md'
                    : 'w-full px-0 border border-neutral-300/0 dark:border-neutral-700/0 bg-transparent backdrop-blur-0 shadow-none'
                }`}
            >
                <Link href="/" onClick={(e) => goHome(undefined, e)}>
                    <Image
                        width={56}
                        height={56}
                        src={LogoPrimary}
                        alt="Logo"
                        className="cursor-pointer"
                        priority
                        unoptimized
                    />
                </Link>

                <TbMenuDeep
                    onClick={handleMenuOpen}
                    className="block text w-8 h-8 cursor-pointer"
                />

                <NavLinks />

                <div className="gap-4 flex">
                    <LanguageSwitcher />
                </div>
            </nav>
        </header>

    );
}
