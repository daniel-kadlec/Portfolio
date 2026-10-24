'use client'

import LanguageSwitcher from './LanguageSwicther';
import SocialIcons from "@/components/SocialIcons";
import Image from "next/image";
import NavLinks from "@/components/NavLinks";

const LogoPrimary = "/logo/logomark-primary.svg";

export default function Footer() {
    return (
        <footer className="section overflow-hidden">
            <div className="bg-gray-200 dark:bg-[#0C0C0E] border-2 shadow-xl border-gray-100 dark:border-gray-900 w-full py-[36px] rounded-[16px] mb-8 px-[48px] flex justify-between items-center transition duration-500">
                <div className="scale-y-[-1]">
                </div>

                <div className="flex flex-col justify-center items-center gap-[24px]">
                    <div className="flex gap-[8px] justify-center items-center">
                        <div className="relative w-[56px] h-[56px]">
                            <Image
                                src={LogoPrimary}
                                alt="Logo"
                                fill
                                className="object-contain"
                                priority
                                unoptimized
                            />
                        </div>
                        <span className="text font-primary font-bold text-[30px]">
              Daniel <span className="text-green">Kadlec</span>
            </span>
                    </div>

                    <NavLinks className="!flex" />

                    <div className="flex gap-[32px] justify-center items-center">
                        <LanguageSwitcher />
                    </div>

                    <div>
            <span className="flex gap-6 items-center">
              <SocialIcons isSmall={true} />
            </span>
                    </div>
                </div>

                <div className="scale-x-[-1]">
                </div>
            </div>
        </footer>
    );
}
