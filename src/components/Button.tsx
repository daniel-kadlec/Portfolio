"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { FiExternalLink } from "react-icons/fi";

type ButtonProps = {
    children: ReactNode;
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={`relative overflow-hidden flex justify-center text-left items-center gap-3 py-[15px] px-[64px] border-2 rounded-full font-secondary font-bold text-[20px] text-offblack dark:text-offwhite dark:border-offwhite transition-all cursor-pointer ${className}`}
        >
            <span className="relative z-10 pointer-events-none">
                {children}
            </span>

            <span className="relative flex items-center justify-center">
                <span className="absolute w-3 h-3 rounded-full bg-offblack dark:bg-offwhite" />
                <span className="relative z-10 ">
                </span>
            </span>
        </button>
    );
}
