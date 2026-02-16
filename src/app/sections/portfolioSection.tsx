'use client'

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/utils/LanguageContext";
import Project from "@/components/Project";
import Heading from "@/components/Heading";
import { projectsEn } from "@/data/projects/projects.en";
import { projectsCz } from "@/data/projects/projects.cz";
import Button from "@/components/Button";
import Link from "next/link";
import {TechName} from "@/components/Technologies";
import { childAnimation, containerAnimation } from "@/utils/animations";

export default function PortfolioSection() {
    const { lang, dict } = useLanguage();
    const projects = lang === "cz" ? projectsCz : projectsEn;

    const [hovered, setHovered] = useState<string | null>(null);
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    const getStyle = (id: string) => {
        const isHovered = hovered === id;
        const isOther = hovered !== null && !isHovered;

        return `
            transition-all duration-400 ease-out
            ${isOther ? "opacity-50" : "opacity-100"}
        `;
    };

    return (
        <motion.section
            id="portfolio"
            className="section mb-[clamp(124px,_25vw,_256px)]"
            variants={containerAnimation}
            initial="hidden"
            whileInView={hydrated ? "visible" : undefined}
            viewport={{ once: true, amount: 0.6 }}
        >
            <Heading
                Heading={dict.portfolioSection.heading()}
                Subheading={dict.portfolioSection.subheading}
            />
                <motion.div
                    className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-[clamp(32px,_5vw,_64px)]
                    mt-8
                    lg:mt-4
                    [&>*:nth-child(even)]:mt-[clamp(16px,_2vw,_32px)]
                    max-md:[&>*:nth-child(even)]:mt-0
                "
                >
                    {projects
                        .filter((p) => p.featured)
                        .map((p) => (
                                <motion.div
                                    key={p.id}
                                    variants={childAnimation}
                                    onMouseEnter={() => setHovered(p.id)}
                                    onMouseLeave={() => setHovered(null)}
                                >
                                    <div className={getStyle(p.id)}>
                                        <Project
                                            title={p.title}
                                            subtitle={p.subtitle}
                                            image={p.image_preview}
                                            link={p.link}
                                            techs={p.technologies  as TechName[]}
                                        />
                                    </div>
                            </motion.div>
                        ))}
                </motion.div>
            <motion.div variants={childAnimation} className="mt-24 w-full flex justify-center">
                <Link href="/portfolio" className="w-full sm:w-1/2">
                    <Button className="w-full">{dict.portfolioSection.button}</Button>
                </Link>
            </motion.div>
        </motion.section>
    );
}
