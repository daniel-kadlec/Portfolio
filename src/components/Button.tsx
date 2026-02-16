"use client";

import { ButtonHTMLAttributes, ReactNode, useEffect, useState } from "react";
import { motion, MotionProps } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

type ButtonProps = {
    children: ReactNode;
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> & MotionProps;

export default function Button({ children, className, ...props }: ButtonProps) {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    return (
        <motion.button
            {...props}
            initial={hydrated ? "initial" : false}
            whileHover="hover"
            className={`relative overflow-hidden flex justify-center text-left items-center gap-3 py-[clamp(12px,_2vw,_15px)] px-[clamp(42px,_6vw,_64px)] border-2 rounded-full font-secondary font-bold text-[clamp(15px,_2vw,_20px)] text-offblack dark:text-offwhite hover:text-offwhite hover:dark:text-offblack border-offblack dark:border-offwhite transition-all cursor-pointer ${className}`}
        >
            <span className="relative z-10 pointer-events-none">
                {children}
            </span>

            <motion.span className="relative flex items-center justify-center">
                <motion.span
                    variants={{
                        initial: { scale: 1 },
                        hover: { scale: 105 },
                    }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="absolute w-3 h-3 rounded-full bg-offblack dark:bg-offwhite"
                />

                <motion.span
                    variants={{
                        initial: { opacity: 0 },
                        hover: { opacity: 1 },
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="relative z-10 "
                >
                    <FiExternalLink className="text-2xl dark:text-offblack text-offwhite" />
                </motion.span>
            </motion.span>
        </motion.button>
    );
}
