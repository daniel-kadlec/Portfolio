'use client'

import { useState } from "react";
import { useLanguage } from "@/utils/LanguageContext";
import Project from "@/components/Project";
import Heading from "@/components/Heading";
import { projectsEn } from "@/data/projects/projects.en";
import { projectsCz } from "@/data/projects/projects.cz";
import Button from "@/components/Button";
import Link from "next/link";
import {TechName} from "@/components/Technologies";

export default function PortfolioSection() {
    const { lang, dict } = useLanguage();
    const projects = lang === "cz" ? projectsCz : projectsEn;

    const [hovered, setHovered] = useState<string | null>(null);

    const getStyle = (id: string) => {
        const isHovered = hovered === id;
        const isOther = hovered !== null && !isHovered;

        return `
            transition-all duration-400 ease-out
            ${isOther ? "opacity-50" : "opacity-100"}
        `;
    };

    return (
        <section
            id="portfolio"
            className="section mb-[256px]"
        >
                <div
                    className="
                    grid
                    grid-cols-1
                    gap-[64px]
                    mt-8
                    [&>*:nth-child(even)]:mt-[32px]
                "
                >
                    {projects
                        .filter((p) => p.featured)
                        .map((p) => (
                                <div
                                    key={p.id}
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
                                </div>
                        ))}
                </div>
            <div className="mt-24 w-full flex justify-center">
                <Link href="/portfolio" className="w-full">
                    <Button className="w-full">nigger</Button>
                </Link>
            </div>
        </section>
    );
}
