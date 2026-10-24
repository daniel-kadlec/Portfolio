"use client";

import React from "react";
import {
    // Frontend
    Html5Original,
    Css3Original,
    JavascriptOriginal,
    TypescriptOriginal,
    ReactOriginal,
    TailwindcssOriginal,

    // Frameworks / Build tools
    NextjsOriginal,
    VitejsOriginal,
    FramermotionOriginal,

    // Backend
    NodejsOriginal,

    // Design
    FigmaOriginal,
    PhotoshopOriginal,
    IllustratorOriginal,

    // Version control
    GitOriginal,
} from "devicons-react";
export type TechName =
// Frontend
    | "html"
    | "css"
    | "javascript"
    | "typescript"
    | "react"
    | "tailwind"

    // Frameworks / Build tools
    | "nextjs"
    | "vite"
    | "framer"

    // Backend

    // Design
    | "figma"
    | "photoshop"
    | "illustrator"

    // Version control
    | "git";

export const getTechMap = (size = 20) =>
    ({
        //  Frontend
        html: { icon: <Html5Original size={size} />, label: "HTML5" },
        css: { icon: <Css3Original size={size} />, label: "CSS3" },
        javascript: { icon: <JavascriptOriginal size={size} />, label: "JavaScript" },
        typescript: { icon: <TypescriptOriginal size={size} />, label: "TypeScript" },
        react: { icon: <ReactOriginal size={size} />, label: "React" },
        tailwind: { icon: <TailwindcssOriginal size={size} />, label: "Tailwind CSS" },

        // Frameworks / Build Tools
        nextjs: { icon: <NextjsOriginal size={size} />, label: "Next.js" },
        vite: { icon: <VitejsOriginal size={size} />, label: "Vite" },
        framer: { icon: <FramermotionOriginal size={size} />, label: "Framer Motion" },

        // Backend

        // Design
        figma: { icon: <FigmaOriginal size={size} />, label: "Figma" },
        photoshop: { icon: <PhotoshopOriginal size={size} />, label: "Photoshop" },
        illustrator: { icon: <IllustratorOriginal size={size} />, label: "Illustrator" },

        // Version Control
        git: { icon: <GitOriginal size={size} />, label: "Git" },
    } as const);

interface TechStackProps {
    techs: TechName[];
    className?: string;
    size?: number;
}

export default function TechStack({ techs, className = "", size = 20 }: TechStackProps) {
    const techMap = getTechMap(size);

    return (
        <div className={`flex flex-wrap gap-[24px] text-center ${className}`}>
            {techs.map((tech) => {
                const item = techMap[tech];
                if (!item) return null;
                return (
                    <div
                        key={tech}
                        className="py-2 px-4 flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-md font-bold transition-all duration-500 cursor-default"
                    >
                        {item.icon}
                        <span className="!text-[18px] font-medium text-secondary">
                            {item.label}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
