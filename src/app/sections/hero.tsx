"use client";

import Link from "next/link";

import { useLanguage } from "@/utils/LanguageContext";
import HeroElement from "@/components/HeroElement";
import SocialIcons from "@/components/SocialIcons";
import Button from "../../components/Button";

export default function Hero() {
    const { dict } = useLanguage();

    return (
        <section className="section min-h-screen flex flex-col justify-center relative">
            <HeroElement />

            {/* Main heading & paragraph */}
            <div className="relative z-10 flex flex-col justify-start">
                <h1
                    className="text-h1 !text-[clamp(36px,_7vw,_64px)]"
                >
                    {dict.hero.heading()}
                </h1>

                <h2
                    className="text-body-large"
                >
                    {dict.hero.paragraph()}
                </h2>
            </div>

            {/* Social icons & button */}
            <div
                className="relative z-10 flex flex-col items-end gap-[clamp(10px,_4vw,_20px)] mt-[clamp(48px,_4vw,_32px)]"
            >
                <SocialIcons isSmall={false} />
                <Link href="/portfolio">
                    <Button>{dict.hero.button}</Button>
                </Link>
            </div>
        </section>
    );
}
