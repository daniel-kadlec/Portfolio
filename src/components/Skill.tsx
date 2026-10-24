import React, { ReactNode } from "react";

interface FeatureCardProps {
    heading: ReactNode;
    paragraph: ReactNode;
    icon: ReactNode;
    className?: string;
}

export default function Skill({ heading, paragraph, icon, className = "" }: FeatureCardProps) {
    return (
        <article
            className={`w-full bg-gray-200 dark:bg-gray-900 rounded-xl p-[48px] flex items-start justify-between gap-6 shadow-md transition duration-500 relative ${className}`}
        >
            <div className="flex flex-col gap-4">
                <h3 className="text-h2">
                    {heading}
                </h3>
                <p className="text-secondary text-2xl">
                    {paragraph}
                </p>
            </div>
            <div className="flex-shrink-0 text-green-secondart text-green-secondary dark:text-green-primary text-[58px] block absolute top-[32px] right-[32px]">
                {icon}
            </div>
        </article>
    );
}
