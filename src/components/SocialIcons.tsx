'use client'

import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

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
        ? "w-[48px] h-[48px]"
        : "w-[32px] h-[32px]";

    const gapClass = !isSmall
        ? "px-[15px]"
        : "px-[15px]";

    return (
        <span className="flex items-center">
            {[
                { id: "github", icon: FaGithub, href: "https://github.com/daniel-kadlec" },
                { id: "instagram", icon: FaInstagram, href: "https://www.instagram.com/kadlec.design/" },
                { id: "linkedin", icon: FaLinkedin, href: "https://www.linkedin.com/in/daniel-kadlec-903759379/" },
                { id: "email", icon: FaEnvelope, href: "mailto:kontakt@danielkadlec.cz" },
            ].map(({ id, icon: Icon, href }) => (
                <a
                    key={id}
                    href={href}
                    target={"_blank"}
                    className={gapClass}
                    onMouseEnter={() => setHovered(id)}
                    onMouseLeave={() => setHovered(null)}
                >
                    <Icon className={`${getStyle(id)} ${sizeClass}`} />
                </a>
            ))}
        </span>
    );
}
