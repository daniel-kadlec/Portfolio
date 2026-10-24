"use client";

import Link from "next/link";

import { useLanguage } from "@/utils/LanguageContext";
import SocialIcons from "@/components/SocialIcons";
import Button from "../../components/Button";

export default function Hero() {
    const { dict } = useLanguage();

    return (
        <section className="section min-h-screen flex flex-col justify-center relative">

            {/* Main heading & paragraph */}
            <div className="relative z-10 flex flex-col justify-start">
                <h1
                    className="text-h1 !text-[64px]"
                >
                    {dict.hero.heading()}
                </h1>

            </div>

            {/* Social icons & button */}
            <div
                className="relative z-10 flex flex-col items-end gap-[20px] mt-[32px]"
            >
                <SocialIcons isSmall={false} />
                <Link href="/portfolio">
                    <Button>Nigger</Button>
                </Link>
            </div>
        </section>
    );
}
