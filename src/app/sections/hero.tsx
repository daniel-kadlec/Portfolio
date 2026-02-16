"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useLanguage } from "@/utils/LanguageContext";
import HeroElement from "@/components/HeroElement";
import SocialIcons from "@/components/SocialIcons";
import Button from "../../components/Button";

export default function Hero() {
    const { dict } = useLanguage();
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    return (
        <section className="section min-h-screen flex flex-col justify-center relative">
            <HeroElement />

            {/* Main heading & paragraph */}
            <motion.div className="relative z-10 flex flex-col justify-start">
                <motion.h1
                    className="text-h1 !text-[clamp(36px,_7vw,_64px)]"
                    initial={{
                        opacity: 0,
                        y: 20,
                        scale: 0.97,
                        filter: "blur(4px)",
                    }}
                    animate={hydrated ? {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        filter: "blur(0px)",
                        transition: {
                            ease: [0.22, 1, 0.36, 1],
                            opacity: { delay: 0.6, duration: 0.4 },
                            y: { delay: 0.6, duration: 0.6 },
                            filter: { delay: 0.6, duration: 0.8 },
                            letterSpacing: { delay: 0.6, duration: 0.8 },
                        },
                    } : undefined}
                >
                    {dict.hero.heading()}
                </motion.h1>

                <motion.h2
                    className="text-body-large"
                    initial={{
                        opacity: 0,
                        y: 20,
                        scale: 0.97,
                        filter: "blur(4px)",
                    }}
                    animate={hydrated ? {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        filter: "blur(0px)",
                        transition: {
                            ease: [0.22, 1, 0.36, 1],
                            opacity: { delay: 0.7, duration: 0.4 },
                            y: { delay: 0.7, duration: 0.6 },
                            filter: { delay: 0.7, duration: 0.8 },
                            letterSpacing: { delay: 0.7, duration: 0.8 },
                        },
                    } : undefined}
                >
                    {dict.hero.paragraph()}
                </motion.h2>
            </motion.div>

            {/* Social icons & button */}
            <motion.div
                className="relative z-10 flex flex-col items-end gap-[clamp(10px,_4vw,_20px)] mt-[clamp(48px,_4vw,_32px)]"
                initial={{
                    opacity: 0,
                    y: 20,
                    scale: 0.95,
                    filter: "blur(8px)",
                }}
                animate={hydrated ? {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                } : undefined}
                transition={{
                    delay: 0.8,
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                }}
                style={{ willChange: "filter" }}
            >
                <SocialIcons isSmall={false} />
                <Link href="/portfolio">
                    <Button>{dict.hero.button}</Button>
                </Link>
            </motion.div>
        </section>
    );
}
