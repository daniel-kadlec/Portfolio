'use client'

import { motion } from "framer-motion";
import { useTheme } from '@/utils/ThemeContext';
import LanguageSwitcher from './LanguageSwicther';
import ThemeSwitcher from './ThemeSwitcher';
import HopperElement from "@/components/HopperElement";
import SocialIcons from "@/components/SocialIcons";
import Image from "next/image";
import NavLinks from "@/components/NavLinks";

const LogoPrimary = "/logo/logomark-primary.svg";
const LogoSecondary = "/logo/logomark-secondary.svg";

export default function Footer() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.footer
            className="section overflow-hidden"
            initial={false}
            whileInView={{
                opacity: [0, 1],
                y: [-40, 0],
                filter: ["blur(8px)", "blur(0px)"],
                transition: { duration: 0.6, ease: "easeOut", delay: 0.2},
            }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="bg-gray-200 dark:bg-[#0C0C0E] border-2 shadow-xl border-gray-100 dark:border-gray-900 w-full py-[clamp(_24px,_1.5vw,_36px)] rounded-[16px] sm:rounded-[24px] mb-8 px-[clamp(_24px,_1.5vw,_48px)] flex justify-between items-center transition duration-500">
                <div className="scale-y-[-1]">
                    <HopperElement className="hidden lg:block" />
                </div>

                <div className="flex flex-col justify-center items-center gap-[clamp(_14px,_1.5vw,_24px)]">
                    <div className="flex gap-[clamp(_4px,_1vw,_8px)] justify-center items-center">
                        <div className="relative w-[clamp(_36px,_5vw,_56px)] h-[clamp(_36px,_5vw,_56px)]">
                            <Image
                                src={theme === "dark" ? LogoPrimary : LogoSecondary}
                                alt="Logo"
                                fill
                                className="object-contain"
                                priority
                                unoptimized
                            />
                        </div>
                        <span className="text font-primary font-bold text-[clamp(_20px,_3vw,_30px)]">
              Daniel <span className="text-green">Kadlec</span>
            </span>
                    </div>

                    <NavLinks className="!flex" />

                    <div className="flex gap-[clamp(_16px,_3vw,_32px)] justify-center items-center">
                        <LanguageSwitcher />
                        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
                    </div>

                    <div>
            <span className="flex gap-6 items-center">
              <SocialIcons isSmall={true} />
            </span>
                    </div>
                </div>

                <div className="scale-x-[-1]">
                    <HopperElement className="hidden lg:block" />
                </div>
            </div>
        </motion.footer>
    );
}
