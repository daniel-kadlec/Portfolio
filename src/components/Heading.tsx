"use client";

import { ReactNode } from "react";


interface HeadingProps {
    Heading: ReactNode;
    Subheading?: string;
    className?: string;
}

export default function Heading({ Heading, Subheading, className }: HeadingProps) {
    return (
        <div className={`mb-[clamp(32px,3vw,72px)] ${className ?? ""}`}>
            <h1
                className="text-h1 tracking-tight"
            >
                {Heading}
            </h1>

            {Subheading && (
                <h2
                    className="text-subheading mt-3 sm:mt-0 text-gray-300"
                >
                    {Subheading}
                </h2>
            )}
        </div>
    );
}
