'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { childAnimation, containerAnimation } from "@/utils/animations";

interface IconsProps {
    isSmall: boolean;
}

export default function SocialIcons({ isSmall }: IconsProps) {
    const [hovered, setHovered] = useState<string | null>(null);

    const baseClasses = "cursor-pointer transition-all duration-600 ease-out text";

    const getStyle = (id: string) => {
        const isHovered = hovered === id;
        const isOther = hovered !== null && !isHovered;

        return `
      ${baseClasses}
      ${isHovered ? "" : isOther ? "opacity-[30%] scale-[100%]" : "opacity-100 scale-[102%]"}
    `;
    };

    const sizeClass = !isSmall
        ? "w-[clamp(32px,5.5vw,48px)] h-[clamp(32px,5.5vw,48px)]"
        : "w-[clamp(30px,5vw,32px)] h-[clamp(30px,5vw,32px)]";

    const gapClass = !isSmall
        ? "px-[clamp(_6px,_2vw,_15px)]"
        : "px-[clamp(_6px,_2vw,_15px)]";

    return (
        <motion.span
            className="flex items-center"
            variants={containerAnimation}
            initial="hidden"
            animate="visible"
        >
            {[
                { id: "github", icon: FaGithub, href: "https://github.com/Decayyer107" },
                { id: "twitter", icon: FaInstagram, href: "https://www.instagram.com/kadlec.design/" },
                { id: "linkedin", icon: FaLinkedin, href: "https://www.linkedin.com/in/daniel-kadlec-903759379/" },
                { id: "email", icon: FaEnvelope, href: "mailto:kontakt@danielkadlec.cz" },
            ].map(({ id, icon: Icon, href }) => (
                <motion.a
                    key={id}
                    href={href}
                    target={"_blank"}
                    variants={childAnimation}
                    className={gapClass}
                    onMouseEnter={() => setHovered(id)}
                    onMouseLeave={() => setHovered(null)}
                >
                    <Icon className={`${getStyle(id)} ${sizeClass}`} />
                </motion.a>
            ))}
        </motion.span>
    );
}
